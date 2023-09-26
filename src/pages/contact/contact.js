// re_a1S6byip_PLM67tD5nYSjkxsKdkhyV24e 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Sidebar } from "../../component/Sidebar/Sidebar";
import './contact.css'

const Contact = () => {
    const emailAddress = 'siddhimahadik257@gmail.com';
    const phoneNumber = '8956681803'
    const form = useRef();

    const [userName, setuserName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userMessage, setuserMessage] = useState('')
    const[loading,setLoading]=useState(false)

    const sendMail = (e) => {
        
        e.preventDefault(); 
       
        if (userName?.length > 3 && userEmail?.includes("@" && ".") && userMessage?.length > 10) {
         
            setLoading(true)
            emailjs.sendForm('service_fi2dg0n', 'template_g5xgsg4', form.current, '-OxMyr1ZAExzMSxx6')
            
                .then((result) => {
                    console.log(result.text);
                    setuserEmail('')
                    setuserMessage('')
                    setuserName('')
                   setLoading(false)
                   
                }, (error) => {
                    console.log(error.text);
                });
            console.log(userName, userEmail, userMessage)
        }
       
        else {
            alert("Error")
        }
       
    }
    return (
        <div className="main">
            <Sidebar />

            <div className="main_contact scrollableDiv">
                <div className="upper_contact">
                    <div className="leftcontact">
                        <div className="head_contact">
                            <p>- LET'S CONNECT!</p>
                            <h3>Get in touch</h3>
                            <p className="desc">I'm currently avaliable to take on new projects and open for software engineer roles,
                                so feel free to send me a message about anything
                                that you want to run past me. You can contact anytime at 24/7</p>
                        </div>
                        <div className="my_contact">
                            <a href={`tel:${phoneNumber}`}>8956681803</a>
                            <a href={`mailto:${emailAddress}`}>siddhimahadik257@gmail.com</a>
                            <a href="">Chiplun, Maharashtra, India</a>
                        </div>
                    </div>
                    <div className="rightcontact">
                        <form className="inputcontact" ref={form} onSubmit={sendMail}>
                            <input type="text"   value={userName} placeholder="Enter your name" name="from_name" onChange={(e) => { setuserName(e.target.value) }} />
                            <input type="text" value={userEmail} placeholder="Your email" name="email" onChange={(e) => { setuserEmail(e.target.value) }} />
                            <textarea placeholder="Write Something..." value={userMessage} name="message" onChange={(e) => { setuserMessage(e.target.value) }}></textarea>
                            <button type='submit' disabled={loading}> {loading ? 'Sending...' : 'Submit Now'}</button>
                        </form>
                    </div>
                </div>
                <div className="lower_contact">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60870.374757706304!2d73.48182279765471!3d17.536207644193425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2062c95f6f0ff%3A0x55c667ba59237eed!2sChiplun%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695107952481!5m2!1sen!2sin" width="1000" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;