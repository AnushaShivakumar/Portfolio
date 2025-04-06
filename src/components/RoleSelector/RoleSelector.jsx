/** @format */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./roleSelector.css";
import Social from "../home/Social";

const roles = [
	{ title: "Data Scientist", key: "data" },
	{ title: "Full Stack Developer", key: "fullstack" },
	{ title: "Software Engineer", key: "software" },
	{ title: "Content Creation", key: "photo" },
];

const rotatingTitles = ["Data Analyst", "Software Engineer", "UX/UI Developer"];

const RoleSelector = ({ onSelectRole }) => {
	const [text, setText] = useState("");
	const [roleIndex, setRoleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	useEffect(() => {
		const currentTitle = rotatingTitles[roleIndex];
		let typingSpeed = isDeleting ? 50 : 100;

		const type = () => {
			if (isDeleting) {
				setText(currentTitle.substring(0, charIndex - 1));
				setCharIndex(charIndex - 1);
			} else {
				setText(currentTitle.substring(0, charIndex + 1));
				setCharIndex(charIndex + 1);
			}

			if (!isDeleting && charIndex === currentTitle.length) {
				setTimeout(() => setIsDeleting(true), 1200);
			}

			if (isDeleting && charIndex === 0) {
				setIsDeleting(false);
				setRoleIndex((roleIndex + 1) % rotatingTitles.length);
			}
		};

		const timer = setTimeout(type, typingSpeed);
		return () => clearTimeout(timer);
	}, [charIndex, isDeleting, roleIndex]);

	const handleCardClick = (role) => {
		setSelectedCard(role.key);

		// Navigate after animation finishes
		setTimeout(() => {
			onSelectRole(role.key);
		}, 500); // 0.5s animation
	};

	return (
		<section className="home section" id="home">
			<div className="home__container container grid">
				<div className="home__content grid">
					<Social />
					<div className="home__data">
						<h1 className="home__title">Hi! I'm Anusha</h1>
						<h3 className="home__subtitle">
							{text}
							<span className="blinking-cursor">|</span>
						</h3>
						<p className="home__description">
							I’m a curious problem-solver, blending creativity with code. With
							experience across data, software engineering, and design, I turn
							complex ideas into meaningful solutions—whether through Python
							models, React components, or the lens of my camera.
						</p>
					</div>

					<div className="home__img" />
				</div>
			</div>

			<div className="role-selector-section">
				<h3 className="role-prompt">What role are you looking for?</h3>
				<div className="role-grid">
					{roles.map((role) => (
						<motion.div
							key={role.key}
							className="role-card"
							onClick={() => handleCardClick(role)}
							initial={{ scale: 1 }}
							animate={
								selectedCard === role.key
									? { scale: 1.05, opacity: 0, transition: { duration: 0.4 } }
									: { scale: 1, opacity: 1 }
							}
						>
							<h2 className="role-title">{role.title}</h2>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RoleSelector;
