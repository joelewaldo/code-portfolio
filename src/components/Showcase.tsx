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
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="project space-y-2">
      <div className="flex justify-between">
        <h3 className="text-m font-semibold flex items-center">
          {project.name}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:text-gray-300"
          >
            <div className="flex justify-between items-center space-x-2 text-m">
              <p>view my work</p>
              <FaExternalLinkAlt />
            </div>
          </a>
        )}
      </div>
      <p className="text-gray-300">{project.description}</p>
      {project.images.length > 0 && (
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={true}
          containerClass="pt-4 rounded-lg"
          itemClass="px-4"
        >
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.name} ${index + 1}`} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

interface ShowcaseProps {
  title: string;
  works: Project[];
}

const Showcase = (props: ShowcaseProps) => {
  return (
    <Section title={props.title}>
      {props.works.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </Section>
  );
};

export default Showcase;
