import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-5 px-5 md:px-10">
        <Home />
      </div>
    </div>
  );
}

export default App;
