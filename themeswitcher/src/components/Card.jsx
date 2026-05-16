import heroImg from '../assets/hero.png'

export default function Card() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
      <img
        className="h-56 w-full object-cover"
        src={"https://images.unsplash.com/photo-1503327431567-3ab5e6e79140?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRoZW1lJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"}
        alt="Theme switcher preview"
      />

      <div className="space-y-3 p-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Context API Theme Switcher
        </h2>
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
          This card changes its colors from the theme value shared through React
          Context.
        </p>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
          Read More
        </button>
      </div>
    </div>
  )
}
