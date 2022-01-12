import { ethers } from 'ethers'
import { useState } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Bottom from "./sections/Bottom";

function App() {
  const [message,setMessage] = useState(null);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return (
    <>
      <Navbar provider={provider}></Navbar>
    <div className="App container min-w-full grid grid-rows-2 auto-rows-auto min-h-screen">
      <Hero provider={provider} setMessage={setMessage}></Hero>
      <Bottom message={message}></Bottom>
    </div>
    </>
  );
}

export default App;
