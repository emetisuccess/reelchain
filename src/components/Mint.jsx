import wavy from "../../assets/wavy.mp4";

const Mint = () => {
  return (
    <div className="lg:container md:container md:mx-auto">
      <video autoPlay muted loop id="myVideo" className="myVideoBg">
        <source src={wavy} type="video/mp4" />
      </video>
      <div className="doc_bg text-center -mt-44 mb-44">
        <h1 className="text-6xl text-white font-bold">Mint</h1>
      </div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 mb-16">
        <div className="home-header">
          <h2 className="text-white mt-8 text-6xl mb-8 font-bold">About ReelChain Mint</h2>
          <p className="text-white text-3xl mt-3 mb-5">
            Join our community as a distinguish citizen and immerse yourself in a world where creativity thrives and connections flourish. Your journey begins by minting your unique passport, granting you access to exclusive experiences and places among fellow ReelChainers
          </p>
        </div>
        <div className="get_in_touch ">
          <h2 className="text-white mt-4 mb-3 text-5xl">Rewards</h2>
          <p className="text-white mb-3 text-lg font-bold">
            Bonus Airdrop &#x1F525;
          </p>
          <p className="text-white mb-3 text-lg font-bold">
            Gas Free NFT Mint
          </p>
          <p className="text-white mb-3 text-lg font-bold">
            Discord Role
          </p>
          <p className="text-white text-lg bolder font-bold">
            Faucet Assets
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mint