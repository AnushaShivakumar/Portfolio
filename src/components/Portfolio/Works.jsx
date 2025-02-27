/** @format */

import React, { useState } from "react";

import "./work.css";

const projectsData = [
	{
		category: "Course Project",
		title: "Deep Reinforcement Learning for Autonomous Vehicles",
		description:
			"Designed and trained reinforcement learning models (DQN, PPO, SAC, A2C) to optimize autonomous driving strategies.",
		technologies: ["PyTorch", "Stable-Baselines3", "TensorBoard"],
	},
	{
		category: "Course Project",
		title: "Machine Learning Project: Paint Color Analysis",
		description:
			"Developed machine learning models to predict paint color popularity using RGB and HSL data, improving accuracy by 20%.",
		technologies: ["Python", "Clustering", "Feature Engineering"],
	},
	{
		category: "Work Experience",
		title: "Data Analyst - FedEx Ground",
		description:
			"Developed insights to optimize delivery thresholds, reducing delivery delays by 15% and saving 9.8% annually.",
		technologies: ["Python", "Tableau", "Excel"],
	},
	{
		category: "Work Experience",
		title: "UI Developer Intern - Leaps by Analyttica",
		description:
			"Built interactive web pages using React and Next.js, increasing user engagement by 45%.",
		technologies: ["React", "Next.js", "TypeScript"],
	},
	{
		category: "Research",
		title: "Graduate Research Assistant - University of Pittsburgh",
		description:
			"Applied machine learning techniques to analyze large datasets, enhancing research insights.",
		technologies: ["SPSS", "Excel", "Tableau"],
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
			{/* <h2 className="section__title">Projects</h2>
			<span className="section__subtitle">Most recent work</span> */}

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
						<h3 className="projects__title">{project.title}</h3>
						<p className="projects__description">{project.description}</p>
						<div className="projects__tech">
							{project.technologies.map((tech, i) => (
								<span key={i} className="tech-tag">
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
