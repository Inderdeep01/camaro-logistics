import './Gallery.css'
import img_1 from "../assets/img_1.JPG"
import img_2 from "../assets/img_2.JPG"
import img_3 from "../assets/img_3.JPG"
import img_4 from "../assets/img_4.JPG"
import img_5 from "../assets/img_5.JPG"
function Gallery(props){
    return(
        <>
        <div id='gallery_heading'>
            Gallery
        </div>
        <div id="gallery_container">
            <div className='gallery_box' id='box_1'><img className='gallery_img' src={img_1}/></div>
            <div className='gallery_box' id='box_2'><img className='gallery_img' src={img_2}/></div>
            <div className='gallery_box' id='box_3'><img className='gallery_img' src={img_3}/></div>
            <div className='gallery_box' id='box_4'><img className='gallery_img' src={img_4}/></div>
            <div className='gallery_box' id='box_5'><img className='gallery_img' src={img_5}/></div>
        </div>
        </>
    )
}

export default Gallery