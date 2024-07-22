import wavy from "../../assets/wavy.mp4";
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Doc = () => {
  return (
    <div className="lg:container md:container md:mx-auto">
      <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8 rounded-xl">
        <source src={wavy} type="video/mp4" />
      </video>
      <div className="doc_bg text-center -mt-44 mb-44">
        <h1 className="text-3xl md:text-6xl text-white sm:text-5xl">Welcome to Our Documentation</h1>
      </div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12 ">
        <div className="home-header">
          <h2 className="text-white mt-8 mb-5 font-bold text-5xl">Introduction</h2>
          <p className="text-white text-lg my-2">
            ReelChain is a decentralized movie streaming platform designed to revolutionize the film industry by leveraging blockchain
            technology.
          </p>
          <p className="text-white text-lg my-2">
            ReelChain offers viewers unrestricted access to diverse films and ensures transparent and fair revenue
            distribution.
          </p>
          <p className="text-white text-lg my-2">
            ReelChain combines decentralized content hosting, blockchain-based payments, NFTs, and community governance to
            create a transparent, secure, and community-driven movie streaming experience.
          </p>
          <p className="text-white text-lg my-2">
            The movie streaming industry has experienced rapid growth, yet it remains dominated by a few centralized platforms.
          </p>
          <p className="text-white text-lg my-2">
            These platforms often impose high fees, restrict content availability due to regional licensing, and compromise user data privacy.
          </p>
          <p className="text-white text-lg my-2">
            Our decentralized `Stream-to-Earn` platform leverages the power of blockchain to offer a transparent, fair, and rewarding
            environment consumers, utilizing $REEL as the native token.
          </p>
          <p className="text-white text-lg my-2">
            Reelchain combines decentralised content hosting , blockchain
            based payments, NFTs and community governance to create a transparent,secure and community driven movie streaming experience.
          </p>
        </div>
        <Link to="/problem-statement" className="my-16  flex items-center justify-between py-1 px-8 border border-white-200">
          <div>
            <p className="text-xl text-white">Next</p>
            <p className="text-lg text-white ">Problem Statement</p>
          </div>
          <FaAngleRight className="text-white" style={{ color: 'white' }} />
        </Link>
      </div>
    </div>
  );
};

export default Doc;
