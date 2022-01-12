import { useState } from "react";

export default function Navbar({provider}) {
      const [walletAddress,setWalletAdress] = useState(null);
      return (
            <div className="z-10">
                  <button onClick={async ()=>{
                        await provider.send("eth_requestAccounts", []);
                        const signer= await provider.getSigner();
                        setWalletAdress(signer.getAddress());
                  }}>{walletAddress ? walletAddress:'Click here to connect to your wallet'}</button>
            </div>
      );
}