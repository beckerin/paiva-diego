import React, { useState } from "react";
import Container from "./components/general/Container";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import ProjectList from "./components/projects/ProjectList";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Link from "./components/general/Link";
import { useTranslation } from "react-i18next";
import MobileMenu from "./components/general/MobileMenu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("common");
  const menus = [
    {
      id: "item1",
      title: "navbar.home",
      route: "home",
    },
    {
      id: "item2",
      title: "navbar.projects",
      route: "projects",
    },
    {
      id: "item3",
      title: "navbar.about",
      route: "about",
    },
    {
      id: "item4",
      title: "navbar.contact",
      route: "contact",
    },
  ];

  return (
    <div className="App">
      <MobileMenu
        menu={menus}
        showMenu={isMenuOpen}
        setIsMenuLink={setIsMenuOpen}
      />
      <div className={isMenuOpen ? "blur" : ""}>
        <NavBar
          menu={menus}
          showMenu={isMenuOpen}
          setShowMenu={setIsMenuOpen}
        />
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
              {t("footer.description")}
              <Link href="https://github.com/beckerin" target="_blank">
                @DiegoPaiva
              </Link>
            </div>
            <div className="font-xl mb-8">
              {t("footer.designer")}
              <Link href="https://williammelodesign.com.br/" target="_blank">
                @WilliamMelo
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
