import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Showcase from "./components/Showcase";

import { profileData } from "./data/profileData";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <div className="container mx-auto p-4 max-w-4xl">
        <Profile />
        <Showcase title={"startups 🚀"} works={profileData.startups} />
      </div>
    </div>
  );
};

export default App;
