import wavy from "../../assets/wavy.mp4";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const UseCase = () => {
 return (
  <div className="lg:container md:container md:mx-auto">
   <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
    <source src={wavy} type="video/mp4" />
   </video>
   <div className="doc_bg text-center -mt-44 mb-44">
    <h1 className="text-3xl md:text-6xl text-white sm:text-5xl">Use Cases</h1>
   </div>
   <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
    <div className="mission">
     <h2 className="text-white mt-4 text-5xl font-bold">Use Cases</h2>

     <ul className="list-inside list-desc hover:list-circle">
      <li className="text-white text-base">Unrestricted Access: Enjoy diverse content without regional restrictions.</li>
      <li className="text-white text-base">Rewards: Earn tokens for engagement and participation.</li>
     </ul>
    </div>
    <div className="flex justify-between mb-16  gap-3">
     <Link to="/tokenomics" className="mt-16 flex grow items-center justify-between px-2 border border-white-200">
      <FaAngleLeft style={{ fontSize: "3rem", fontWeight: "bolder" }} />

      <div>
       <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Tokenomics</p>
      </div>
     </Link>

     <Link to="/road-map" className="mt-16 flex grow  items-center justify-between px-2 border border-white-200">
      <div>
       <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Road Map</p>
      </div>
      <FaAngleRight style={{ fontSize: "3rem", fontWeight: "bolder" }} />
     </Link>
    </div>
   </div>
  </div>
 );
};

export default UseCase;
