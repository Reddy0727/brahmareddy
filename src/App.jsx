import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Services from "./components/Services"


function App() {

  return (
  <div className="overflow-hidden">
     <main className="container1  header relative overflow-hidden">
        <Header />
        <Hero />
     </main>
     <Services />
     <Projects />
     <Contact />
     <Footer />
  </div>
  )
}

export default App
