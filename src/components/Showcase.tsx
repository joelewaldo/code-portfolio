import React from "react";
import Section from "./Section";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  name: string;
  description: string[];
  images: string[];
  link?: string;
};

interface ProjectProps {
  project: Project;
  isLeft: boolean;
}

const Project: React.FC<ProjectProps> = ({ project, isLeft }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className={`project space-y-4 mb-8 flex flex-col md:flex-row ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 flex flex-col justify-center space-y-3">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 shadow-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300">
            <div
              className={`flex ${
                isLeft ? "justify-start" : "md:justify-end justify-start"
              } mb-4`}
            >
              <h3 className="text-lg sm:text-xl font-semibold flex items-center">
                {project.name}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 hover:text-blue-400 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-center space-x-2 text-sm">
                      <FaExternalLinkAlt />
                    </div>
                  </a>
                )}
              </h3>
            </div>
            <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
              <ul className="space-y-3 list-none">
                {project.description.map((point, index) => (
                  <li key={index} className="flex items-center group">
                    <div className="relative flex-shrink-0 mr-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg transform transition-transform duration-200 group-hover:scale-125"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
                    </div>
                    <span className="transition-colors duration-200 group-hover:text-white">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {project.images.length > 0 && (
        <div
          className={`md:w-1/2 mt-6 md:mt-0 ${isLeft ? "md:ml-6" : "md:mr-6"}`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group-hover:border-blue-500/30">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                infinite={false}
                centerMode={false}
                containerClass="rounded-lg overflow-hidden"
                itemClass="px-2"
              >
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <img
                      src={image}
                      alt={`${project.name} ${index + 1}`}
                      className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </Carousel>
              <div className="absolute top-3 right-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/80">
                  {project.images.length} image
                  {project.images.length !== 1 ? "s" : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ShowcaseProps {
  title: string;
  works: Project[];
  indexOffset?: number;
}

const Showcase = (props: ShowcaseProps) => (
  <Section title={props.title}>
    <div className="container mx-auto px-4">
      {props.works.map((project, index) => (
        <Project
          key={index}
          project={project}
          isLeft={(index + (props.indexOffset || 0)) % 2 === 0}
        />
      ))}
    </div>
  </Section>
);

export default Showcase;
