import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import "../Hero.css";

async function setUserWalletAddress(provider,setWalletAdress) {
  if(provider!=null)
    setWalletAdress(await provider.getSigner().getAddress());
}
export default function Navbar({ provider,setProvider }) {
  const [walletAddress, setWalletAdress] = useState(null);
  useEffect(() => {
    setUserWalletAddress(provider,setWalletAdress);
  }, [provider]);
  return (
    <nav>
      <div className="absolute top-2 right-2 flex flex-row items-center gap-2 flex-wrap-reverse">
        <div className="p-1 border-2 border-[#afafaf] bg-[#afafaf] text-[#4c4a4a] text-xs rounded-full">
          Rinkeby Testnet Only
        </div>
        <button
          onClick={async () => {
            if(window.ethereum === undefined){
              alert("Please install MetaMask extension and then connect it to the DApp");
              return;
            }
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
            await provider.send("eth_requestAccounts", []);
           setUserWalletAddress(provider,setWalletAdress);
          }}
          className="w-32 p-1 text-white rounded-full border-4 border-indigo bg-indigo text-ellipsis overflow-hidden shadow-lg hover:shadow-indigo"
        >
          {walletAddress ? walletAddress : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}
