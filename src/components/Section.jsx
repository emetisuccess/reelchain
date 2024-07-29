const Section = () => {
  return (
    <div className="section">
      <div className="inner-section">
        <div className="section-text py-16">
          <h5 className="font-bold text-3xl mb-4">For Viewers....</h5>
          <p className="">
            Experience the next evolution in entertainment! ReelChain combines blockchain technology with seamless streaming, allowing you to watch and earn $REEL tokens. Enjoy exclusive contents, secure your data, and participate in community governance.
          </p>
          <div className="button">
            <a href="/">Explore Now</a>
          </div>
        </div>
      </div>

      <div className="card-section">
        <div className="cards">
          <div className="card">
            <span className="text-3xl">&#x1F3A5;</span>
            <h1 className="font-bold">Stream-to-Earn</h1>
            <p>
              Earn $REEL tokens simply by watching your favorite movies, series, and documentaries. Your time and engagement are valuable,
              and we reward you for it!
            </p>
          </div>
          <div className="card">
            <span className="text-3xl" >&#x1F512;</span>

            <h1 className="font-bold">Secure & Private</h1>
            <p>
              Your data is protected with advanced blockchain technology. Enjoy peace of mind knowing your information is safe and
              secure.
            </p>
          </div>
          <div className="card">
            <span className="text-3xl">&#x1F91D;</span>
            <h1 className="font-bold">Community-Driven</h1>
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
