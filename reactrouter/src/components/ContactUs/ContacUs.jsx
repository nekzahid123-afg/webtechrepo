export default function ContacUs() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-gray-900">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Send us a message and we will get back to you soon.
      </p>
      <form className="mt-8 grid max-w-xl gap-4">
        <input
          className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-orange-700"
          placeholder="Your name"
          type="text"
        />
        <input
          className="rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-orange-700"
          placeholder="Email address"
          type="email"
        />
        <textarea
          className="min-h-32 rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-orange-700"
          placeholder="Message"
        />
        <button className="w-fit rounded-md bg-orange-700 px-6 py-3 font-medium text-white hover:bg-orange-800">
          Submit
        </button>
      </form>
    </section>
  )
}
