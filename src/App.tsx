import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Locations from "./components/Locations"
import Services from "./components/Services"
import "./styles/_global.scss"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Services /> */}
      {/* <Locations /> */}
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
