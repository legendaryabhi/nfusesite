
import React from "react";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" ,zIndex:20}}
    >
      <SkillText />
      <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                marginTop: "40px",
                zIndex:20
                
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/G4vHpQGulYk"
                width="100%"
                height="90%" 
                style={{ position: "absolute", top: 0, left: 0 ,zIndex:20}}
                allow="autoplay; encrypted-media"
                
                title="video"
              />
            </div>
      
      
    </section>
  );
};

export default Skills;
