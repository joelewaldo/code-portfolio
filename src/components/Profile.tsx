import React from "react";
import { profileData } from "../data/profileData";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const assetPath = (path: string) => `/code-portfolio${path}`;

const Profile: React.FC = () => {
  return (
    <section className="relative" aria-label="About Joel Ewaldo">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm"></div>
      <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-4 sm:p-6 shadow-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col sm:hidden space-y-4">
          <div className="flex flex-col items-center text-center">
            <img
              src={assetPath("/assets/extra/pfp.jpg")}
              alt="Joel Ewaldo - Full Stack Software Engineer"
              className="rounded-full w-24 h-24 object-cover mb-3"
            />
            <h1 className="text-xl font-bold">{profileData.name}</h1>
            <p className="text-gray-300 text-sm">{profileData.title}</p>
          </div>

          <address className="space-y-2 text-center not-italic">
            <p className="text-gray-300 text-sm">📍 {profileData.location}</p>
            <p className="text-gray-300 text-sm">
              🎓 {profileData.degree} @ {profileData.school}
            </p>
          </address>

          <div className="text-center">
            <h2 className="text-sm font-semibold">Looking to hire me? 💼</h2>
            <p className="text-gray-300 text-sm break-all">
              Email me @{" "}
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {profileData.email}
              </a>
            </p>
          </div>

          <nav
            className="flex gap-4 justify-center"
            aria-label="Social media links"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joel Ewaldo's GitHub Profile"
            >
              <FaGithub className="text-xl hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joel Ewaldo's LinkedIn Profile"
            >
              <FaLinkedin className="text-xl hover:text-blue-400 transition-colors duration-200" />
            </a>
          </nav>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden sm:flex justify-between items-center relative">
          <div className="flex items-center">
            <img
              src={assetPath("/assets/extra/pfp.jpg")}
              alt="Joel Ewaldo - Full Stack Software Engineer"
              className="rounded-full mr-4 w-32 h-32 object-cover"
            />
            <div>
              <div className="flex items-center flex-wrap">
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <div className="mx-4 h-6 border-l border-gray-700 hidden lg:block"></div>
                <p className="text-gray-300 lg:inline block w-full lg:w-auto mt-1 lg:mt-0">
                  {profileData.title}
                </p>
              </div>
              <address className="mt-2 flex items-center not-italic">
                <p className="text-gray-300">📍 {profileData.location}</p>
              </address>
              <div className="mb-2 flex items-center">
                <p className="text-gray-300">
                  🎓 {profileData.degree} @ {profileData.school}
                </p>
              </div>
              <div className="mt-4">
                <h2 className="text-m font-semibold">Looking to hire me? 💼</h2>
                <p className="text-gray-300">
                  Email me @{" "}
                  <a
                    href={`mailto:${profileData.email}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {profileData.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <nav
            className="flex gap-4 items-center flex-shrink-0"
            aria-label="Social media links"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joel Ewaldo's GitHub Profile"
            >
              <FaGithub className="text-2xl hover:text-blue-400 transition-colors duration-200" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joel Ewaldo's LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors duration-200" />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Profile;
