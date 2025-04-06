/** @format */

import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section" id="qualification">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personel journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">
									Responsible Data Science Course Facilitator
								</h3>
								<span className="qualification__subtitle">
									University of Pittsburgh School of Computing and Information
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Aug 2024 - Present
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">
									Graduate Research Assistant
								</h3>
								<span className="qualification__subtitle">
									University of Pittsburgh School of Health and Rehabilitation
									Sciences
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> July 2024 - Present
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">
									Student E-Commerce Administrator
								</h3>
								<span className="qualification__subtitle">
									University of Pittsburgh, Business, Hospitality and Auxiliary
									Services
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> March 2024 - Aug 2024
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">Data Analyst</h3>
								<span className="qualification__subtitle">
									FedEx Ground - Consulting Field Projects (MBA-level)
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Jan 2024 - May 2024
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">Teaching Assistant</h3>
								<span className="qualification__subtitle">
									University of Pittsburgh College of Business Administration
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Sep 2023 - Jan 2024
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">UI Developer Intern</h3>
								<span className="qualification__subtitle">
									Leaps by Analyttica
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> May 2022 - Sep 2022
								</div>
							</div>
						</div>

						{/* <div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
							</div>
						</div> */}
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Product Designer</h3>
								<span className="qualification__subtitle">
									Microsoft - Spain
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - Present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">UX Designer</h3>
								<span className="qualification__subtitle">
									Apple Inc - Spain
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2020 - 2021
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Designer</h3>
								<span className="qualification__subtitle">Figma - Spain</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2018 - 2020
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>
				</div>
				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									{" "}
									Master of Science in Information Science
								</h3>
								<span className="qualification__subtitle">
									University of Pittsburgh
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2023 - Present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">
									Bachelor of Engineering in Computer Science
								</h3>
								<span className="qualification__subtitle">
									Ramaiah Institute of Technology
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2018 - 2022
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						{/* <div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
							</div>
						</div> */}
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Product Designer</h3>
								<span className="qualification__subtitle">
									Microsoft - Spain
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - Present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>

							<div>
								<h3 className="qualification__title">UX Designer</h3>
								<span className="qualification__subtitle">
									Apple Inc - Spain
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2020 - 2021
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Designer</h3>
								<span className="qualification__subtitle">Figma - Spain</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2018 - 2020
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className="section__divider">
				<svg viewBox="0 0 1440 150" preserveAspectRatio="none">
					<path
						d="M0,96 C320,0 640,160 960,64 C1200,0 1440,80 1440,80 L1440,0 L0,0 Z"
						fill="#344e41"
					/>
				</svg>
			</div>
		</section>
	);
};

export default Qualification;
