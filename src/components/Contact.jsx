import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (email.length != "" || subject.length != "" || message != "") {
      emailjs
        .sendForm("service_ckfbioa", "template_g3zwo87", form.current, {
          publicKey: "qg19pgoYrVbAHAdCD",
        })
        .then(
          () => {
            alert("SUCCESS...");
          },
          (error) => {
            alert("FAILED...", error.text);
          },
        );
      e.target.reset();
    }
  };

  return (
    <div className="container md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-full flex flex-column justify-center items-center mt-8">
      <div className="w-full  mb-5">
        <h3 className="text-white text-center text-5xl"> Contact US </h3>{" "}
      </div>
      <div className="w-full w-9/12">
        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-900 text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="subject"
              id="subject"
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Enter Subject"
              required
            />
            {subject.length > 0 && subject.length < 6 ? <small className="text-red-700">Subject</small> : ""}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              cols="10"
              rows="10"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
