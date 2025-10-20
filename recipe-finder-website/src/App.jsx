import { useState, useEffect } from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import RecipesPage from "./pages/RecipesPage"
import RecipeDetailsPage from "./pages/RecipeDetailsPage"

import Header from "./components/Header"
import Footer from "./components/Footer"

import hamburgerMenu from "./assets/images/icon-hamburger-menu.svg";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  let linkClasses = "px-2 py-3 lg:p-0 text-[18px] leading-[150%] -tracking-[0.3px] font-semibold text-strong-950 relative inline-block group"
  let navBtnClasses = "w-full mt-3 lg:mt-0 px-4 py-3 text-[20px] leading-[140%] -tracking-[0.5px] font-bold text-white text-center bg-neutral-900 rounded-[10px]"
  let spanClasses = "absolute left-0 bottom-0 w-full h-[3px] opacity-0 bg-orange rounded-full transition-opacity duration-300 ease-in-out group-hover:opacity-100"

  return (
    <>
      <Header>
        <nav className="hidden lg:flex gap-x-10">
          <Link className={linkClasses} to='/'>
            Home
            <span className={`${spanClasses} ${location.pathname === '/' ? 'opacity-100' : ''}`} ></span>
          </Link>
          <Link className={linkClasses} to='/about'>
            About
            <span className={`${spanClasses} ${location.pathname === '/about' ? 'opacity-100' : ''}`}></span>
          </Link>
          <Link className={linkClasses} to='/recipes'>
            Recipes
            <span className={`${spanClasses} ${location.pathname === '/recipes' ? 'opacity-100' : ''}`}></span>
          </Link>
        </nav>

        <div className="lg:hidden">
            <nav className={isMenuOpen ? "p-2 bg-white rounded-[8px] flex flex-col absolute top-[73px] left-4 right-4 z-10" : "hidden"}>
              <Link onClick={() => setIsMenuOpen(!isMenuOpen)}  className={linkClasses} to='/'>Home</Link>
              <Link onClick={() => setIsMenuOpen(!isMenuOpen)} className={linkClasses} to='/about'>About</Link>
              <Link onClick={() => setIsMenuOpen(!isMenuOpen)} className={linkClasses} to='/recipes'>Recipes</Link>
              <Link onClick={() => setIsMenuOpen(!isMenuOpen)} className={navBtnClasses} to='/recipes'>Browse Recipes</Link>
            </nav>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-10 w-10 bg-neutral-300 rounded-[4px] flex justify-center items-center cursor-pointer">
                <img src={hamburgerMenu} alt="open menu" />
            </div>
        </div>
      </Header>

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/recipes" element={<RecipesPage />}>
          <Route path=":slug" element={<RecipeDetailsPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
