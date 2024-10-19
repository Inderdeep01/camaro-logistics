import React from 'react';
import './Home.css'
import truck from '../assets/truck.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import {Button } from '@mui/material';

function Home(){

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const [formData, setFormData] = React.useState({
        email: '',
        subject: '',
        message: '',
    });
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
    
    };

    return(
    <div id='home'>
        <div id='heading_container'>
            <div id='heading_1' className='heading'>Driven to be your <br/>"<span id='heading_2'>First Choice</span>"</div>
            <div id='btn-container-home'>
                <div id='contact-btn-1' className='btn btn-primary home_btns' onClick={toggleDrawer(true)}>Get&nbsp;Quote</div>
                <div id='gallery-btn-1' className='btn btn-outline-secondary home_btns' onClick={() => {
                        window.scroll({
                            top: document.body.scrollHeight *0.6,
                            behavior: 'smooth'
                        });
                    }}>Gallery</div>
            </div>
        </div>
        <div id='truck_img_container'><img id='truck_img' src={truck}></img></div>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
            <Box sx={{ width: 350, p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={6}
            fullWidth
            required
          />
          <Button variant="contained" onClick={handleSubmit} fullWidth>
            Submit
          </Button>
            </Box>
            
        </Drawer>
    </div>
    )
}

export default Home