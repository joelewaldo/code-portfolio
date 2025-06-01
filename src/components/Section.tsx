import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
