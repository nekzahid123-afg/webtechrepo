import { NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Github', path: '/github' },
]

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="text-2xl font-semibold tracking-normal">
          your <span className="text-orange-700">logo</span>
        </NavLink>

        <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-orange-700' : 'transition hover:text-orange-700'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5 text-sm font-medium">
          <button className="text-gray-700 transition hover:text-orange-700">
            Log in
          </button>
          <button className="rounded-md bg-orange-700 px-5 py-3 text-white transition hover:bg-orange-800">
            Get started
          </button>
        </div>
      </nav>
    </header>
  )
}
