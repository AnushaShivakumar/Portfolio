/** @format */
import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/Portfolio/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentCreation from "./components/ContentCreation/ContentCreation";

const App = () => {
	const [roleSelected, setRoleSelected] = useState(false);

	const handleRoleSelect = (role) => {
		console.log("Selected Role:", role); // optional: log which role
		setRoleSelected(true);
	};
	return (
		<>
			<Header />

			<main className="main">
				<Home />

				<Skills />
				<Work />
				<Qualification />
				<Contact />
				<About />
				<ContentCreation />
			</main>
			<Footer />
			<ScrollUp />
		</>
	);
};

export default App;
