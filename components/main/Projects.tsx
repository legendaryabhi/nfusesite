
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Project = () => {
  return (
    <section
      id="knowmore"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80"
      style={{ transform: "scale(0.9)" ,zIndex:20}}
    >
            <div style={{
                position: "relative",
                width: "100%",
                zIndex:20
                
              }}>
            <h1 style={{marginBottom:60}} className='text-[30px] text-white font-medium mt-[10px] mb-[15px]'>How  Nuclear Fusion can change the World</h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          
          title="Clean Energy Source"
          description="If we can achieve sustained fusion reactions, it would provide a virtually limitless and clean energy source."
        />
        
        <ProjectCard
          
          title="Endless Fuel Supply"
          description="Fusion relies on isotopes found in water (deuterium from seawater and tritium from lithium). These resources are practically inexhaustible"
        />
        <ProjectCard
          
          title="Safety and Security"
          description="Fusion reactions occur at much lower temperatures than fission reactions, reducing the risk of catastrophic accidents"
        />
      </div>
      </div>
      <div style={{
                position: "relative",
                width: "100%",
                marginTop: "80px",
                zIndex:20
                
              }}>
            <h1 style={{marginBottom:30}} className='text-[30px] text-white font-medium mt-[10px] mb-[15px]'>How Project NFuse will achieve Sustained Fusion</h1>
            <p style={{marginBottom:30}} className='text-[18px]  text-gray-300 mt-[10px] mb-[15px]'>Traditional fusion methods require extremely high temperatures and pressures to achieve the necessary plasma state, making them prohibitively expensive. NFuse aims to change this by developing an innovative approach to achieve nuclear fusion without these extreme conditions, significantly lowering the cost.</p>
            </div>
      
    </section>
  );
};

export default Project;
