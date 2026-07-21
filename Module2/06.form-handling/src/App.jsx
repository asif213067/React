import {useState} from 'react'


const App = () => {

  const [tittle, setTittle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", tittle);

    setTittle('');
  }

  return (
    <>
      {/* form handling & two-way binding */}
      <div>
        {/* <form onSubmit={(elem) => {
          submitHandler(elem);
        }}> */}
        {/* or */}
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={tittle}
            onChange={(e) => {
              // console.log(e.target.value);
              setTittle(e.target.value);
            }} />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App