/** @format */

import React, { useState } from "react";
import "./services.css";

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What i offer</span>

			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">
							Data <br /> Scientist
						</h3>
					</div>

					<span className="services__button" onClick={() => toggleTab(1)}>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div
						className={
							toggleState === 1
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Data Scientist</h3>
							<p className="services__modal-description">
								Applying data analysis techniques to generate actionable
								insights and optimize processes.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Design and deploy machine learning models to forecast trends
										and behaviors..
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Implement advanced algorithms, including Bayesian analysis
										and neural networks.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Translate data into actionable insights using statistical
										methods.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Extensive experience with Python, SPSS, and data
										visualization tools like Tableau.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services__content">
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="services__title">
							Ui/Ux <br /> Designer
						</h3>
					</div>

					<span onClick={() => toggleTab(2)} className="services__button">
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div
						className={
							toggleState === 2
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Ui/Ux Designer</h3>
							<p className="services__modal-description">
								Creating user-centric designs that elevate the digital
								experience.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I design and develop responsive web interfaces using Reach
										Js
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I create seamless UX interactions to enhance user
										experiences
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Specialize in modern frontend frameworks like React for
										optimized solutions.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Focused on user-centered design to position brands
										effectively.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="services__content">
					<div>
						<i className="uil uil-edit services__icon"></i>
						<h3 className="services__title">
							Data <br /> Analyst
						</h3>
					</div>

					<span onClick={() => toggleTab(3)} className="services__button">
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>

					<div
						className={
							toggleState === 3
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">Data Analyst</h3>
							<p className="services__modal-description">
								Turning data into strategic insights for better decision-making.
							</p>

							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Conduct in-depth data analysis to uncover patterns and
										provide strategic recommendations.
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Develop and present reports, charts, and dashboards using
										Excel, Tableau, and SQL
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Expert in data wrangling, statistical analysis, and
										predictive modeling
									</p>
								</li>

								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Support decision-making processes with clear, data-driven
										insights
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
