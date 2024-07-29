const Mint = () => {
  return (
    <div className="lg:container md:container md:mx-auto">
      <div className="mintbg mt-4"></div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 mb-16">
        <div className="home-header">
          <h2 className="text-white mt-8 text-5xl mb-8 font-bold"></h2>

          <p className="text-white text-3xl mt-3 mb-5">
            The ReelChain Passport NFT is your exclusive gateway to the future of decentralized streaming. This unique digital
            collectible not only represents your early support and membership in the ReelChain community but also unlocks a suite of
            unparalleled perks and privileges
          </p>
        </div>

        <div className="get_in_touch ">
          <h2 className="text-white mt-4 mb-3 text-5xl">Rewards</h2>
          <p className="text-white mb-3 text-lg font-bold">Staking Rewards &#x1F525;</p>
          <p className="text-white mb-3 text-lg font-bold">Whitelist Access</p>
          <p className="text-white mb-3 text-lg font-bold">Minting Rebates</p>
          <p className="text-white text-lg bolder font-bold">Discord Role &#x1F525;</p>
        </div>
        <div className="text-center">
          <a href="https://opensea.io/assets/matic/0xea97f003c047cb8370cd1cc5701b7e6e002eec28/1"
            className="align-middle text-lg rounded-lg select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-4 px-9 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none join-waitlist__btn"
            type="submit"
          >
            Mint Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mint;
