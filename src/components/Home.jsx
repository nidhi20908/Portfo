import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa"; 
import photo from "../assets/photo.jpg";
import "../styles/Home.css";

const Home = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/nidhi-r-matt-32997522a",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/nidhi20908/NIDHI-RM",
    },
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Eat-Code-Sleep-Repeat", "Coder__"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, words]);

  return(
    <div>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
          <div className="flex flex-col justify-center h-full w-full md:w-1/2">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Hello, I am Nidhi.
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              {text}
              <span className="blinking-cursor">|</span>
            </p>
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={photo}
              alt="profile"
              className="rounded-2xl w-2/3 md:w-1/3"
            />
          </div>
        </div>
      </div>

      <div name="about" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white about">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-5">
            I am Nidhi from Davangere, pursuing my Bachelor’s degree in Information Science Engineering at JSS Academy of Technical Education, Bangalore.
          </p>

          <br />

          <p className="text-xl">
            I like to code from scratch and love the idea of bringing thoughts to life.
            I value minimalistic designs, thoughtful branding of the content, and customer relatable experience.
            I enjoy creating or redesigning a distinct identity for a product or service.
          </p>

          <div className="flex justify-center items-center mt-6 space-x-8">
            {links.map(({ id, child, href }) => (
              <a
                key={id}
                href={href}
                className="flex items-center text-white hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
