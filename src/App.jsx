/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useState } from "react";


/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";


/**
 * Hooks
 */
import { NavBarContextProvider } from "./hooks/use_navbar";


const App = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    return (
        <NavBarContextProvider>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects setShowModal={setShowModal} setModalContent={setModalContent}/>
                {/*<Review />*/}
                <Contact />
            </main>
            <Footer />
            <ProjectModal isVisible={showModal} onClose={() => setShowModal(false)} content={modalContent}/>
        </NavBarContextProvider>
    )
}

export default App;