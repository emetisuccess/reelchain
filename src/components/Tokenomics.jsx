import { useState } from "react";
import wavy from "../../assets/wavy.mp4";
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import { PieChart } from "@mui/x-charts/PieChart";
import Checkbox from '@mui/material/Checkbox';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";



const colors = ['#006BD6', '#EC407A'];
const series = [
  {
    data: [
      { id: 0, value: 15, label: "F&T" },
      { id: 1, value: 5, label: "Advisors" },
      { id: 2, value: 20, label: "DF" },
      { id: 3, value: 20, label: "M&P" },
      { id: 4, value: 30, label: "CR" },
      { id: 5, value: 10, label: "Reserve" },
    ],
  },
]







const Tokenomics = () => {
  // const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="lg:container md:container md:mx-auto mb-16">
      <video autoPlay muted loop id="myVideo" className="myVideoBg mt-8">
        <source src={wavy} type="video/mp4" />
      </video>
      <div className="doc_bg text-center -mt-44 mb-44">
        <h1 className="text-4xl font-bold md:text-6xl text-white sm:text-5xl">Tokenomics</h1>
      </div>
      <div className="home lg:w-3/5 md:w-3/5  sm:w-4/5 w-9/12">
        <div className="permission">
          <h2 className="text-white mt-4 text-5xl font-bold mb-6">Tokenomics</h2>

          <div>
            <h4 className="text-white mt-4 text-xl font-bold mb-1">Native Token: REEL</h4>
            <ul className="list-inside list-desc hover:list-circle">
              <li className="text-white text-lg">Token Symbol: REEL</li>
              <li className="text-white text-lg">Total Supply: 1,000,000,000 REEL</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mt-4 text-xl font-bold mb-1">Token Distribution</h4>
            <ul className="list-inside list-desc hover:list-circle">
              <li className="text-white text-lg">F&T : Founders and Team- 15% (Vested over 4 years)</li>
              <li className="text-white text-lg">DF : Development Fund- 20%</li>
              <li className="text-white text-lg">M&P : Marketing and Partnerships-20%</li>
              <li className="text-white text-lg">CR : Community Rewards-30%</li>
              <li className="text-white text-lg">Advisors-5% (Vested over 2 years)</li>
              <li className="text-white text-lg">Reserve-10%</li>
            </ul>
          </div>
          <div className="my-8">
            <Stack>
              <PieChart
                series={series}
                slotProps={{ legend: { hidden: true } }}
                colors={colors}
                width={500}
                height={400}
              />
            </Stack>
          </div>

          <h2 className="text-white mt-4 text-xl font-bold">Token Utility</h2>
          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-base">In-Platform Payments: Users pay for content and services using REEL tokens.</li>
          </ul>

          <h2 className="text-white mt-4 text-xl font-bold">Rewards and Incentives</h2>
          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-base">
              Users earn tokens for watching content, participating in community activities, and promoting the platform.
            </li>
          </ul>

          <h2 className="text-white mt-4 text-xl font-bold">Governance:</h2>

          <ul className="list-inside list-desc hover:list-circle">
            <li className="text-white text-base">Token holders participate in the DAO, voting on key decisions and proposals.</li>
          </ul>
        </div>

        <div className="flex justify-between mb-16 gap-3">
          <Link to="/key-features" className="mt-16 flex grow items-center justify-between px-2 border border-white-200">
            <FaAngleLeft style={{ fontSize: "3rem", fontWeight: "bolder" }} />
            <div>
              <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Key Features</p>
            </div>
          </Link>

          <Link to="/use-case" className="mt-16 flex grow  items-center justify-between px-2 border border-white-200">
            <div>
              <p className="text-xs xl: md:text-lg sm:text-lg text-white font-bold">Use Case</p>
            </div>
            <FaAngleRight style={{ fontSize: "3rem", fontWeight: "bolder" }} />
          </Link>
        </div>
      </div>
    </div >
  );
};

export default Tokenomics;
