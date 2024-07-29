import wavy from "../../assets/wavy.mp4";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="lg:container md:container md:mx-auto">
      <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
        <source src={wavy} type="video/mp4" />
      </video>
      <div className="doc_bg text-center -mt-44 mb-44">
        <h1 className="text-4xl font-bold md:text-6xl text-white sm:text-5xl">Legal And Compliance</h1>
      </div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
        <div className="get_in_touch">
          <h2 className="text-white mt-4 text-5xl font-bold">Legal and Compliance</h2>
          <h2 className="text-white mt-4 text-xl font-bold"> Regulatory Considerations</h2>

          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-lg">Compliance with international and local regulations.</li>
            <li className="text-white text-lg">Intellectual property rights management to protect creators.</li>
          </ul>

          <h2 className="text-white mt-4 text-xl font-bold">Risk Factors</h2>

          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-lg">Regulatory Risks: Adapting to changing regulations.</li>
            <li className="text-white text-lg"> Technical Risks: Ensuring platform security and scalability.</li>
            <li className="text-white text-lg"> Market Risks: Competing with established centralized platforms.</li>
          </ul>
        </div>

        <div className="flex justify-between mb-16  gap-3">
          <Link
            to="/technical-architecture"
            className="mt-16 mb-16 flex grow items-center justify-between px-2 border border-white-200"
          >
            <FaAngleLeft style={{ fontSize: "3rem", fontWeight: "bolder" }} />
            <div>
              <p className="text-xs lg:text-lg md:text-lg text-xm sm:text-sm xs:text-sm font-bold text-white ">Technical Architecture</p>
            </div>
          </Link>
          <Link to="/conclusion" className="mt-16 mb-16 flex grow items-center justify-between  px-2 border border-white-200">
            <div>
              <p className=" text-xs xl: md:text-lg sm:text-lg text-white font-bold ">Conclusion</p>
            </div>
            <FaAngleRight style={{ fontSize: "3rem", fontWeight: "bolder" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Legal;
