// import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CoursesDetails />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App