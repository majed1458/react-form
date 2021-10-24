import Card from "./UI/Card";
import"./adduser.css"
import Button from "./UI/Button";
import { useState } from "react";

const Adduser =(props)=>{
    const[Name,setName]=useState('');
    const[age,setAge]=useState('');

    const ageHandler=(event)=>{
        setAge(event.target.value)
    }
    const nameHandler=(event)=>{
        setName(event.target.value)
    }


    const addUserHandler=(event)=>{
        event.preventDefault();
        if(age.trim().length===0 || Name.trim().length ===0){
            return ;
        }
        if(+age<1){
            return ;
        }
        props.onAdduser(Name,age)
        setName('');
        setAge('');
    }
    return(
        <Card cssClass="container">
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">username</label>
            <input type="text" id="username" value={Name} onChange={nameHandler}/>
            <label htmlFor="age">age</label>
            <input type="number" id="age" value={age} onChange={ageHandler}/>
            <Button type="submit">add user</Button>

        </form>
        </Card>

    )
}
export default Adduser;