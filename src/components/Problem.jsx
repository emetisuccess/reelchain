import wavy from "../../assets/wavy.mp4";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Problem = () => {
  return (
    <div className="lg:container md:container md:mx-auto">
      <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
        <source src={wavy} type="video/mp4" />
      </video>
      <div className="doc_bg text-center -mt-44 mb-44">
        <h1 className="text-4xl font-bold md:text-6xl text-white sm:text-5xl">Problem Statement</h1>
      </div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
        <div className="home_description">
          <h2 className="text-white mt-8 font-bold text-5xl">Problem Statement</h2>
          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-base my-3">Restricted access to content based on geographic location.</li>
            <li className="text-white text-base my-3">Data privacy and security concerns.</li>
            <li className="text-white text-base my-3">Limited engagement and reward opportunities.</li>
          </ul>

          <h3 className="text-white mt-8 text-3xl font-bold">Solution</h3>
          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-base my-2">Decentralized Movie Streaming Platform:</li>
            <ul className="list-inside list-circle">
              <li className="text-white text-base ml-5">
                ReelChain aims to solve these challenges by creating a decentralized movie streaming platform that ensures transparency,
                fairness, and user empowerment.
              </li>
            </ul>
          </ul>
        </div>
        <div className="flex justify-between mb-16  gap-3">
          <Link to="/doc" className="mt-16 flex grow items-center justify-between  px-2 border border-white-200">
            <FaAngleLeft style={{ fontSize: "3rem", fontWeight: "bolder" }} />
            <div>
              <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Introduction</p>
            </div>
          </Link>
          <Link to="/key-features" className="mt-16 flex grow  items-center justify-between  px-2 border border-white-200">
            <div>
              <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Key Features</p>
            </div>
            <FaAngleRight style={{ fontSize: "3rem", fontWeight: "bolder" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Problem;
