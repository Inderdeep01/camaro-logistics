import './Home.css'
import truck from '../assets/truck.png'

function Home(){
    return(
    <div id='home'>
        <div id='heading_container'>
            <div id='heading_1' className='heading'>Driven to be your <br/>"<span id='heading_2'>First Choice</span>"</div>
            <div id='btn-container-home'>
                <div id='contact-btn-1' className='btn btn-primary home_btns'>Get&nbsp;Quote</div>
                <div id='gallery-btn-1' className='btn btn-outline-secondary home_btns'>Gallery</div>
            </div>
        </div>
        <div id='truck_img_container'><img id='truck_img' src={truck}></img></div>
    </div>
    )
}

export default Home