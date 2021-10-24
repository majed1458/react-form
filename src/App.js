import { useState } from 'react';
import './App.css';
import Adduser from './components/Adduser';
import AllUsers from'./components/allUsers' ;


function App() {
  const [allusers ,setAllusers]=useState([])

  const addUserHandler=(uName , uAge)=>{
    setAllusers(prevlist =>{
      return [...prevlist , {name:uName,age:uAge, id: Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <Adduser onAdduser={addUserHandler}/>
      <AllUsers users={allusers} />
    </div>
  );
}

export default App;
