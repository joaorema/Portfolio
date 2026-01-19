import Technologies from "@/components/Technologies";
import HeroPage from "./HeroPage";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectsPage";
import ContactsPage from "./ContactsPage";


const HomePage: React.FC = () => {
  return (
    <div className="scroll-smooth bg-white text-dark overflow-x-hidden">
      

      {/* Hero / Home */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-10 md:px-8">
        <HeroPage></HeroPage>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-4 py-16 bg-gray-50">
        <ProjectPage></ProjectPage>
      </section>

      {/* Technologies */}
      <section id="technologies" className="min-h-screen flex flex-col justify-center px-4 py-16">
        
         <Technologies />
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen flex flex-col justify-center px-4 py-16">
        <ExperiencePage></ExperiencePage>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex flex-col justify-center px-4 py-16">
          <ContactsPage></ContactsPage> 
      </section>
    </div>
  );
};

export default HomePage;

