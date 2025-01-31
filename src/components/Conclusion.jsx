import wavy from "../../assets/wavy.mp4";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Conclusion = () => {
  return (
    <div className="lg:container md:container md:mx-auto">
      <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
        <source src={wavy} type="video/mp4" />
      </video>
      <div className="doc_bg text-center -mt-44 mb-44">
        <h1 className="text-4xl font-bold md:text-6xl text-white sm:text-5xl">Conclusion</h1>
      </div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
        <div className="get_in_touch">
          <h2 className="text-white mt-4 text-3xl font-bold">Conclusion</h2>
          <p className="text-white text-lg">
            ReelChain aims to revolutionize the movie streaming industry by providing a decentralized, transparent, and fair platform
            for creators and viewers. By leveraging blockchain technology, ReelChain ensures that viewers enjoy unrestricted access to
            diverse films, and every transaction is transparent and fair.
          </p>
        </div>
        <Link to="/legal" className="mt-16 mb-16 flex items-center justify-between px-2 border border-white-200">
          <FaAngleLeft style={{ fontSize: "3rem", fontWeight: "bolder" }} />
          <div>
            <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold ">Legal and Compliance</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Conclusion;
