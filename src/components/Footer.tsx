import React from "react";
import { profileData } from "../data/profileData";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm"></div>
      <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 shadow-2xl">
        <div className="container mx-auto text-center">
          <nav
            className="flex gap-6 justify-center mb-4"
            aria-label="Social media links"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joel Ewaldo's GitHub Profile"
              className="group"
            >
              <FaGithub className="text-3xl text-gray-300 hover:text-blue-400 transition-all duration-300 transform group-hover:scale-110" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joel Ewaldo's LinkedIn Profile"
              className="group"
            >
              <FaLinkedin className="text-3xl text-gray-300 hover:text-blue-400 transition-all duration-300 transform group-hover:scale-110" />
            </a>
          </nav>
          <p className="text-gray-400 text-sm">
            © 2025 {profileData.name}. Built with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 