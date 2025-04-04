/** @format */

import React, { useState } from "react";
import "./work.css";

// Sample images (replace these with actual image URLs or imports)
const projectsData = [
	{
		category: "Course Project",
		title: "Deep Reinforcement Learning for Autonomous Vehicles",
		description:
			"Designed and trained reinforcement learning models (DQN, PPO, SAC, A2C) to optimize autonomous driving strategies.",
		technologies: ["PyTorch", "Stable-Baselines3", "TensorBoard"],
		image: "/images/driving.png",
		link: "https://github.com/your-repo/reinforcement-learning",
	},
	{
		category: "Course Project",
		title: "Machine Learning Project: Paint Color Analysis",
		description:
			"Developed machine learning models to predict paint color popularity using RGB and HSL data, improving accuracy by 20%.",
		technologies: ["Python", "Clustering", "Feature Engineering"],
		image: "/images/paint.png",
		link: "https://github.com/your-repo/paint-color-analysis",
	},
	{
		category: "Work Experience",
		title: "Data Analyst - FedEx Ground",
		description:
			"Developed insights to optimize delivery thresholds, reducing delivery delays by 15% and saving 9.8% annually.",
		technologies: ["Python", "Tableau", "Excel"],
		image: "/images/fedex.png",
		link: "https://www.fedex.com/",
	},
	{
		category: "Work Experience",
		title: "UI Developer Intern - Leaps by Analyttica",
		description:
			"Built interactive web pages using React and Next.js, increasing user engagement by 45%.",
		technologies: ["React", "Next.js", "TypeScript"],
		image: "/images/leaps.png",
		link: "https://www.analytica.com/",
	},
	{
		category: "Research",
		title: "Graduate Research Assistant - University of Pittsburgh",
		description:
			"Applied machine learning techniques to analyze large datasets, enhancing research insights.",
		technologies: ["SPSS", "Excel", "Tableau"],
		image: "/images/pitt.png",
		link: "https://www.pitt.edu/",
	},
];

const categories = ["All", "Work Experience", "Research", "Course Project"];

const Projects = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredProjects =
		selectedCategory === "All"
			? projectsData
			: projectsData.filter((project) => project.category === selectedCategory);

	return (
		<section className="projects section">
			<div className="projects__filters">
				{categories.map((category, index) => (
					<button
						key={index}
						className={`projects__filter ${
							selectedCategory === category ? "active" : ""
						}`}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				))}
			</div>

			<div className="projects__container">
				{filteredProjects.map((project, index) => (
					<div key={index} className="projects__card">
						<img
							src={project.image}
							alt={project.title}
							className="project-image"
						/>
						<h3 className="projects__title">{project.title}</h3>
						<div className="projects__tech">
							{project.technologies.map((tech, i) => (
								<span key={i} className="tech-tag">
									{tech}
								</span>
							))}
						</div>
						<p className="projects__description">{project.description}</p>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="view-work-button"
						>
							View My Work →
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
