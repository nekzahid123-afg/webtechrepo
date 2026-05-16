import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Users from './components/Users/Users.jsx'
import ContacUs from './components/ContactUs/ContacUs.jsx'
import Gethub from './components/Gethuh/Gethub.jsx'
import About from './components/About/About.jsx'
import { githubLoader } from './components/Gethuh/githubLoader.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <ContacUs />,
      },
      {
        path: 'github',
        element: <Gethub />,
        loader: githubLoader,
      },
      {
        path: 'user/:userid',
        element: <Users />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
