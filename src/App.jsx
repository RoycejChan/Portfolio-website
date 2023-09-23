import React from "react"
import Nav from "./components/Navigation/nav.jsx"
import Hero from "./components/hero.jsx"
import Contact from "./components/contact.jsx"
import About from "./components/about.jsx"
import Footer from "./components/Navigation/footer.jsx"
import './css/global.css'
import './css/Navigation/nav.css'
import './css/hero.css'
import './css/contact.css'
import './css/about.css'
import './css/Navigation/footer.css'



export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
