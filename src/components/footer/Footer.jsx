/** @format */

import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer fancy-footer">
			<div className="footer__wave">
				<svg viewBox="0 0 1440 150" preserveAspectRatio="none">
					<path
						d="M0,64 C480,160 960,0 1440,96 L1440,0 L0,0 Z"
						fill="#c9dcd5"
					></path>
				</svg>
			</div>

			<div className="footer__container container">
				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Projects
						</a>
					</li>
					<li>
						<a href="#skills" className="footer__link">
							Skills
						</a>
					</li>
				</ul>

				<div className="footer__social">
					<a
						href="https://www.linkedin.com/in/anusha-shivakumar"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-linkedin"></i>
					</a>
					<a
						href="mailto:ans797@pitt.edu"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxs-envelope"></i>
					</a>
					<a
						href="https://www.instagram.com/ihopethebookiscaptivating/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-instagram"></i>
					</a>
					<a
						href="https://github.com/AnushaShivakumar"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<i className="bx bxl-github"></i>
					</a>
				</div>

				<span className="footer__copy">
					© {new Date().getFullYear()} Anusha Shiva Kumar
				</span>
			</div>
		</footer>
	);
};

export default Footer;
