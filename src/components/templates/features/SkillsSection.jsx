import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillsSection = ({
  title = "Skills",
  description = "The tools and technologies I use to bring creative ideas to life.",
  color = "bg-gradient-to-r from-fuchsia-500 to-purple-600",
  textColor = "text-white",
  skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "React Development", level: 85 },
    { name: "Motion Design", level: 75 },
    { name: "3D Modeling", level: 65 },
    { name: "Branding", level: 80 },
  ],
  tools = ["Figma", "React", "GSAP", "Photoshop", "Tailwind CSS", "Next.js", "Blender", "Illustrator"]
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const skillBarsRef = useRef([]);
  
  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
      
      // Skills bar animation
      skillBarsRef.current.forEach((bar, index) => {
        if (!bar) return;
        
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
    
    return () => {
      // Cleanup ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [skills]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`min-h-screen ${color} py-20 ${textColor}`}
    >
      <div className="container mx-auto px-6">
        <div ref={contentRef} className="content-wrapper">
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-center">{title}</h2>
          <p className="text-xl mb-16 text-center max-w-2xl mx-auto">{description}</p>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-lg font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
                  <div
                    ref={el => skillBarsRef.current[index] = el}
                    className="h-full bg-white rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <span className="text-lg font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ),
  tools: PropTypes.arrayOf(PropTypes.string)
};

export default SkillsSection; 