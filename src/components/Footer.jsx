const Footer = () => {
 return (
  <div className="footer">
   <div className="bulb mb-8">
    <div className="pic">
     <h1 className="text-white">Knowledge Grow Your Influence</h1>
    </div>
    <div className="footer-text">
     <p className="text-white">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quaerat in error, pariatur optio dolorum corporis
      dolore maiores suscipit. Quam.
     </p>
     <a href="/">Get Started</a>
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
