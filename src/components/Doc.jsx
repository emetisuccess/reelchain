import wavy from "../../assets/wavy.mp4";

const Doc = () => {
 return (
  <div className="lg:container md:container md:mx-auto">
   <video autoPlay muted loop id="myVideo" className="myVideoBg">
    <source src={wavy} type="video/mp4" />
   </video>
   <div className="doc_bg text-center -mt-44 mb-44">
    <h1 className="text-3xl md:text-6xl text-white sm:text-5xl">Welcome to Our Documentation</h1>
   </div>
   <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5">
    <div className="home-header">
     <h2 className="text-white mt-8 text-5xl">Introduction</h2>
     <p className="text-white text-lg my-2">
      ReelChain is a decentralized movie streaming platform designed to revolutionize the film industry by leveraging blockchain
      technology. ReelChain offers viewers unrestricted access to diverse films and ensures transparent and fair revenue
      distribution. ReelChain combines decentralized content hosting, blockchain-based payments, NFTs, and community governance to
      create a transparent, secure, and community-driven movie streaming experience.
     </p>
     <p className="text-white text-lg my-2">
      The movie streaming industry has experienced rapid growth, yet it remains dominated by a few centralized platforms. These
      platforms often impose high fees, restrict content availability due to regional licensing, and compromise user data privacy.
      Our decentralized "Stream-to-Earn" platform leverages the power of blockchain to offer a transparent, fair, and rewarding
      environment consumers, utilizing $REEL as the native token. Reelchain combines decentralised content hosting , blockchain
      based payments, NFTs and community governance to create a transparent,secure and community driven movie streaming experience
     </p>
    </div>
    <div className="home_description">
     <h2 className="text-white mt-8 text-3xl">Problem Statement</h2>
     <p className="text-white text-lg my-3">- Restricted access to content based on geographic location.</p>
     <p className="text-white text-lg my-3">- Data privacy and security concerns.</p>
     <p className="text-white text-lg my-3">- Limited engagement and reward opportunities.</p>
     <h3 className="text-white mt-8 text-3xl">Solution</h3>
     <p className="text-white text-lg my-2">
      Decentralized Movie Streaming Platform:
      <br />
      ReelChain aims to solve these challenges by creating a decentralized movie streaming platform that ensures transparency,
      fairness, and user empowerment.
     </p>
     <h3 className="text-white mt-8 text-3xl">Key Features</h3>
     <p className="text-white text-lg">
      - Decentralized Content Hosting: Using IPFS and Arweave to store and distribute content.
     </p>
     <p className="text-white text-lg">
      - Blockchain-Based Payments: Smart contracts automate payments and ensure transparent revenue sharing.
     </p>
     <p className="text-white text-lg">
      - NFTs for Collectibles: NFTs provide access to exclusive content and can serve as digital collectibles.
     </p>
     <p className="text-white text-lg">
      - Community Governance: A DAO allows users and creators to participate in decision-making processes.
     </p>
    </div>
    <div className="doc_info my-2">
     <h2 className="text-white mt-4 text-2xl">Technical Architecture</h2>
     <h2 className="text-white mt-4 text-xl">System Overview</h2>
     <p className="text-white text-lg">
      ReelChain’s architecture consists of a decentralized storage layer, a blockchain layer, smart contracts, in-app wallet and a
      user-friendly interface.
     </p>

     <h2 className="text-white mt-4 text-xl">Components</h2>
     <p className="text-white text-lg">
      Decentralized Storage:
      <br />- IPFS Ensures content is stored securely and distributed efficiently.
     </p>

     <h2 className="text-white mt-4 text-xl">Blockchain Layer:</h2>
     <p className="text-white text-lg">- Polygon: Provides the foundation for smart contracts and transactions.</p>

     <h2 className="text-white mt-4 text-xl">Smart Contracts:</h2>
     <p className="text-white text-lg">- Payment Automation: Manages revenue sharing, ticket sales, and royalties.</p>
     <p className="text-white text-lg">- NFT Management: Handles the creation, sale, and transfer of NFTs.</p>

     <h2 className="text-white mt-4 text-xl">In-app Wallet :</h2>
     <p className="text-white text-lg">- ReelChain Wallet:</p>

     <h2 className="text-white mt-4 text-xl">User Interface:</h2>
     <p className="text-white text-lg">
      - Web and Mobile Applications: Provide an intuitive experience for users to stream content and interact with the platform.
     </p>

     <h2 className="text-white mt-4 text-xl">Security Measures:</h2>
     <p className="text-white text-lg">- Data Encryption: Protects user data and content.</p>
     <p className="text-white text-lg">- User Authentication: Ensures secure access and identity verification.</p>
    </div>
    <div className="permission">
     <h2 className="text-white mt-4 text-3xl">Tokenomics</h2>
     <h1 className="text-6xl text-red-500">Chartjs</h1>

     <h2 className="text-white mt-4 text-xl">Token Utility</h2>
     <p className="text-white text-lg">In-Platform Payments: - Users pay for content and services using REEL tokens.</p>

     <h2 className="text-white mt-4 text-xl">Rewards and Incentives:</h2>
     <p className="text-white text-lg">
      - Users earn tokens for watching content, participating in community activities, and promoting the platform.
     </p>

     <h2 className="text-white mt-4 text-xl">Governance:</h2>
     <p className="text-white text-lg">- Token holders participate in the DAO, voting on key decisions and proposals.</p>
    </div>

    <div className="mission">
     <h2 className="text-white mt-4 text-3xl">Use Cases</h2>
     <p className="text-white text-lg">- Unrestricted Access: Enjoy diverse content without regional restrictions.</p>
     <p className="text-white text-lg">- Rewards: Earn tokens for engagement and participation.</p>
    </div>

    <div className="mission">
     <h2 className="text-white mt-4 text-3xl">Roadmap</h2>
     <h2 className="text-white mt-4 text-xl">Development Phases</h2>
     <p className="text-white text-lg">- Phase 1: Platform design and MVP development (Q3 2024) </p>
     <p className="text-white text-lg">- Phase 2: Beta launch with initial content partners and TGE (Q4 2024)</p>
     <p className="text-white text-lg">- Phase 3: Full launch with community features and governance (Q1 2025)</p>
     <p className="text-white text-lg">- Phase 4: Expansion and strategic partnerships (Q2 2025)</p>

     <h2 className="text-white mt-4 text-xl">Timeline</h2>
     <p className="text-white text-lg">- Q3 2024: Complete MVP development.</p>
     <p className="text-white text-lg">- Q4 2024: Launch beta version with early adopters, TGE.</p>
     <p className="text-white text-lg">- Q1 2025: Full platform launch.</p>
     <p className="text-white text-lg">- Q1 2025: Expand platform and onboard more content creators and viewers.</p>
    </div>
    <div className="get_in_touch">
     <h2 className="text-white mt-4 text-3xl">Community and Governance</h2>
     <h2 className="text-white mt-3 text-xl">Decentralized Autonomous Organization(DAO)</h2>
     <p className="text-white text-lg">
      Structure:
      <br />- Community members hold governance tokens ($REEL) and participate in decision-making.
     </p>
     <p className="text-white text-lg">
      Voting Mechanisms:
      <br />- Proposals are submitted and voted on by token holders.
     </p>
     <h2 className="text-white mt-3 text-xl"> Community Engagement</h2>
     <p className="text-white text-lg">- Regular AMAs, community updates, and feedback sessions.</p>
     <p className="text-white text-lg">- Incentive programs to reward active community members.</p>
    </div>
    <div className="get_in_touch">
     <h2 className="text-white mt-4 text-3xl">Legal and Compliance</h2>

     <h2 className="text-white mt-4 text-xl"> Regulatory Considerations</h2>
     <p className="text-white text-lg">- Compliance with international and local regulations.</p>
     <p className="text-white text-lg">- Intellectual property rights management to protect creators.</p>

     <h2 className="text-white mt-4 text-xl">Risk Factors</h2>
     <p className="text-white text-lg">- Regulatory Risks: Adapting to changing regulations.</p>
     <p className="text-white text-lg">- Technical Risks: Ensuring platform security and scalability.</p>
     <p className="text-white text-lg">- Market Risks: Competing with established centralized platforms.</p>
    </div>

    <div className="get_in_touch">
     <h2 className="text-white mt-4 text-3xl">Conclusion</h2>
     <p className="text-white text-lg">
      ReelChain aims to revolutionize the movie streaming industry by providing a decentralized, transparent, and fair platform
      for creators and viewers. By leveraging blockchain technology, ReelChain ensures that viewers enjoy unrestricted access to
      diverse films, and every transaction is transparent and fair.
     </p>
    </div>
   </div>
  </div>
 );
};

export default Doc;
