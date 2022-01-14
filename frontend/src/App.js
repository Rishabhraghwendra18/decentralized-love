import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Bottom from "./sections/Bottom";
// import Footer from './components/Footer';

function App() {
  const [message,setMessage] = useState(null);
  const [provider,setProvider] = useState(null);
  return (
    <>
      <Navbar setProvider={setProvider} provider={provider}></Navbar>
    <div className="App container min-w-full grid grid-rows-2 auto-rows-auto min-h-screen">
      <Hero provider={provider} setMessage={setMessage}></Hero>
      <Bottom message={message}></Bottom>
    </div>
    {/* <Footer></Footer> */}
    </>
  );
}

export default App;
