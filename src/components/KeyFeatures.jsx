import wavy from "../../assets/wavy.mp4";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const KeyFeatures = () => {
 return (
  <div className="lg:container md:container md:mx-auto">
   <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
    <source src={wavy} type="video/mp4" />
   </video>
   <div className="doc_bg text-center -mt-44 mb-44">
    <h1 className="text-3xl md:text-6xl text-white sm:text-5xl">Key Features</h1>
   </div>
   <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
    <div className="home_description">
     <h3 className="text-white mt-8 text-5xl font-bold">Key Features</h3>
     <ul className="list-inside list-disc hover:list-circle">
      <li className="text-white text-base">
       Decentralized Content Hosting: Using IPFS and Arweave to store and distribute content.
      </li>
      <li className="text-white text-base">
       Blockchain-Based Payments: Smart contracts automate payments and ensure transparent revenue sharing.
      </li>
      <li className="text-white text-base">
       NFTs for Collectibles: NFTs provide access to exclusive content and can serve as digital collectibles.
      </li>
      <li className="text-white text-base">
       Community Governance: A DAO allows users and creators to participate in decision-making processes.
      </li>
     </ul>
    </div>
    <div className="flex justify-between mb-16  gap-3">
     <Link to="/problem-statement" className="mt-16 flex grow items-center justify-between px-2 border border-white-200">
      <FaAngleLeft style={{ fontSize: "3rem", fontWeight: "bolder" }} />
      <div>
       <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Problem Statement</p>
      </div>
     </Link>
     <Link to="/tokenomics" className="mt-16 flex grow  items-center justify-between px-2 border border-white-200">
      <div>
       <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold mr-5">Tokenomics</p>
      </div>
      <FaAngleRight style={{ fontSize: "3rem", fontWeight: "bolder" }} />
     </Link>
    </div>
   </div>
  </div>
 );
};

export default KeyFeatures;
