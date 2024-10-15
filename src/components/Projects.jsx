 import React from "react";
import swiggy from "../assets/portfolio/swiggy.jpg";
import school from "../assets/portfolio/school.jpg";
import api from "../assets/portfolio/api.jpg";
import Navbar from "../styles/Navbar.css";
import resume from "../assets/resume.pdf";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "../styles/Projects.css";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: swiggy,
      link: 'https://github.com/nidhi20908/swiggy-web-project',
      repo: 'https://github.com/nidhi20908/swiggy-web-project',
      name: 'Swiggy Clone'
    },
    {
      id: 2,
      src: api,
      link: 'https://github.com/nidhi20908/chandrayan',
      repo: 'https://github.com/nidhi20908/chandrayan',
      name: 'Chandrayan Project'
    },
    {
      id: 3,
      src: school,
      link: 'https://github.com/nidhi20908/Academic-tracker',
      repo: 'https://github.com/nidhi20908/Academic-tracker',
      name: 'Academic Tracker'
    },
  ];

  const links = [
    {
      id: 1,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, repo, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={name}
                className="rounded-md duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="flex items-center justify-center">
                <button 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                  onClick={() => window.open(repo, '_blank')}>
                  {name}
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <div className="flex space-x-80 mt-5">
              {links.map(({ id, child, href }) => (
                <a
                  key={id}
                  href={href}
                  className="flex items-center text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                  <p>Resume</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<Navbar />
export default Projects;
