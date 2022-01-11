import etherumLogo from "../ethereum.svg";

export default function HeroSection() {
  return (
    <div className="bg-pink flex flex-row items-center p-2">
      <div className="basis-full">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="grid gap-4">
            <div className="text-xl font-medium text-black">
              Love Wallet Address
            </div>
            <input
              placeholder="0x43a90..."
              className="border-solid border-4 border-[#ededed] rounded-lg"
            />
            <div className="text-xl font-medium text-black">Message</div>
            <textarea
              className="border-solid border-4 border-[#ededed] rounded-lg"
              placeholder="Hello, How are you..."
            ></textarea>
            <div>
              <button
                type="button"
                class="py-2 px-3 bg-indigo text-white text-sm font-semibold rounded-md shadow focus:outline-none"
              >
                Check Message
              </button>
              <button
                type="button"
                class="py-2 px-3 bg-[#DCB5A6] mx-1.5 text-black text-sm font-semibold rounded-md shadow focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-full">
        <div className="bg-pink grid gap-3 items-center justify-items-center">
          <h1 className="text-3xl font-medium text-black">
            Send Love to your Love!!
          </h1>
          <p className="text-xl font-medium text-black">
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