import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Showcase from "./components/Showcase";
import ThreeBackground from "./components/ThreeBackground";
import Footer from "./components/Footer";

import { profileData } from "./data/profileData";

const App: React.FC = () => {
  const experienceCount = profileData.experience.length;
  const freelancingCount = profileData.freelancing.length;
  const startupsCount = profileData.startups.length;

  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen relative overflow-x-hidden">
      <ThreeBackground />
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto p-4 sm:p-6 max-w-4xl">
          <Profile />
        </div>
        <div className="container mx-auto p-4 sm:p-6">
          <Showcase
            title={"experience 🎓"}
            works={profileData.experience}
            indexOffset={0}
          />
          <div className="my-6 sm:my-8"></div>
          <Showcase
            title={"freelancing 💼"}
            works={profileData.freelancing}
            indexOffset={experienceCount}
          />
          <div className="my-6 sm:my-8"></div>
          <Showcase
            title={"startups 🚀"}
            works={profileData.startups}
            indexOffset={experienceCount + freelancingCount}
          />
          <div className="my-6 sm:my-8"></div>
          <Showcase
            title={"projects 🛠"}
            works={profileData.projects}
            indexOffset={experienceCount + freelancingCount + startupsCount}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
