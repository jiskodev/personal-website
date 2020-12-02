import React from 'react'
import './contactForm.css'

function ContactForm() {
    return (
        <>
        <div class="contact_form">
            <div class="sayHello">Say hello</div>
            <div class="blue-line"></div>
                <form class="contactForm" data-netlify="true">
                    <div class="email-form">
                        <input required name="email" id="email" type="email" autocomplete="off"  />
                        <label for="email" class="label-text"><span class="content-email">Your Email</span></label>
                    </div>
                    <div class="email-form">
                        <input required type="text" name="message" id="message" autocomplete="off" />
                        <label for="message" class="label-text"><span class="content-email">Your Message</span></label>
                    </div>
                    <button type="submit"><span class="button-send">Send Message</span></button>
                </form>
            
        </div>
        </>
    )
}

export default ContactForm
