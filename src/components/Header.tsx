import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profileData } from "../data/profileData";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-800">
      <h1 className="text-2xl font-bold">{profileData.name}</h1>
      <div className="flex items-center gap-4">
        <a href={profileData.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-300" />
        </a>
        <a
          href={profileData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-gray-300" />
        </a>
      </div>
    </header>
  );
};

export default Header;
