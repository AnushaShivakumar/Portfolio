/** @format */

import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
	return (
		<section className="home section" id="home">
			<div className="home__container container grid">
				<div className="home__content grid">
					<Social />

					<div className="home__img"></div>

					<Data />
				</div>

				<ScrollDown />
			</div>
			<div className="section__divider slant">
				<svg viewBox="0 0 1440 100" preserveAspectRatio="none">
					<polygon points="0,100 1440,0 1440,100 0,100" fill="#6b9080" />
				</svg>
			</div>
		</section>
	);
};

export default Home;
