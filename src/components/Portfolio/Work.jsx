/** @format */

import React, { useState } from "react";
import "./work.css";
import { projectsData, projectsNav } from "./Data";
import Modal from "./Modal";

const Work = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [showAll, setShowAll] = useState(false);

	const openModal = (index) => {
		setCurrentIndex(index);
		setIsOpen(true);
	};

	const closeModal = () => setIsOpen(false);

	const nextProject = () =>
		setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);

	const prevProject = () =>
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + filteredProjects.length) % filteredProjects.length
		);
	const filteredProjects =
		selectedCategory === "All"
			? projectsData
			: projectsData.filter((project) =>
					project.category?.some(
						(cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
					)
			  );

	const visibleProjects = showAll
		? filteredProjects
		: filteredProjects.slice(0, 8);

	return (
		<section className="work section" id="portfolio">
			<h2 className="section__title">Most recent work</h2>
			<span className="section__subtitle">Projects</span>

			<div className="projects__filters">
				<button
					className={`projects__filter ${
						selectedCategory === "all" ? "active" : ""
					}`}
					onClick={() => setSelectedCategory("all")}
				>
					All
				</button>
				{projectsNav.map((nav, index) => (
					<button
						key={index}
						className={`projects__filter ${
							selectedCategory === nav.name ? "active" : ""
						}`}
						onClick={() => {
							setSelectedCategory(nav.name);
							setShowAll(false);
						}}
					>
						{nav.name}
					</button>
				))}
			</div>

			<div className="work__container container grid">
				{visibleProjects.map((item, index) => (
					<div className="work__card" key={item.id}>
						{/* <img src={item.image} alt={item.title} className="work__img" /> */}

						<h3 className="work__title">{item.title}</h3>

						{/* ✅ Display Tech Tags */}
						<div className="work__tags">
							{item.tags.map((tag, i) => (
								<span key={i} className="work__tag">
									{tag}
								</span>
							))}
						</div>

						{/* ✅ Short Description */}
						<p className="work__description">{item.shortDescription}</p>

						<button className="work__button" onClick={() => openModal(index)}>
							View My Work{" "}
							<i className="bx bx-right-arrow-alt work__button-icon"></i>
						</button>
					</div>
				))}
			</div>

			{/* View More / View Less Toggle */}
			{filteredProjects.length > 6 && (
				<div className="view-toggle">
					<button
						onClick={() => setShowAll(!showAll)}
						className="view-toggle__button"
					>
						{showAll ? "View Less" : "View More"}
					</button>
				</div>
			)}

			{/* Modal Component */}
			{isOpen && (
				<Modal
					project={filteredProjects[currentIndex]}
					onClose={closeModal}
					onNext={nextProject}
					onPrev={prevProject}
				/>
			)}
			<div className="section__divider">
				<svg viewBox="0 0 1440 150" preserveAspectRatio="none">
					<path
						d="M0,96 C480,0 960,160 1440,64 L1440,150 L0,150 Z"
						fill="#344e41"
					/>
				</svg>
			</div>
		</section>
	);
};

export default Work;
