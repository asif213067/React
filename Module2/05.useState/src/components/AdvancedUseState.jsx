import { useState } from 'react'

const AdvancedUseState = () => {

    const [user, setUser] = useState({
        name: "Asif",
        age: 24
    });

    const [arr, setArr] = useState([10, 20, 30]);

    const [num, setNum] = useState(100)

    const changeData = () => {

        // const newUser = {...user};
        // newUser.name = "Asif Khan";
        // newUser.age = 26

        // setUser(newUser);

        //or 

        setUser({
            ...user,
            name: "Asif Khan",
            age: 26,
        });

        // const newArr = [...arr];
        // newArr.push(11111);
        // newArr.push(99999);
        // setArr(newArr);

        setArr([...arr, 4, 5]);
        console.log(arr);

        // normal update 
        // setNum(num+1);
        // setNum(num+1);
        // setNum(num+1);

        // batch update 
        setNum(prev => (prev+1));
        setNum(prev => (prev+1));
        setNum(prev => (prev+1));
    }

    return (
        <div>
            <h1>This is Advanced useState Section</h1>
            <h3>the new user is {user.name} and his age is {user.age}</h3>

            <h3>Print my arr {arr}</h3>

            <button onClick={changeData}>Click Me</button>

            <div className='box'>
                <h1>{num}</h1>
                <div className="btn">
                    <button onClick={changeData}>Click Me</button>
                </div>
            </div>

        </div>
    )
}

export default AdvancedUseState