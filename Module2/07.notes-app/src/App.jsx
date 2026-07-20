import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, note });
    setTask(copyTask);
    // console.log(copyTask);

    setTitle("");
    setNote("");
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    console.log(copyTask[idx]);

    copyTask.splice(idx, 1);
    setTask(copyTask); 
  }



  return (
    <>
      <div className="h-screen lg:flex bg-black text-white">
        <form onSubmit={submitHandler} className="flex flex-col gap-2 lg:w-1/2 items-start p-10">
          <h1 className='text-3xl font-bold'>Your Notes</h1>

          {/* for note tittle  */}
          <input
            className="px-5 py-3 font-medium border-2 w-full outline-none rounded"
            type="text"
            placeholder="Enter Your Note Tittle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          {/* for note details  */}
          <textarea
            className="px-5 py-3 font-medium border-2 w-full h-30 outline-none rounded"
            type="text"
            placeholder="Write Details Here"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />

          <button
            className="bg-white text-black active:scale-95  px-5 py-3 border-2 w-full outline-none rounded font-medium"
          >
            Add Note
          </button>

        </form>
        <div className=" bg-gray-900 lg:w-1/2 p-10 lg:border-l-2">
          <h1 className='text-3xl font-bold'>Your Notes</h1>

          <div className='flex flex-wrap gap-5 items-start justify-start mt-6 h-[90%] overflow-auto'>
            {task.map((elem, idx) => {

              return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.note}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx);
                }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App