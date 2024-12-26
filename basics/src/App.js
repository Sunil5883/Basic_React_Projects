import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Greeting from "./Greetings";
function App() {
  return (
    <div>
  <h1>Hello Guys</h1>
  <Greeting name = {'Akash'} />
  <Greeting name = {'Ayush'} />
  <Home name = {'Sunil'} />
  <Contact />
  <About />
  </div>
);
}

export default App;
