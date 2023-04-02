import "./App.css";
import AboutPage from "./pages/AboutPage";
// import Home from "./Components/home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import HomePage from "./pages/homePage";
import Counter from "./Components/Counter";
import List from "./Components/List";
import User from "./Components/User";
function App() {
  const items = ["Apple", "Banana", "Orange"];
  const user = { name: "John", email: "john@example.com" };
  return (
    <div className="App">
      {/* <Home test="Bd" test2="shylhet"></Home>
      <Home test="Canada" test2="Montril"></Home>
      <About></About>
      <Contact></Contact> */}
      <div>
        {/* functional component list and passing props */}
        <List items={items} />
        <User user={user}></User>
      </div>

      <HomePage>
        
      </HomePage>
      <Counter></Counter>
      <hr />
      <AboutPage></AboutPage>
    </div>
  );
}

export default App;
