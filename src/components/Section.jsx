import globe from "../../assets/globe.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";

const Section = () => {
  return (
    <div className="section">
      <div className="inner-section">
        <div className="section-text py-16">
          <h5>For traders</h5>
          <h1>Prefered by traders with fully customisable API</h1>
          <p>
            Experience the next evolution in entertainment! ReelChain combines blockchain technology with seamless streaming, allowing
            you to watch and earn $REEL tokens. Enjoy exclusive contents, secure your data, and participate in community governance.
          </p>
          <div className="button">
            <a href="/">Explore Now</a>
          </div>
        </div>
      </div>

      <div className="card-section">
        <div className="cards">
          <div className="card">
            <img src={globe} alt="" />
            <h1>Stream-to-Earn</h1>
            <p>
              Earn REEL tokens simply by watching your favorite movies, series, and documentaries. Your time and engagement are valuable,
              and we reward you for it!
            </p>
          </div>
          <div className="card">
            <img src={two} alt="" />
            <h1>Secure & Private</h1>
            <p>
              Your data is protected with advanced blockchain technology. Enjoy peace of mind knowing your information is safe and
              secure.
            </p>
          </div>
          <div className="card">
            <img src={three} alt="" />
            <h1>Community-Driven</h1>
            <p>
              Join a vibrant community of viewers who have a say in the platform&#39;s development and governance. Your voice matters
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
