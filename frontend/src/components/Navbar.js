import { useState,useEffect } from "react";
import "../Hero.css";

export default function Navbar({provider}) {
      const [walletAddress,setWalletAdress] = useState(null);
      useEffect(async () => {
            setUserWalletAddress();
      }, [])
      async function setUserWalletAddress() {
           setWalletAdress(await provider.getSigner().getAddress());
      }
      return (
            <nav>
                  <button onClick={async ()=>{
                        await provider.send("eth_requestAccounts", []);
                        const signer = await provider.getSigner();
                        setUserWalletAddress();
                  }}
                  className="w-32 absolute top-2 right-2 p-1 text-white rounded-lg border-4 border-indigo bg-indigo text-ellipsis overflow-hidden shadow-lg hover:shadow-indigo"
                  >
                        {walletAddress ? walletAddress:'Connect Wallet'}
                  </button>
            </nav>
      );
}