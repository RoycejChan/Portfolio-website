import React from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Nav() {
    AOS.init();
    const scrollToSection = (sectionID) => {

        const section = document.getElementById(sectionID);

        if (sectionID) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {

            alert("NO");
        };

    };

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