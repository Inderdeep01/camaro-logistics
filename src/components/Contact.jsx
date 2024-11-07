import './Contact.css'
import TextField from '@mui/material/TextField'
function Contact(){
    return(
        <div id='contact_container'>
            <div id='contact_us'>Contact Us</div>
            <div id='contact_info'>
                <div>Email: <b>accounts@camarologistics.com</b></div>
                <div>Location: 177 Martinvalley Crescent NE, Calgary,<br/> AB <i>T3J 4L6</i>, Canada</div>
            </div>
            <div id='request_callback'>
                <TextField id="outlined-basic" label="Phone/Email" variant="outlined" /><br/>
                <div id='callback_btn' className='btn btn-outline-secondary'>Request Callback</div>
            </div>
        </div>
    )
}

export default Contact