import { useLoaderData } from 'react-router-dom'

export default function Gethub() {
  const data = useLoaderData()

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center gap-8 bg-gray-600 p-8 text-white md:flex-row md:items-start">
        <img
          className="h-48 w-48 object-cover"
          src={data.avatar_url}
          alt={`${data.login} Github profile`}
        />
        <div>
          <h1 className="text-3xl font-semibold">
            Github followers: {data.followers}
          </h1>
          <p className="mt-3 text-lg text-gray-100">{data.name || data.login}</p>
          <a
            className="mt-6 inline-block rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View profile
          </a>
        </div>
      </div>
    </section>
  )
}
