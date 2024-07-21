import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Waitlist = () => {
  const form = useRef();
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (email.length != "") {
      emailjs
        .sendForm("service_7au1hvz", "template_m8isumd", form.current, {
          publicKey: "e3vB99EP-IvXx1qit",
        })
        .then(
          () => {
            alert("SUCCESS...");
          },
          (error) => {
            alert("FAILED...", error.text);
          },
        );
      // e.target.reset();
    }
  };

  return (
    <div className="lg:container md:container md:mx-auto flex flex-column justify-center items-center my-44">
      <div className="relative w-9/12 lg:w-3/5 md:w-3/5 sm:w-4/5 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative w-full h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img src="landscape.jpg" id="myVideo" className="myVideoBg" />
          <div className="doc_bg relative text-center -mt-44 mb-44">
            <h1 className="md:text-5xl sm:text-4xl text-3xl text-red-600 font-bold">Waitlist</h1>
          </div>
        </div>
        <img src="logo1.png" className="ml-4 w-20 -mt-8 relative md:h-15 sm:h-15 h-15 " />
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            ReelChain Waitlist
          </h5>
          <p className="block font-sans text-lg text-base antialiased font-light leading-relaxed text-inherit">
            To complete this form, you must satisfy all requirements below
          </p>
          <div className="get_in_touch mt-4">
            <p className="text-lg flex items-center mt-4">
              <h3 className="text-bold text-2xl">Join : </h3>
              <a href="https://discord.com/invite/wzHGYgfH3h">
                <FaDiscord className="text-4xl ml-4 text-white" />
              </a>
            </p>
            <p className="text-lg flex items-center mt-4">
              <h3 className="text-bold text-2xl">Follow Us On : </h3>
              <a href="https://x.com/ReelChain">
                <BsTwitterX className="text-4xl ml-4" />
              </a>
            </p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="flex flex-column justify-start items-center">
            <form ref={form}>
              <div className="form-group">
                <div className="input-group mt-2">
                  <input
                    style={{ border: "2px solid black", borderRadius: "5px" }}
                    type="text"
                    className="w-3/4 align-middle text-lg hover:shadow-lg py-3 px-4"
                    size={300}
                    placeholder="Enter Your Wallet Address"
                    required
                  />
                  <br />
                  <button
                    className="align-middle text-lg rounded-lg select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-4 px-6 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none join-waitlist__btn"
                    type="submit"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
