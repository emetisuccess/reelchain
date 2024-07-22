import wavy from "../../assets/wavy.mp4";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
// import { Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <div className="lg:container md:container md:mx-auto">
      <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
        <source src={wavy} type="video/mp4" />
      </video>
      <div className="doc_bg text-center -mt-44 mb-44">
        <h1 className="text-3xl md:text-6xl text-white sm:text-5xl">Use Cases&Roadmaps</h1>
      </div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
        <div className="mission">
          <h2 className="text-white mt-4 text-5xl font-bold">Roadmap</h2>
          <h2 className="text-white mt-4 text-xl font-bold">Development Phases</h2>

          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-base">Phase 1: Platform design and MVP development (Q3 2024) </li>
            <li className="text-white text-base">Phase 2: Beta launch with initial content partners and TGE (Q4 2024)</li>
            <li className="text-white text-base">Phase 3: Full launch with community features and governance (Q1 2025)</li>
            <li className="text-white text-base"> Phase 4: Expansion and strategic partnerships (Q2 2025)</li>
          </ul>

          <h2 className="text-white mt-4 text-xl font-bold">Timeline</h2>
          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-base">Q3 2024: Complete MVP development.</li>
            <li className="text-white text-base">Q4 2024: Launch beta version with early adopters, TGE.</li>
            <li className="text-white text-base">Q1 2025: Full platform launch.</li>
            <li className="text-white text-base">Q1 2025: Expand platform and onboard more content creators and viewers.</li>
          </ul>
        </div>
        <div className="flex justify-between mb-16  gap-3">
          <a href="/use-case" className="mt-16 flex grow items-center justify-between py-1 px-8 border border-white-200">
            <div>
              <p className="text-lg text-white ">Use Case</p>
            </div>
            <FaAngleLeft />
          </a>

          <a href="/technical-architecture" className="mt-16 flex grow  items-center justify-between py-1 px-8 border border-white-200">
            <div>
              <p className="text-lg text-white ">Technical Architecture</p>
            </div>
            <FaAngleRight />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Roadmap