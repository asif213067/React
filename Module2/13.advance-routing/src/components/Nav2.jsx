// import React from 'react'

import { useNavigate } from "react-router-dom"

const Nav2 = () => {

    let navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigate('/')
                }}
                className="bg-green-600 px-5 py-3 m-2 rounded active:scale-95 "
            >
                Return to Home page
            </button>

            <button
                onClick={() => {
                    navigate(-1)
                }}
                className="bg-green-600 px-5 py-3 m-2 rounded active:scale-95 "
            >
                Back
            </button>

            <button
                onClick={() => {
                    navigate(+1)
                }}
                className="bg-green-600 px-5 py-3 m-2 rounded active:scale-95 "
            >
                Next
            </button>
        </div>
    )
}

export default Nav2