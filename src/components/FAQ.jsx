const FAQ = () => {
  return (
    <div className="faq">
      <h1 className="text-white">Frequently Asked Questions</h1>
      <p className="text-white">Have question? We are here to help</p>
      <section className="services">
        <div className="service-right">
          <div className="qa">
            <input type="checkbox" id="collapsible-head-1" />
            <label htmlFor="collapsible-head-1">What is ReelChain?</label>
            <div className="collapsible-text-1">
              <p>
                ReelChain is a decentralized streaming platform that leverages blockchain technology to offer a secure, transparent, and
                rewarding streaming experience. Viewers earn tokens for their engagement, making streaming both enjoyable and profitable.
              </p>
            </div>
          </div>
          <div className="qa">
            <input type="checkbox" id="collapsible-head-2" />
            <label htmlFor="collapsible-head-2">How does ReelChain’s “Stream-to-Earn” model work?</label>
            <div className="collapsible-text-2">
              <p>
                With ReelChain’s “Stream-to-Earn” model, viewers earn REEL tokens for watching and interacting with content. The more you
                engage with the platform, the more rewards you accumulate, creating a mutually beneficial ecosystem for both viewers and
                the platform.
              </p>
            </div>
          </div>
          <div className="qa">
            <input type="checkbox" id="collapsible-head-3" />
            <label htmlFor="collapsible-head-3">What are $REEL tokens, and how can I use them?</label>
            <div className="collapsible-text-3">
              <p>
                REEL tokens are the native cryptocurrency of the ReelChain platform. They can be earned through viewing content,
                participating in community activities, and more. REEL tokens can be used for staking, purchasing exclusive content, or
                trading on supported exchanges
              </p>
            </div>
          </div>
          <div className="qa">
            <input type="checkbox" id="collapsible-head-4" />
            <label htmlFor="collapsible-head-4">How does ReelChain ensure the security and privacy of its users?</label>
            <div className="collapsible-text-4">
              <p>
                ReelChain uses blockchain technology to decentralize data storage, ensuring that user data is distributed across a secure
                network. This reduces the risk of data breaches and unauthorized access, providing a safer and more private streaming
                experience.
              </p>
            </div>
          </div>
          <div className="qa">
            <input type="checkbox" id="collapsible-head-5" />
            <label htmlFor="collapsible-head-5">What is the ReelChain Passport NFT, and how do I mint it?</label>
            <div className="collapsible-text-5">
              <p>
                The ReelChain Passport NFT is a digital token that grants you access to exclusive features and rewards within the
                platform. To mint it, simply visit the ReelChain platform, complete the necessary steps, and follow the prompts to mint
                your Passport NFT. This NFT is also required to participate in various platform activities and earn rewards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
