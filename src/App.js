import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/photography-website" element={<Home />} />
        <Route path="/photography-website/services" element={<Services />} />
        <Route path="photography-website/portfolio" element={<Portfolio/>} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
