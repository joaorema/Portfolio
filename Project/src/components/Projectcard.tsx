import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps 
{
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  description?: string;
  repoLink?: string;     // For standard GitHub links
  downloadLinks?: {      // New prop specifically for the Game
    linux: string;
    windows: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({title, imageSrc, videoSrc, description, repoLink, downloadLinks,}) => 
{
  const [showDownloads, setShowDownloads] = useState(false);

  
  const handleMainClick = () => 
  {
    
    if (downloadLinks) 
    {
      setShowDownloads(!showDownloads);
    } 
    else if (repoLink) 
    {
      window.open(repoLink, "_blank");
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        flex flex-col justify-between
        bg-white border border-zinc-200
        rounded-2xl overflow-hidden
        transition duration-200 ease-in-out
        shadow-md hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        w-full h-[500px]
        text-left relative
      "
    >
      <AnimatePresence>
        {showDownloads && downloadLinks && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
          >
            <h3 className="text-2xl font-bold font-poppins mb-6">Choose Platform</h3>
            
            <div className="flex flex-col gap-4 w-full">
              <a 
                href={downloadLinks.linux}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-black text-white py-3 rounded-lg font-mono hover:bg-zinc-800 transition-colors"
              >
                Linux Build
              </a>
              <a 
                href={downloadLinks.windows}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-black text-white py-3 rounded-lg font-mono hover:bg-blue-700 transition-colors"
              >
                Windows Build
              </a>
            </div>

            <button 
              onClick={() => setShowDownloads(false)}
              className="mt-8 text-sm text-zinc-500  font-mono"
            >
              Go Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEDIA SECTION */}
      <div className="h-48 bg-black w-full relative group">
        <div className="absolute top-0 left-0 w-full p-2 bg-linear-to-b from-black/80 to-transparent z-10">
            <h3 className="text-white font-bold font-poppins text-lg pl-2 text-center">{title}</h3>
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

      {/* CONTENT SECTION */}
      <div className="flex-1 p-8 flex flex-col justify-between bg-white">
        <p className="text-sm text-zinc-600 font-mono leading-relaxed line-clamp-6">
          {description}
        </p>

        <div className="mt-4 pt-4 border-t border-zinc-100 w-full">
          <button
            onClick={handleMainClick}
            className={`
              inline-block text-center transition-colors font-medium rounded-lg text-sm px-4 py-3 w-full font-mono
              ${downloadLinks 
                ? "bg-black hover:bg-zimc-800 text-white"  
                : "bg-black hover:bg-zinc-800 text-white"        
              }
            `}
          >
            {downloadLinks ? "Play Demo" : "Explore Project"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;