// 1. Añadir status al tipo de la API
type ApiCharacter = {
  id: number
  name: string
  status: string // <-- Aquí añadimos el status
}

type ApiResponse = {
  results: ApiCharacter[]
}

// Añadir status al tipo que exportamos para el front
export type CharacterListItem = {
  id: number
  name: string
  status: string // <-- Aquí añadimos el status
}

export default defineEventHandler(async (): Promise<CharacterListItem[]> => {
  const data = await $fetch<ApiResponse>(
    'https://rickandmortyapi.com/api/character'
  )

  // Incluir status en el map para que se devuelva al front
  return data.results.slice(0, 10).map((c) => ({
    id: c.id,
    name: c.name,
    status: c.status
  }))
})
