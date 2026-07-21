import { useState } from 'react'

const SimpleUseState = () => {


    // first div
    const [n, setN] = useState(100)
    const [nam, setNam] = useState("Asif")
    const [arr, setArr] = useState([10, 20, 30])
    const [user, setUser] = useState({
        name: "Asif",
        age: 22,
        city: "Dhaka"
    });

    const changeDetail = () => {
        setN(95);
        setNam("Khan");
        setArr([100, 200, 1000]);
        setUser({
            ...user,
            name: "Khan",
            age: 24,
            city: "Pabna"
        });
    }

    // second div
    const [num, setNum] = useState(0)

    const increseNum = () => {
        setNum(num + 1);
    }

    const decreseNum = () => {
        setNum(num - 1);
    }

    // const jump5 = () => {
    //   setNum(num+5);
    // }

    return (
        <div>
            <div>
                <h1>The new num is {n}. <br /> The user name is {nam}. <br /> The arr is {arr}. New user detail {user.name}, {user.age}, {user.city}</h1>
                <button onClick={changeDetail}>Click Here</button>
            </div>

            <div className='box'>
                <h1>{num}</h1>
                <div className="btn">
                    <button onClick={increseNum}>Increase</button>
                    <button onClick={decreseNum}>Decrease</button>
                    <button onClick={() => { setNum(num + 5) }}>Add 5</button>
                </div>
            </div>
        </div>
    )
}

export default SimpleUseState