import Card from "./UI/Card"
import'./allusers.css'
const allUsers =(props)=>{
    return(
        <Card cssClass="users">
        <ul>
            {props.users.map((user) => {
                return <li key={user.id}>{user.name} ({user.age}) years old</li>
            })}
        </ul>
        </Card>
    )
}

export default allUsers