import React from "react";


export default function Nav() {


    return (
        <section>
                <ul id="navList" data-aos={"slide-right"}>
                    <li>
                        <a href="#" className="nav-link">WORK</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link" onClick={() => scrollToSection('about-section')}>ABOUT ME</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link" onClick={() => scrollToSection('contact-section')}>CONTACT</a>
                    </li>
                </ul>
        </section>
    )
}