// import React from 'react'

const SecondCard = (props) => {
    // console.log(props);
    return (
        <div className='second_card'>
            <img src={props.img} alt="" />
            <h2>Name: {props.name} | Age: {props.age}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, molestiae culpa alias itaque id officia?</p>
            <button className='btn'>View Profile</button>
        </div>
    )
}

export default SecondCard