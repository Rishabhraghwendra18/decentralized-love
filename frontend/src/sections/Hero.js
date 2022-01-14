import {ethers} from 'ethers';
import messageContractAbi from '../Message.json';
import etherumLogo from "../ethereum.svg";
import { useState } from 'react';

function contractConnectionSetup(provider) {
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  return new ethers.Contract(contractAddress,messageContractAbi.abi,provider);
}
export default function HeroSection({provider,setMessage}) {
  const [receiverAddress,setReceiverAddress] =  useState(null);
  const [senderMessage,setSenderMessage] = useState(null);
  let contract = null;
  if(provider!=null) contract = contractConnectionSetup(provider);
  return (
    <div className="bg-pink flex flex-row items-center p-2 hero_div">
      <div className="basis-full m-1">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="grid gap-4">
            <div className="text-xl font-medium text-black">
              Love Wallet Address
            </div>
            <input
              placeholder="0x43a90..."
              className="border-solid border-4 border-[#ededed] rounded-lg"
              onChange={e=>setReceiverAddress(e.target.value)}
            />
            <div className="text-xl font-medium text-black">Message</div>
            <textarea
              className="border-solid border-4 border-[#ededed] rounded-lg"
              placeholder="Hello, How are you..."
              onChange={e=>setSenderMessage(e.target.value)}
            ></textarea>
            <div>
              <button
                type="button"
                className="py-2 px-3 bg-indigo text-white text-sm font-semibold rounded-md shadow focus:outline-none shadow-lg hover:shadow-indigo"
                onClick={async ()=> {
                  try {
                    setMessage(await contract.retrieve_message(receiverAddress));
                  }
                  catch (_) {
                    alert("Some Error occured. Make sure you have MetaMask extension installed and connected to DApp")
                  }
                }
              }
              >
                Check Message
              </button>
              <button
                type="button"
                className="py-2 px-3 bg-[#DCB5A6] mx-1.5 text-black text-sm font-semibold rounded-md shadow focus:outline-none shadow-lg hover:shadow-[#E89F85]"
                onClick={async ()=>{
                  if(!receiverAddress || !senderMessage) alert("Make sure you have enteried values in both fileds, wallet address and Message box")
                  try {
                    const contractWithSigner = contract.connect(provider.getSigner());
                    await contractWithSigner.send_message(receiverAddress,senderMessage);
                    alert("Your message is successfully send!! Please wait for your transcation to confirm on https://rinkeby.etherscan.io/")
                  } catch (e) {
                    alert("Some Error occured. Make sure you have MetaMask extension installed and connected to DApp");
                    console.log("error while sending message",e);
                  }
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-full m-1 about_div">
        <div className="bg-pink grid gap-3 items-center justify-items-center">
          <h1 className="text-3xl font-medium text-black pl-2">
            Send Love to your Love!!
          </h1>
          <p className="text-xl font-medium text-black pl-2">
            Just paste in your love wallet address , type some message and hit
            send
          </p>
          <img
            src={etherumLogo}
            alt="Ethereum"
            className="w-20 md:w-35 lg:w-48"
          />
        </div>
      </div>
    </div>
  );
}