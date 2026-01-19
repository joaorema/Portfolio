import React from "react"
import ProjectCard from "@/components/Projectcard";

const ProjectPage: React.FC = () => 
  {
    
    const GOOGLE_DRIVE_LINUX = "https://drive.google.com/file/d/1uAGXp_0qnKdWxsVgfMrW_9ogcRDffjcT/view?usp=drive_link";
    const GOOGLE_DRIVE_WINDOWS = "https://drive.google.com/file/d/172OVFe2YqIQ4N27aNYu6RlAKY7832qGu/view?usp=drive_link";

    const Projects = [
        {
          title: "Minishell",
          videoSrc: "/Minishell.webm",
          description: "Minishell is a minimal Unix shell implemented in C, designed to replicate core shell functionalities. Supports command parsing, execution, pipelines, redirections, environment variable, and built-in commands.",
          repoLink: "https://github.com/joaorema/Minishell",
        },
        {
          title: "Irc",
          videoSrc: "/irc.webm",
          description: "Minimal IRC-like server implemented as a 42 Porto project. The goal is to practise network programming, sockets, and a simple protocol to handle multiple clients, channels and messages.",
          repoLink: "https://github.com/joaorema/ft_irc",
        },
        {
          title: "Inception",
          videoSrc: "/inception.webm",
          description: "System administration infrastructure implemented as a 42 Porto project. The goal is to deepen understanding of Docker by orchestrating a secure stack of NGINX, WordPress, and MariaDB containers.",
          repoLink: "https://github.com/joaorema/Inception",
        },
        {
          title: "Cub3d",
          videoSrc: "/cub3d.webm",
          description: "3D graphical engine inspired by Wolfenstein 3D, implemented as a 42 Porto project. The goal is to master raycasting algorithms, texture mapping, and window management to render a navigable 3D world using C.",
          repoLink: "https://github.com/joaorema/cub3d",
        },
        {
          title: "Transcendence ",
          videoSrc: "/transcendece.webm",
          description: "Full-stack web application, implemented as a 42 Porto project. The goal is to build a robust web application using TypeScript, handling OAuth, databases, and live multiplayer WebSockets.",
          repoLink: "https://starcadence.dev",
        },
        {
          title: "Palavras",
          videoSrc: "/palavras.webm",
          description: "Recreating Wordle and Connections. Using React, vite, tailwind, fastify and JavaScript(.jsx). Backend uses database managing player login, Password (encrypted) and game stats.",
          repoLink: "https://palavrasproject.vercel.app",
        },
        {
          title: "Bills",
          videoSrc: "/billsvideo.webm",
          description: "Developed a full stack management platform using Next.js, TypeScript , Prisma and PostgreSql. Implemented user authentication , dashboard , profile and search feature.",
          repoLink: "https://joaoremasubs.vercel.app/",
        },
        {
          title: "MultiWeapons",
          videoSrc: "/multiweapons.mp4",
          description: "2D Game created with Godot. Roguelike game with multiple implemented systems like player, stats, enemys, weapons and spawners. Passion project still in development. Click to try it!",
          downloadLinks: {
            linux: GOOGLE_DRIVE_LINUX,
            windows: GOOGLE_DRIVE_WINDOWS
          }
        },
    ]

    return(
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-20">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-white border border-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                01. PROJECTS
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-6 tracking-tight">
                PORTFOLIO
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl font-mono">
                &gt; A collection of projects showcasing my skills C, C++, TypeScript, Docker, Shell, GodotScript and Web development.
            </p>
        </div>
          
          <div className="flex overflow-x-auto gap-6 py-8 px-2 w-full snap-x snap-mandatory pb-12">
            {Projects.map((project, index) => (
              <div key={index} className="shrink-0 w-[85vw] md:w-96 snap-center">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
    );
} 

export default ProjectPage