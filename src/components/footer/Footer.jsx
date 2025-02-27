/** @format */

import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				{/* <h1 className="footer__title">That’s it for now!</h1>
				<h1 className="footer__title">
					Signing off, but always just a click away :)
				</h1> */}

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
					>
						<i className="bx bxl-linkedin"></i>
					</a>

					<a
						href="mailto:ans797@pitt.edu"
						className="footer__social-link"
						target="_blank"
					>
						<i className="bx bxs-envelope"></i>
					</a>

					<a
						href="https://www.instagram.com/ihopethebookiscaptivating/"
						className="footer__social-link"
						target="_blank"
					>
						<i className="bx bxl-instagram"></i>
					</a>

					<a
						href="https://github.com/AnushaShivakumar"
						className="footer__social-link"
						target="_blank"
					>
						<i className="bx bxl-github"></i>
					</a>
				</div>

				{/* <span className="footer__copy">Happy Coding :)</span> */}
			</div>
		</footer>
	);
};

export default Footer;
