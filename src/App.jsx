import React from "react"
import Nav from "./components/Navigation/nav.jsx"
import Hero from "./components/hero.jsx"
import Contact from "./components/contact.jsx"
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"
import Footer from "./components/Navigation/footer.jsx"
import './css/global.css'
import './css/Navigation/nav.css'
import './css/hero.css'
import './css/contact.css'
import './css/about.css'
import './css/Navigation/footer.css'
import './css/projects.css'
import { useEffect } from "react"



export default function App() {
    useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    }) 

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el)=> observer.observe(el));




    const imgobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showimg')
            } else {
                entry.target.classList.remove('showimg')
            }
        })
    }) 

    const hiddenimgs = document.querySelectorAll(".imghidden");
    hiddenimgs.forEach((el)=> observer.observe(el));






    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showtech')
            } else {
                entry.target.classList.remove('showtech')
            }
        })
    }) 
    const hiddentech = document.querySelectorAll(".hidetech");
    hiddentech.forEach((el)=> observer.observe(el));
}, []); 
    return (
        <div>
            <Nav />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
