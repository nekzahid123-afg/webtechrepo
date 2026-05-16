import { useParams } from 'react-router-dom'

export default function Users() {
  const { userid } = useParams()

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-gray-900">Users: {userid}</h1>
    </section>
  )
}
