import React from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  description?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  imageSrc,
  videoSrc,
  description,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="
    flex flex-col items-center justify-between
    bg-white/10 backdrop-blur-md
    border border-white/20
    rounded-2xl overflow-hidden
    transition duration-100 ease-in-out
    shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
    w-96 h-150
  "
    >
      <div
        className="bg-bg2 w-full flex items-center justify-center text-center text-2xl font-poppins font-bold"
        style={{ fontSize: "42px", backgroundColor: "#6366f1" }}
      >
        {title}
      </div>

      <div className="flex-1 w-full ">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-96 h-80 object-cover "
          />
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex-1 flex items-center text-sm text-gray-300 my-2 font-poppins font-bold">{description}</div>

      <button
        type="button"
        className="text-white bg-bg1 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 w-full"
      >
        Learn More
      </button>
    </motion.button>
  );
};

export default ProjectCard;
