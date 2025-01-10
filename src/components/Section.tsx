import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-800">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default Section;
