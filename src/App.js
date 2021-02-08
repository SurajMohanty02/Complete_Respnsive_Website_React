import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Service from "./Components/Service";
import Projects from "./Components/Projects";
import Price from "./Components/Price";
import Feedback from "./Components/Feedback";
import ContactUs from "./Components/ContactUs";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Service />
      <Projects />
      <Price />
      <Feedback />
      <ContactUs />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
