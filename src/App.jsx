import axios from 'axios'
import { useState } from 'react';

const App = () => {
  // const user = {
  //   user: "Ashi",
  //   age: 18,
  //   city: "siwan",
  // }
  //  localStorage.setItem("info",JSON.stringify(user));
  //  const l=JSON.parse(localStorage.getItem("info"));

  //  console.log(l.user)
  // const getData = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  //   // const l = await response.json();
  //   console.log(response.data);
  // }

  const [user, setUser] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response.user);
    setUser(response.user);
  }

  const response = "Loading...";
  
  return (
    <div>
      <button
        onClick={getData}
        className='bg-red-950 rounded p-4 m-4 text-xl text-white active:scale-95 cursor-pointer'> Click me !</button>
      <div>
        {user.map(function (elem, idx) {
          return <div>
            <h3>hello {idx}</h3>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
