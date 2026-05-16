import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
   const [themeMode,setThemeMode]=useState("light")
   

   const lightTheme=()=>{
       setThemeMode("light")
   }
   const darkTheme=()=>{
    setThemeMode("dark")
   }
    
   useEffect(()=>{
     document.querySelector("html").classList.remove("light","dark")
     document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  return (
        <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
          <div className="flex min-h-screen flex-wrap items-center bg-gray-100 px-4 py-10 transition-colors duration-300 dark:bg-gray-950">
       <div className="w-full">
         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
         </div>
         <div className="w-full max-w-sm mx-auto">
          <Card />
         </div>
       </div>
          </div>
      </ThemeProvider>
  )
}

export default App
