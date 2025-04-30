import React from "react"
import { Footer, NavBar, Carrusel, Profile, Skills, Contact } from "../../components/export"

export const HomePage = () => {
    return (
        <section>
            <NavBar />
            <Profile />
            <Skills />
            <Carrusel />
            <Contact />
            <Footer />
        </section>
    )
}