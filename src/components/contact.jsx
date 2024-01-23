import React from "react";
import { Tooltip } from '@chakra-ui/react'


export default function Contact() {
    return (
        <div className="background-color " id="contact-section">
            <div className="container contact">
                <h1 className="contact-header imghidden">
                    Get In Contact
                </h1>
                <div className="header-box-contact imghidden"></div>

                <p className="contact-message">
                    Whether you are starting a project, have business inquiries or questions, or just want to say hi,
                    my inbox is always open so feel free to reach out and I will get back to you as soon as possible.
                    Alternatively connect with me elsewhere on the web.
                </p>
                <Tooltip label="You can reach me at one of my social media links, or email my at Rouyce23@gmail.com" aria-label='A tooltip'>
                <button className="contact-btn">Reach Out</button>
                </Tooltip>
            </div>
        </div>
    )
}