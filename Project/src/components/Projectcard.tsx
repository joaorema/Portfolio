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
      whileHover={{ scale: 1.02, y: -4 }} // Reduced scale slightly for smoother feel
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        flex flex-col justify-between
        bg-white border border-zinc-200
        squared-2xl overflow-hidden
        transition duration-200 ease-in-out
        shadow-md 
        w-full h-[500px]  // Fixed height for alignment, full width of parent container
        text-left hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
      "
    >
      {/* Media Section - Fixed height */}
      <div className="h-48 bg-black w-full relative">
        <div className="absolute top-0 left-0 w-full p-2 bg-linear-to-b from-black/80 to-transparent z-10">
            <h3 className="text-white font-bold font-poppins text-lg pl-2">{title}</h3>
        </div>

        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 flex flex-col justify-between bg-white">
        <p className="text-sm text-zinc-600 font-mono leading-relaxed line-clamp-6">
          {description}
        </p>

        <div className="mt-4 pt-4 border-t border-zinc-100 w-full">
          <span className="inline-block text-center text-white bg-black hover:bg-green-600  transition-colors font-medium squared-lg text-sm px-4 py-3 w-full font-mono">
            Learn More
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default ProjectCard;