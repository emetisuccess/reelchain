import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bulb mb-8">
        <div className="pic">
          <h1 className="text-white">Begin your Web3 Entertainment Journey with ReelChain</h1>
        </div>
        <div className="footer-text">
          <p className="text-white">
            Built on Polygon,the ReelChain ecosystem is designed to be sustainable as we scale.
          </p>
          <Link to="/waitlist" className="font-bold text-2xl">Join Waitlist</Link>
        </div>
      </div>
      <hr className="my-16" />
      <div className="mt-8">
        <p className="text-center">&#169; Copyright 2024-{new Date().getFullYear()} | All Right Reserved ReelChain|</p>
      </div>
    </div>
  );
};

export default Footer;
