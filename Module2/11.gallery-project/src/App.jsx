import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  // const getData = async () => {
  //   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
  //   setUserData(response.data);
  // }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
      setUserData(response.data);
    };

    getData();
  }, [index])

  let printUserData = <h3 className="text-gray-400 font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Loading....</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {

      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className="bg-black text-white px-12 py-4 h-screen overflow-auto">
      {/* <button
          onClick={getData}
          className="bg-green-300 text-2xl text-black overflow-auto m-5 px-5 py-3 font-bold rounded active:scale-95"
        >
          Get Data
        </button> */}

      <div className="flex flex-wrap h-[82%] gap-4 p-2">
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-6 my-4'>
        <button
          style={{opacity: index == 1 ? 0.6 : 1}}
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black font-semibold px-5 py-2 rounded'
        >
          Prev
        </button>

        <h3>Page {index}</h3>

        <button
          onClick={() => {
            if (index < 67) {
              setUserData([]);
              setIndex(index + 1);
            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black font-semibold px-5 py-2 rounded'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App