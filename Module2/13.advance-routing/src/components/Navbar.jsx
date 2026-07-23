// import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-4 bg-blue-400 py-6">
            <h2 className="font-bold text-2xl">Asif</h2>
            <div className="flex gap-4 ">
                <Link to='/' className="text-lg font-semibold"  >Home</Link>
                <Link to='/about' className="text-lg font-semibold" >About</Link>
                <Link to='/product' className="text-lg font-semibold" >Product</Link>
                <Link to='/courses' className="text-lg font-semibold" >Courses</Link>
                <Link to='/contact' className="text-lg font-semibold" >Contact</Link>
            </div>
        </div>
    )
}

export default Navbar