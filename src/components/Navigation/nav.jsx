import React from "react";

export default function Nav() {

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
                <ul id="navList">
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