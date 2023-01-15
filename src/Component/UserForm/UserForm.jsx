import { useState } from "react";
import { Input } from "../Input/Input";
import "./userForm.css"

export const UserForm = (props) => {
  
console.log(props.onNewaddUsers);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeAge=(event)=>{
    setAge(event.target.value)
  }
 
  const changeButton=(event)=>{
    event.preventDefault()

    const usersData={
      name,
      age
    };
   props.onNewaddUsers(usersData);
   setName("")
   setAge("")
  }

 
  return (
    <div className="div">
        <div className="User-form-container">
      <Input id="name" labelName="UserName" inputType="text" value={name} onChange={changeName}/>
      <Input id="number" labelName="Age(Years)" inputType="number" value={age} onChange={changeAge}/>
      <button onClick={changeButton}>Add User</button>
    </div>
    </div>
   
  );
};

