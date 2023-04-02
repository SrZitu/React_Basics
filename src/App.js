import "./App.css";
import AboutPage from "./pages/AboutPage";
// import Home from "./Components/home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import HomePage from "./pages/homePage";
function App() {
  return (
    <div className="App">
      {/* <Home test="Bd" test2="shylhet"></Home>
      <Home test="Canada" test2="Montril"></Home>
      <About></About>
      <Contact></Contact> */}

      <HomePage></HomePage>
      <hr />
      <AboutPage></AboutPage>
    </div>
  );
}

export default App;
