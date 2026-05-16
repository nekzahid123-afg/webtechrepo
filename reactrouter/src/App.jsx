import heroImage from './assets/hero.png'

function App() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
          Build routed React pages with a clean shared layout.
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          This home page sits inside the main layout, while the header, footer,
          users page, contact page, and GitHub profile page are handled through
          React Router routes.
        </p>
      </div>
      <img
        className="w-full rounded-lg object-cover shadow-sm"
        src={heroImage}
        alt="React Router project preview"
      />
    </section>
  )
}

export default App
