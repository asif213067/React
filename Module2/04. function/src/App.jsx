// import React from 'react'

const App = () => {

  const clickBtn = () => {
    console.log("Btn clicked");
  }

  const inputChanging = (val) => {
    console.log(val);
  }

  return (
    <>
      <div>
        <button onClick={clickBtn}>Click Me</button>
        <button onMouseEnter={() => {
          console.log("Mouse Enterexd...");
        }}>Explore..!</button>
      </div>

      <div>
        <input
          onChange={(elem) => {
            inputChanging(elem.target.value);
          }}
          type="text"
          placeholder="Enter Name"
        />
      </div>

      <div>
        <div onMouseMove={(elem) => {
          console.log(elem.clientX, elem.clientY);
        }}
        className="box">
          The box...
        </div>
      </div>

      <div onWheel={(elem) => {
        console.log(elem.deltaY);
        
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </>
  )
}

export default App