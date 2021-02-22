export async function sendFormData(url: string, data: string) {
  const result: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })

  return result.json()
}
