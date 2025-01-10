import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Showcase from "./components/Showcase";

import { profileData } from "./data/profileData";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-4 max-w-4xl">
        <Profile />
      </div>
      <div className="container mx-auto p-4">
        <Showcase title={"startups 🚀"} works={profileData.startups} />
        <div className="my-8"></div>
        <Showcase title={"projects 🛠"} works={profileData.projects} />
      </div>
    </div>
  );
};

export default App;