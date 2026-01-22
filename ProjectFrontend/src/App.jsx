import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar title="My React App" />
      <Home />
      <Footer text="© 2026 My React App" />
    </div>
  );
}

export default App;
