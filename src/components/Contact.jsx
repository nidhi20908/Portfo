import React, { useState } from "react";
import Navbar from "../styles/Navbar.css";
import { HiOutlineMail } from "react-icons/hi";
import "../styles/Contact.css";


const Contact = () => {
  const links = [
    
    {
      id: 2,
      child: (
        <>
           <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:nidhirmatt2003@gmail.com",
    },
  ];
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true); 
        setError(null);
        setTimeout(() => {
          e.target.reset(); 
          setSubmitted(false); 
        }, 3000);
      } else {
        throw new Error("There was a problem with the submission.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-9  mt-18">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="4"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {submitted && (
          <div className="mt-4 text-center text-lg">
            <p>Your message has been submitted!</p>
          </div>
        )}
          <div className="mt-8">
         <div className="flex space-x-80 mt-5">
            {links.map(({ id, child, href }) => (
              <center>
              <a
                key={id}
                href={href}
                className="flex items-center text-white hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {child}
                <p>Email</p>
              </a>
              </center>
            ))}
          </div>
        </div>

        {error && (
          <div className="mt-4 text-center text-lg text-red-500">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};
<Navbar />
export default Contact;
