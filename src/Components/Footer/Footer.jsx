import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Footer.css"
import { img } from "../../imports";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"


const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ymwp9tx', 'template_35swpfp', form.current, 'YwjTTHUdurBHRDbrZ')
            .then((result) => {
                console.log(result.text);
                e.target.reset()    // this will reset once it submits
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="footer" id="contact">
            <div className="footer-Heading">
                <h3 className="footer-H3tag">Join our email list and get access to specials deals exclusive to our subscribers.</h3>
            </div>

            {/* <div className="footer-Email">
                <input type="email" name="" id="" placeholder='Enter Your Email' />
                <button type='button'> Let's Get Started</button>
            </div> */}

            <form ref={form} onSubmit={sendEmail} className="form">

                <label>Name</label>
                <input type="text" name="user_name" autoComplete="off" required style={{marginBottom: "1rem"}} placeholder="Enter Your Name" />

                <label>Email</label>
                <input type="email" name="user_email" autoComplete="off" required style={{marginBottom: "1rem"}} placeholder="Enter Your Email"  />

                <label>Message</label>
                <textarea name="message" cols="30" rows="6" autoComplete="off" required style={{marginBottom: "1rem"}} placeholder="Enter Your Text" />

                {/* <button type='submit' value="Send" > Let's Get Started</button> */}
                <button type='submit' value="Send" > Submit </button>

            </form>

            <div className="footer-Content">

                <div className="footer-logo-div">
                    <img src={img.logo} alt="logo" />
                    <p>Project By Arif Shaikh, All Right Reserved</p>
                </div>

                <div className="footer-links-div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="footer-links-div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="footer-links-div">
                    <h4>Get in touch</h4>
                    <p>Earthly Sustainable LTD</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>

            </div>

            <div className="footer-copyright">
                <p>@2023 Earthly. All rights reserved.</p>
            </div>

            <div className="footer-links-icons">
                <FiFacebook />
                <FiInstagram />
                <FiTwitter />
            </div>

        </div>
    )
}
export default Footer


