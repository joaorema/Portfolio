import Greenbtn from "@/components/Greenbtn";
import Cplusbtn from "@/components/logobtns/Cplusbtn";
import Cbtn from "@/components/logobtns/Cbtn";
import Typescriptbtn from "@/components/logobtns/Typesriptbtn";
import Dockerbtn from "@/components/logobtns/Dockerbtn";
import Reactbtn from "@/components/logobtns/Reactbtn";
import Tailwindbtn from "@/components/logobtns/Tailwindbtn";
import Vitebtn from "@/components/logobtns/Vitebtn";
import Bashbtn from "@/components/logobtns/Bashbtn";
import Linuxbtn from "@/components/logobtns/Linuxbtn";
import Projectcard from "@/components/Projectcard";
import Timeline from "@/components/Timeline";
import { useNavigate } from "react-router-dom";
import { GitHubCalendar } from "react-github-calendar";

const HomePage: React.FC = () => {
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

  ];
  return (
    <div className="scroll-smooth">
      {/* Hero / Home */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-bg1"
      >
        <div className="flex items-center gap-50">
          {/* Image */}
          <div>
            <img
              src="../../public/fotojoao.jpg"
              className="h-150 w-auto rounded-4xl shadow-lg"
              alt="João"
            />
          </div>

          {/* Text */}
          <div className="text-left max-w-xl">
            <h1 className="text-5xl font-bold font-poppins text-[#7FFFD4]">Hello , I'm João Rema</h1>
            <p className="mt-4 text-2xl py-20 font-poppins text-[#E6EAF2]">
              8 years of experience in client facing roles and sales. Very
              curious, proactive and passionate about problem solving using
              logical thinking. Currently finishing a software development
              program at 42 Porto with programming experience in C, C++,
              TypeScript and React. Looking to transition into tech by combining
              strong soft skills with a growing expertise in software
              development.
            </p>
            <div className="flex gap-15">
              <Greenbtn></Greenbtn>
            </div>
          </div>
        </div>
      </section>




      {/* Experience */}
      <section
        id="experience"
        className="min-h-screen flex flex-col bg-bg1 px-20 py-10"
      >
        <h2 className="text-3xl font-semibold text-center">Experience</h2>
        <div className="gap-4 text-xl font-poppins flex mx-auto py-100">
        <Timeline></Timeline>
        </div>
      </section>

      {/* Projects */}
     <section
        id="projects"
        className="min-h-screen flex flex-col bg-bg1 px-20 py-10"
      >
        <h1 className="text-4xl font-bold mb-6 text-center font-poppins">Projects</h1>

        <div className="flex overflow-x-auto py-6 w-full snap-x snap-mandatory scroll-smooth scrollbar-none">
          {Projects.map((project, index) => (
            <div key={index} className="shrink-0 w-150 snap-start">
              <Projectcard {...project} />
            </div>
          ))}
        </div>
      </section>


     {/* Technologies */}
      <section
        id="technologies"
        className="min-h-screen flex flex-col bg-bg1 px-20 py-10"
      >
        <h1 className="text-4xl font-bold mb-10 font-poppins text-center">Technologies</h1>

        <div className="grid grid-cols-4 gap-6 w-500 h-full justify-center mx-auto">
          {/* Row 1 → 4 items */}
          <div className="col-span-1"><Cbtn /></div>
          <div className="col-span-1"><Cplusbtn /></div>
          <div className="col-span-1"><Typescriptbtn /></div>
          <div className="col-span-1"><Dockerbtn /></div>

          {/* Row 2 → 3 items */}
          <div className="col-span-1"><Linuxbtn /></div>
          <div className="col-span-1"><Bashbtn /></div>
          <div className="col-span-2"><Reactbtn /></div> {/* React takes 2 columns */}

          {/* Row 3 */}
          <div className="col-span-1"><Tailwindbtn /></div>
          <div className="col-span-1"><Vitebtn /></div>
          {/* Add more here */}
        </div>
      </section>




      {/* Contributions */}
      <section
        id="contributions"
        className="min-h-screen flex flex-col bg-bg1 px-20 py-10"
      >
        <h1 className="text-4xl font-bold mb-10 font-poppins text-center">Contributions</h1>
        <div className="gap-4 text-xl font-poppins flex mx-auto py-100">
        <GitHubCalendar
          username="joaorema"
          colorScheme="dark"
          blockSize={20}
          blockMargin={4}
        />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen flex flex-col bg-bg1 px-20 py-10"
      >
        <h1 className="text-4xl font-bold mb-10 font-poppins text-center">Contacts</h1>
        <div className="gap-4 text-xl font-poppins flex mx-auto py-100">
          <a href="mailto:joaopcrema@gmail.com" className="hover:text-green-400 text-5xl">📧 Email</a>
          <a href="https://github.com/joaorema" target="_blank" className="hover:text-green-400 text-5xl">🐙 GitHub</a>
          <a href="https://linkedin.com/in/joao-rema" target="_blank" className="hover:text-green-400 text-5xl">🔗 LinkedIn</a>
          <a href="https://joaorema.dev" target="_blank" className="hover:text-green-400 text-5xl">🌐 Portfolio</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

