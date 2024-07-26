import { Link } from "react-router-dom";
import wavy from "../../assets/wavy.mp4";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Technical = () => {
 return (
  <div className="lg:container md:container md:mx-auto">
   <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
    <source src={wavy} type="video/mp4" />
   </video>
   <div className="doc_bg text-center -mt-44 mb-44">
    <h1 className="text-3xl md:text-6xl text-white sm:text-5xl">Technical Architecture</h1>
   </div>
   <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
    <div className="doc_info my-2">
     <h2 className="text-white mt-4 text-5xl font-bold">Technical Architecture</h2>
     <h2 className="text-white mt-4 text-xl font-bold">System Overview</h2>

     <ul className="list-inside list-desc hover:list-circle">
      <li className="text-white text-base">
       ReelChain’s architecture consists of a decentralized storage layer, a blockchain layer, smart contracts, in-app wallet and
       a user-friendly interface.
      </li>
     </ul>

     <h2 className="text-white mt-4 text-xl font-bold">Components</h2>
     <ul className="list-inside list-disc hover:list-circle">
      <li className="text-white text-base">Decentralized Storage:</li>
      <ul className="list-inside list-circle">
       <li className="text-white ml-5">IPFS Ensures content is stored securely and distributed efficiently.</li>
      </ul>
     </ul>

     <h2 className="text-white mt-4 text-xl font-bold">Blockchain Layer:</h2>
     <ul className="list-inside list-disc hover:list-circle">
      <li className="text-white text-base">Polygon: Provides the foundation for smart contracts and transactions.</li>
     </ul>

     <h2 className="text-white mt-4 text-xl font-bold">Smart Contracts:</h2>
     <ul className=" list-inside list-disc hover:list-circle">
      <li className="text-white text-base">Payment Automation: Manages revenue sharing, ticket sales, and royalties.</li>
      <li className="text-white text-base">NFT Management: Handles the creation, sale, and transfer of NFTs.</li>
     </ul>

     <h2 className="text-white mt-4 text-xl font-bold">In-app Wallet</h2>
     <ul className="list-inside list-disc hover:list-circle ">
      <li className="text-white text-base">ReelChain Wallet:</li>
     </ul>

     <h2 className="text-white mt-4 text-xl font-bold">User Interface:</h2>
     <ul className="list-inside list-desc hover:list-circle">
      <li className="text-white text-base">
       Web and Mobile Applications: Provide an intuitive experience for users to stream content and interact with the platform.
      </li>
     </ul>

     <h2 className="text-white mt-4 text-xl font-bold">Security Measures:</h2>
     <ul className="list-inside list-desc hover:list-circle">
      <li className="text-white text-lg">Data Encryption: Protects user data and content.</li>
      <li className="text-white text-lg">User Authentication: Ensures secure access and identity verification.</li>
     </ul>
    </div>
    <div className="flex justify-between mb-16  gap-3">
     <Link to="/road-map" className="mt-16 flex grow items-center justify-between px-2 border border-white-200">
      <FaAngleLeft style={{ fontSize: "3rem", fontWeight: "bolder" }} />
      <div>
       <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Road Map</p>
      </div>
     </Link>

     <Link to="/legal" className="mt-16 flex grow  items-center justify-between px-2 border border-white-200">
      <div>
       <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Legal and Compliance</p>
      </div>
      <FaAngleRight style={{ fontSize: "3rem", fontWeight: "bolder" }} />
     </Link>
    </div>
   </div>
  </div>
 );
};

export default Technical;
