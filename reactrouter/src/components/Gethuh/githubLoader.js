export async function githubLoader() {
  const response = await fetch('https://api.github.com/users/nekzahid123-afg')

  if (!response.ok) {
    throw new Response('Unable to load Github profile', {
      status: response.status,
    })
  }

  return response.json()
}
