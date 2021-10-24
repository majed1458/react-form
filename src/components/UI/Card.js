import "./Cardstyle.css"
const Card =(props)=>{
    return <div className={`card ${props.cssClass}`}>{props.children}</div>
}
export default Card