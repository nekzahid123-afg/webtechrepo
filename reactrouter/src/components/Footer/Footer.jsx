import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <Link to="/" className="text-2xl font-semibold">
          your <span className="text-orange-700">logo</span>
        </Link>

        <div>
          <h2 className="text-xs font-bold uppercase text-gray-900">Resources</h2>
          <Link className="mt-5 block text-sm text-gray-600 hover:text-orange-700" to="/">
            Home
          </Link>
          <Link className="mt-3 block text-sm text-gray-600 hover:text-orange-700" to="/about">
            About
          </Link>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase text-gray-900">Follow us</h2>
          <Link className="mt-5 block text-sm text-gray-600 hover:text-orange-700" to="/github">
            Github
          </Link>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase text-gray-900">Legal</h2>
          <a className="mt-5 block text-sm text-gray-600 hover:text-orange-700" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
