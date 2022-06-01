import React from "react"
import Container from "./components/general/Container"
import Home from "./components/home/Home"
import NavBar from "./components/navbar/Navbar"
import ProjectList from "./components/projects/ProjectList"
import About from "./components/home/About"
import Contact from "./components/home/Contact"
import Link from "./components/general/Link"

export default function App() {
  


  return (
    <div className="App">
      <NavBar />
      <Container id="home" className="mb-16">
        <Home />
      </Container>
      <Container id="projects" className="mb-16">
        <ProjectList />
      </Container>
      <Container id="about" className="mb-16">
        <About />
      </Container>
      <Container id="contact" className="mb-16">
        <Contact />
      </Container>
      <Container>
        <div className="flex-row justify-center text-center">
          <div className="font-2xl mb-8">
            Criado com muito carinho <Link href="https://github.com/beckerin" target="_blank">@DiegoPaiva</Link>
          </div>
          <div className="font-xl mb-8">
            Layout desenvolvido por <Link href="https://williammelodesign.com.br/" target="_blank">@WilliamMelo</Link>
          </div>
        </div>
      </Container>
      
    </div>
  )
}