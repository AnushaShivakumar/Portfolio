/** @format */

import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [activeNav, setActiveNav] = useState("#home");

	/*=============== Change Background Header on Scroll ===============*/
	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector(".header");
			if (window.scrollY >= 80) {
				header.classList.add("scroll-header");
			} else {
				header.classList.remove("scroll-header");
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	/*=============== Toggle Menu ===============*/
	const handleToggle = () => {
		setToggle(!toggle);
	};

	const closeMenu = () => {
		setToggle(false);
	};

	return (
		<header className="header">
			<nav className="nav container">
				<a href="#home" className="nav__logo">
					Anusha Shiva Kumar
				</a>

				{/* Navigation Menu */}
				<div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list grid">
						<li className="nav__item">
							<a
								href="#skills"
								onClick={() => {
									setActiveNav("#skills");
									closeMenu();
								}}
								className={
									activeNav === "#skills"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-file-alt nav__icon"></i> Skills
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#qualification"
								onClick={() => {
									setActiveNav("#qualification");
									closeMenu();
								}}
								className={
									activeNav === "#qualification"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-briefcase-alt nav__icon"></i>{" "}
								Qualification
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#portfolio"
								onClick={() => {
									setActiveNav("#portfolio");
									closeMenu();
								}}
								className={
									activeNav === "#portfolio"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-scenery nav__icon"></i> Projects
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#contact"
								onClick={() => {
									setActiveNav("#contact");
									closeMenu();
								}}
								className={
									activeNav === "#contact"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-message nav__icon"></i> Contact
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#about"
								onClick={() => {
									setActiveNav("#about");
									closeMenu();
								}}
								className={
									activeNav === "#about" ? "nav__link active-link" : "nav__link"
								}
							>
								<i className="uil uil-user nav__icon"></i> About
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#content"
								onClick={() => {
									setActiveNav("#content");
									closeMenu();
								}}
								className={
									activeNav === "#content"
										? "nav__link active-link"
										: "nav__link"
								}
							>
								<i className="uil uil-camera nav__icon"></i> Content Creation
							</a>
						</li>
					</ul>

					{/* Close Menu Button */}
					<i className="uil uil-times nav__close" onClick={closeMenu}></i>
				</div>

				{/* Toggle Button (Hamburger Icon) */}
				<div className="nav__toggle" onClick={handleToggle}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
