import '../styles/App.css'

function DrawBox(props) {
 
    return(
        <div className="Content-Box" onClick={props.onCli}>
            <h1>{props.value}</h1>
        </div>
    )
}
export default DrawBox