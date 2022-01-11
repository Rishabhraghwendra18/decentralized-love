import "./App.css";
import Hero from './sections/Hero';
import Bottom from "./sections/Bottom";

function App() {
  return (
    <div className="App container min-w-full grid grid-rows-2 auto-rows-auto min-h-screen">
      <Hero></Hero>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
