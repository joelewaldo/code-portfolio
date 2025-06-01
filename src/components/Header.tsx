import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profileData } from "../data/profileData";

const Header: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-sm"></div>
      <header className="relative bg-gray-900/40 backdrop-blur-md border-b border-gray-700/30 shadow-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300">
        <div className="flex justify-between items-center p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold truncate pr-4">
            {profileData.name}
          </h1>
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
