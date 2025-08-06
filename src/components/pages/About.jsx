export default function About() {
	return (
		<div className="space-y-20">
			{/* About Hero Section */}
			<section className="text-center max-w-3xl mx-auto px-4">
				<div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
					About Us
				</div>
				<h1 className="text-4xl md:text-5xl font-bold mb-8">
					Building the future of web interfaces
				</h1>
				<p className="text-lg text-gray-600 mb-10">
					We're a passionate team of designers and developers on a mission to
					make web development more efficient and enjoyable through beautiful,
					reusable UI components.
				</p>
				<div className="flex justify-center gap-4">
					<img
						src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60"
						alt="Team member"
						className="w-12 h-12 rounded-full border-2 border-white"
					/>
					<img
						src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60"
						alt="Team member"
						className="w-12 h-12 rounded-full border-2 border-white"
					/>
					<img
						src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60"
						alt="Team member"
						className="w-12 h-12 rounded-full border-2 border-white"
					/>
					<img
						src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60"
						alt="Team member"
						className="w-12 h-12 rounded-full border-2 border-white"
					/>
					<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm">
						+8
					</div>
				</div>
			</section>

			{/* Mission & Values */}
			<section className="grid md:grid-cols-2 gap-12 px-4">
				<div>
					<h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
						<span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
							1
						</span>
						Our Mission
					</h2>
					<p className="text-gray-600 mb-4">
						We're on a mission to simplify web development by providing a
						comprehensive library of beautiful, accessible, and customizable UI
						components that help developers build modern applications faster.
					</p>
					<p className="text-gray-600">
						Our goal is to bridge the gap between designers and developers,
						offering components that look great out of the box while being
						highly customizable to match your brand.
					</p>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
						<span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
							2
						</span>
						Our Values
					</h2>
					<ul className="space-y-4 text-gray-600">
						<li className="flex items-start gap-3">
							<span className="text-primary">✓</span>
							<p>
								<strong>Quality:</strong> We believe in creating components that
								meet the highest standards of design and functionality.
							</p>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-primary">✓</span>
							<p>
								<strong>Accessibility:</strong> We're committed to making our
								components accessible to all users.
							</p>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-primary">✓</span>
							<p>
								<strong>Community:</strong> We value feedback and contributions
								from our community to improve our library.
							</p>
						</li>
					</ul>
				</div>
			</section>

			{/* Team Section */}
			<section className="px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						We're a small but mighty team of designers and developers passionate
						about creating beautiful and functional user interfaces.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							name: "Alex Johnson",
							role: "Founder & Lead Designer",
							image:
								"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
						},
						{
							name: "Sarah Davis",
							role: "Senior Developer",
							image:
								"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
						},
						{
							name: "Miguel Torres",
							role: "UI/UX Designer",
							image:
								"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
						},
					].map((member, index) => (
						<div
							key={index}
							className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-md transition-shadow group"
						>
							<div className="aspect-[4/3] overflow-hidden">
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-1">{member.name}</h3>
								<p className="text-gray-600 mb-4">{member.role}</p>
								<div className="flex gap-4">
									<a
										href="#"
										className="text-gray-400 hover:text-primary transition-colors"
									>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
										</svg>
									</a>
									<a
										href="#"
										className="text-gray-400 hover:text-primary transition-colors"
									>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
									<a
										href="#"
										className="text-gray-400 hover:text-primary transition-colors"
									>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
