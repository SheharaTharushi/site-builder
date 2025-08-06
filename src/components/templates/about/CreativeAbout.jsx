import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CreativeAbout = ({
	title = "About Me",
	color = "bg-gradient-to-r from-amber-500 to-pink-500",
	textColor = "text-white",
	paragraphs = [
		"Hello! I'm a creative professional specializing in design and development. With over 5 years of experience, I've helped businesses and individuals bring their digital visions to life through thoughtful design and clean code.",
		"My approach combines aesthetic sensibility with technical expertise to create engaging, user-focused experiences that not only look beautiful but also function flawlessly across all devices.",
	],
	buttonText = "My Work",
	buttonLink = "#work",
	imageSrc = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
	imageAlt = "Designer",
	personName = "John Doe",
	personRole = "UI/UX Designer & Developer",
}) => {
	const sectionRef = useRef(null);
	const contentRef = useRef(null);

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
		}

		return () => {
			// Cleanup ScrollTrigger when component unmounts
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			id="about"
			className={`min-h-screen ${color} flex items-center ${textColor} py-20`}
		>
			<div className="container mx-auto px-6">
				<div
					ref={contentRef}
					className="content-wrapper flex flex-col lg:flex-row items-center gap-12"
				>
					<div className="lg:w-1/2">
						<h2 className="text-5xl md:text-6xl font-bold mb-6">{title}</h2>
						{paragraphs.map((paragraph, index) => (
							<p key={index} className="text-xl mb-8 leading-relaxed">
								{paragraph}
							</p>
						))}
						<div className="flex space-x-4">
							<a
								href={buttonLink}
								className="px-8 py-3 bg-white text-amber-500 font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
							>
								{buttonText}
							</a>
						</div>
					</div>
					<div className="lg:w-1/2 relative">
						<div className="rounded-3xl overflow-hidden relative shadow-xl transform hover:scale-105 transition-transform duration-500">
							<img
								src={imageSrc}
								alt={imageAlt}
								className="w-full object-cover h-[500px]"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
								<div>
									<h3 className="text-2xl font-bold">{personName}</h3>
									<p className="text-white/80">{personRole}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

CreativeAbout.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	textColor: PropTypes.string,
	paragraphs: PropTypes.arrayOf(PropTypes.string),
	buttonText: PropTypes.string,
	buttonLink: PropTypes.string,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	personName: PropTypes.string,
	personRole: PropTypes.string,
};

export default CreativeAbout;
