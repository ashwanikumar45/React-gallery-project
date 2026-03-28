import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {

  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    // console.log(response.data);
    setUser(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
    Loading... </h3>

  if (user.length > 0) {
    printUserData = user.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='bg-white h-70 w-62 overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover ' src={elem.download_url} alt="photo" />
          </div>
          <h2 className='font-semibold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto text-white bg-black '>

      <div className='flex flex-wrap gap-3 p-4 h-full'>
        {printUserData}
      </div>

      <div className='flex justify-center item-center text-white p-5 gap-4 font-semibold text-lg'>

        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={function () {
            if (idx > 0) {
              setIndex(index - 1);
              setUser([]);
            }
          }}
          className=' w-20 h-10  bg-amber-500  active:scale-95   rounded cursor-pointer' > Prev </button >
        <h2> Page no-{index}</h2>

        <button onClick={function () {
          setUser([]);
          setIndex(index + 1);
        }}
          className=' w-20 h-10  bg-amber-500  active:scale-95 rounded cursor-pointer' > Next </button ></div>
    </div >
  )
}

export default App
