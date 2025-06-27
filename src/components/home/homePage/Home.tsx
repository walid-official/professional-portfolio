import { About } from "../about"
import { Contact } from "../contact"
import { Experience } from "../experience"
import { Hero } from "../hero"
import { Projects } from "../projects"
// import { Navbar } from "../navbar"

export const  Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}