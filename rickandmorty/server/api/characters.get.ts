
type ApiCharacter = {
  id: number
  name: string
}

type ApiResponse = {
  results: ApiCharacter[]
}

export type CharacterListItem = {
  id: number
  name: string
}

export default defineEventHandler(async (): Promise<CharacterListItem[]> => {
  const data = await $fetch<ApiResponse>(
    'https://rickandmortyapi.com/api/character'
  )

  return data.results.slice(0, 10).map((c) => ({
    id: c.id,
    name: c.name
  }))
})
