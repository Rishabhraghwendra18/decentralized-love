import { useState, useEffect } from "react";
import "../Hero.css";

export default function Navbar({ provider }) {
  const [walletAddress, setWalletAdress] = useState(null);
  useEffect(async () => {
    setUserWalletAddress();
  }, []);
  async function setUserWalletAddress() {
    setWalletAdress(await provider.getSigner().getAddress());
  }
  return (
    <nav>
      <div className="absolute top-2 right-2 flex flex-row items-center gap-2 flex-wrap-reverse">
        <div className="p-1 border-2 border-[#afafaf] bg-[#afafaf] text-[#4c4a4a] text-xs rounded-full">
          Rinkeby Testnet Only
        </div>
        <button
          onClick={async () => {
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            setUserWalletAddress();
          }}
          className="w-32 p-1 text-white rounded-full border-4 border-indigo bg-indigo text-ellipsis overflow-hidden shadow-lg hover:shadow-indigo"
        >
          {walletAddress ? walletAddress : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}
