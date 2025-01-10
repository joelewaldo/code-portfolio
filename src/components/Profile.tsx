import React from "react";
import { profileData } from "../data/profileData";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div className="border border-gray-700 rounded-lg p-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <img
          src="/assets/extra/pfp.jpg"
          alt="Avatar"
          className="rounded-full mr-4 w-32 h-32 object-cover"
        />
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">{profileData.name}</h1>
            <div className="mx-4 h-6 border-l border-gray-700"></div>
            <p className="text-gray-300">{profileData.title}</p>
          </div>
          <div className="mt-2 flex items-center">
            <p className="text-gray-300">📍 {profileData.location}</p>
          </div>
          <div className="mb-2 flex items-center">
            <p className="text-gray-300">
              🎓 {profileData.degree} @ {profileData.school}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-m font-semibold">Looking to hire me? 💼</h3>
            <p className="text-gray-300">Email me @ {profileData.email}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
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
    </div>
  );
};

export default Profile;
