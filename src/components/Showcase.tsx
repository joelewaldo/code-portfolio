import React from "react";
import Section from "./Section";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import link out icon

type Project = {
  name: string;
  description: string;
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
      className={`project space-y-2 mb-4 flex flex-col md:flex-row ${
        isLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 flex flex-col justify-center space-y-2">
        <div className={`flex ${isLeft ? "justify-between" : "justify-end"}`}>
          <h3 className="text-xl font-semibold flex items-center">
            {project.name}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:text-gray-300"
              >
                <div className="flex justify-between items-center space-x-2 text-m">
                  <FaExternalLinkAlt />
                </div>
              </a>
            )}
          </h3>
        </div>
        <p className="text-m text-gray-300 mx-8 leading-relaxed text-justify">
          {project.description}
        </p>
      </div>
      {project.images.length > 0 && (
        <div className="md:w-1/2">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            infinite={false}
            centerMode={false}
            containerClass="pt-4 rounded-lg"
            itemClass="px-4"
          >
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.name} ${index + 1}`}
                className="max-h-[500px]"
              />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

interface ShowcaseProps {
  title: string;
  works: Project[];
}

const Showcase = (props: ShowcaseProps) => (
  <Section title={props.title}>
    <div className="container mx-auto px-4">
      {props.works.map((project, index) => (
        <Project key={index} project={project} isLeft={index % 2 === 0} />
      ))}
    </div>
  </Section>
);

export default Showcase;
