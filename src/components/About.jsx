import './About.css'
import truck_2 from '../assets/truck_2.png'

function About (){
    return(
        <div id='about_container'>
            <div id='truck_img_container_2'><img id='truck_img_2' src={truck_2}></img></div>
            <div id='about_sub_container'>
                <div className='heading2'>About Us</div>
                <div id='heading_3' className='heading2'>Your Goods, <br/>"<span className='sub_heading_3'>Our Responsibility</span>"</div>
                <span id='content_1'>Camaro Logistics Ltd . Is a Calgary AB based transportation and logistics company which was started by a group of 4 friends who have spent several years driving trucks and hauling freight throughout north america . We consider Our trucking experience the main key to our success because we are aware of customer expectations as well as the challenges on road . that is why we know the soultions to get the freight delivered on time even in toughest of circumstances. We provide wide variety of services  for transportation such as <b> Flatbed, Stepdeck, Oversize</b> and <b>Cross dock</b> loads .</span>
                
            </div>
            
        </div>
    )
}

export default About