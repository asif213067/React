import {useState} from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    console.log(response);
    console.log(data);
  }

  // const getData2 = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');

  //   console.log(response);
  //   console.log(response.data);
  // }

  const [data, setData] = useState([]);

  const getData2 = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    // console.log(response);
    console.log(response.data);

    setData(response.data);
  }


  return (
    <>
      <div>
        <h1>getData by fetch()</h1>
        <button onClick={getData}>Click Here</button>

        <h1>getData by axios.get</h1>
        <button onClick={getData2}>Get Data</button>
        <div>
          {data.map((elem, idx) => {

            return <div>
              <h3>Hello {idx} {elem.author}</h3>
              <img src={elem.download_url} alt="" width={200} height={150} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App