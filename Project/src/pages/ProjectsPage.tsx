import React from "react"
import { useNavigate } from "react-router-dom"
import Projectcard from "@/components/Projectcard";

const ProjectPage: React.FC = () =>{
    const navigate = useNavigate()
      const Projects = [
        {
          title: "Minishell",
          videoSrc: "../../public/Minishell.webm",
          description: "Minishell is a minimal Unix shell implemented in C, designed to replicate core shell functionalities and provide a hands-on understanding of shell. It supports command parsing, execution, pipelines, redirections, environment variable management, and several built-in commands.",
          onClick: () => navigate("/"),
        },
        {
          title: "Transcendence ",
          videoSrc: "../../public/transcendece.webm",
          description: " Minimal IRC-like server implemented as a 42 Porto project.The goal is to practise network programming, sockets, and a simple protocol to handle multiple clients, channels and messages.",
          onClick: () => navigate("/"),
        },
        {
          title: "Irc",
          videoSrc: "../../public/irc.webm",
          description: " Minimal IRC-like server implemented as a 42 Porto project.The goal is to practise network programming, sockets, and a simple protocol to handle multiple clients, channels and messages.",
          onClick: () => navigate("/"),
        },
        {
          title: "Inception",
          videoSrc: "../../public/inception.webm",
          description: " Minimal IRC-like server implemented as a 42 Porto project.The goal is to practise network programming, sockets, and a simple protocol to handle multiple clients, channels and messages.",
          onClick: () => navigate("/"),
        },
        {
          title: "MultiWeapons",
          videoSrc: "../../public/multiweapons.mp4",
          description: "Roguelike Game I developed using Godot. Implemented player, enemy, stats , levels, spawners and much more!",
          onClick: () => navigate("/"),
        },
        {
          title: "Palavras",
          videoSrc: "../../public/palavras.webm",
          description: " Minimal IRC-like server implemented as a 42 Porto project.The goal is to practise network programming, sockets, and a simple protocol to handle multiple clients, channels and messages.",
          onClick: () => navigate("/"),
        },
        {
          title: "Cub3d",
          videoSrc: "../../public/cub3d.webm",
          description: "This project was done in partnership with Izzytoot. Cub3D is our own mini‑Wolfenstein‑style 3D engine using raycasting and MiniLibX.",
          onClick: () => navigate("/"),
        },
    ]
    return(
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-white border border-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
              02. PROJECTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-6 tracking-tight">
            PORTFOLIO
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl font-mono">
            &gt; A collection of projects showcasing my skills C, C++, TypeScript, Docker , Shell, GodotScript and Web development.
          </p>
        </div>
          
          {/* Scroll Container: 
             Added `pb-10` to make room for scrollbars or shadows.
             Added `px-2` to prevent shadow clipping on edges.
          */}
          <div className="flex overflow-x-auto gap-6 py-8 px-2 w-full snap-x snap-mandatory scrollbar-none">
            {Projects.map((project, index) => (
              // Changed w-150 to a responsive width. 
              // Mobile: w-[85vw] (shows a bit of next card). Desktop: w-96.
              <div key={index} className="shrink-0 w-[85vw] md:w-96 snap-center">
                <Projectcard {...project} />
              </div>
            ))}
          </div>
        </div>
    );
} 

export default ProjectPage