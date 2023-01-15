import { useState } from "react";
import "./App.css";
import { UserForm } from "./Component/UserForm/UserForm";
import { Users } from "./Component/Users/Users";
function App() {
  const [users, setUsers] = useState([
    {
      name: "Nurkyz",
      age: 22,
    },
  ]);

  users.sort((a,b) =>{
    return b.age-a.age
  })
 
  const addUsers = (data) =>{
  const addedUser = [...users]
  addedUser.push(data) 
  
  setUsers(addedUser)
  }
 
  // const changeName = (event) =>{
  // setName(event.target.value)
  // }
  return (
    <div className="App">
      <UserForm onNewaddUsers={addUsers}/>
      <Users users={users} />
    </div>
  );
}

export default App;
