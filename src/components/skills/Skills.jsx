/** @format */

import React from "react";
import "./skills.css";
import {
	FaCode,
	FaDatabase,
	FaCloud,
	FaChartBar,
	FaBrain,
} from "react-icons/fa";

const Skills = () => {
	return (
		<section className="skills section" id="skills">
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">My technical level</span>

			<div className="skills__scroll-wrapper">
				<div className="skills__scroll-track">
					<div className="skills__scroll-container">
						{/* Web Development */}
						<div className="skills__box">
							<h3 className="skills__title">
								<FaCode className="skills__icon" /> Web Development
							</h3>
							<ul className="skills__list">
								<li>React Js</li>
								<li>JavaScript</li>
								<li>Bootstrap</li>
								<li>Node Js</li>
								<li>MySQL</li>
								<li>Git</li>
							</ul>
						</div>

						{/* Data Analysis */}
						<div className="skills__box">
							<h3 className="skills__title">
								<FaChartBar className="skills__icon" /> Data Analysis
							</h3>
							<ul className="skills__list">
								<li>Excel</li>
								<li>Tableau</li>
								<li>Python</li>
								<li>SPSS</li>
								<li>SQL</li>
								<li>Google Analytics</li>
							</ul>
						</div>

						{/* Machine Learning */}
						<div className="skills__box">
							<h3 className="skills__title">
								<FaBrain className="skills__icon" /> Machine Learning
							</h3>
							<ul className="skills__list">
								<li>Python</li>
								<li>Scikit-Learn</li>
								<li>Bayesian Analysis</li>
								<li>Neural Networks</li>
								<li>Predictive Analytics</li>
								<li>NumPy</li>
							</ul>
						</div>

						{/* Cloud Computing */}
						<div className="skills__box">
							<h3 className="skills__title">
								<FaCloud className="skills__icon" /> Cloud Computing
							</h3>
							<ul className="skills__list">
								<li>AWS</li>
								<li>Microsoft Azure</li>
								<li>Google Cloud Platform</li>
								<li>Docker</li>
								<li>Kubernetes</li>
								<li>Cloud Monitoring</li>
							</ul>
						</div>
						{/* Dev Tools & Platforms */}
						<div className="skills__box">
							<h3 className="skills__title">⚙️ Dev Tools & Platforms</h3>
							<ul className="skills__list">
								<li>Git</li>
								<li>GitHub</li>
								<li>VS Code</li>
								<li>Postman</li>
								<li>Docker</li>
								<li>Notion</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="section__divider">
				<svg viewBox="0 0 1440 150" preserveAspectRatio="none">
					<path
						d="M0,0 C480,120 960,-40 1440,80 L1440,0 L0,0 Z"
						fill="#c9dcd5"
					/>
				</svg>
			</div>
		</section>
	);
};

export default Skills;
