export async function getDataFromDb(url: string) {
  const result: Response = await fetch(url)

  if (!result.ok) {
    throw new Error(`Couldn't fetch ${url}, status: ${result.status}`)
  }

  return result.json()
}
