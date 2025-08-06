import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedPortfolio = ({
	title = "My Work",
	description = "A selection of my best projects showcasing creativity and technical skills.",
	color = "bg-gradient-to-r from-emerald-400 to-cyan-500",
	textColor = "text-white",
	projects = [
		{
			title: "Mobile App",
			category: "UX/UI Design",
			image:
				"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80",
		},
		{
			title: "E-commerce Website",
			category: "Web Development",
			image:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
		},
		{
			title: "Brand Identity",
			category: "Branding",
			image:
				"https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=600&auto=format&fit=crop&q=80",
		},
		{
			title: "Product Design",
			category: "3D Modeling",
			image:
				"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80",
		},
	],
	buttonText = "View Project",
}) => {
	const sectionRef = useRef(null);
	const contentRef = useRef(null);
	const projectRefs = useRef([]);

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

			// Projects animation
			projectRefs.current.forEach((project, index) => {
				if (!project) return;

				gsap.fromTo(
					project,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.7,
						delay: index * 0.1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: project,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
					}
				);
			});
		}

		return () => {
			// Cleanup ScrollTrigger when component unmounts
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			id="work"
			className={`min-h-screen ${color} py-20 ${textColor}`}
		>
			<div className="container mx-auto px-6">
				<div ref={contentRef} className="content-wrapper">
					<h2 className="text-5xl md:text-6xl font-bold mb-2 text-center">
						{title}
					</h2>
					<p className="text-xl mb-16 text-center max-w-2xl mx-auto">
						{description}
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<div
								key={index}
								ref={(el) => (projectRefs.current[index] = el)}
								className="group relative rounded-2xl overflow-hidden shadow-xl"
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
									<p className="text-sm uppercase tracking-widest mb-2 opacity-75">
										{project.category}
									</p>
									<h3 className="text-2xl font-bold">{project.title}</h3>
									<div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-300">
										<button className="mt-4 px-6 py-2 bg-white text-emerald-600 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
											{buttonText}
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

AnimatedPortfolio.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	color: PropTypes.string,
	textColor: PropTypes.string,
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		})
	),
	buttonText: PropTypes.string,
};

export default AnimatedPortfolio;
