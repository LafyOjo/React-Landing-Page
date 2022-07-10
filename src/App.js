import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Team from "./Team";
import Service from "./Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Team />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
