import Hero from "@/components/Hero";
import ProjectOveriew from "@/components/ProjectOveriew";
import RoadMap from "../../components/Roadmap";
import TeamCards from "@/components/TeamCards";

export default function Home() {
  return (
    <main className="bg-black-200 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">

      <div className="max-w-7xl w-full">
        
        <Hero />

        <ProjectOveriew  />

        <RoadMap />

        <TeamCards />
        
      </div>     
      
    </main>
  );
}
