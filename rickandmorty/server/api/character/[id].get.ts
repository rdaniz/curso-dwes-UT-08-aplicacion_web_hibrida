
type CharacterDetail = {
  id: number
  name: string
  status: string
  species: string
  location: {
    name: string
  }
}

export default defineEventHandler(async (event): Promise<CharacterDetail> => {
  const id = getRouterParam(event, 'id')

  return await $fetch<CharacterDetail>(
    `https://rickandmortyapi.com/api/character/${id}`
  )
})
