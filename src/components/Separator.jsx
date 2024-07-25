import './Separator.css'


function Separator(props){
    return(
        <div id='separator' style={{
            transform: `rotate(${props.angle}deg)`
        }}>
            
        </div>
    )
}

export default Separator