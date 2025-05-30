/** @format */

import React, { useState, useEffect } from "react";

const Data = () => {
	const roles = ["Data Analyst", "Software Engineer", "UX/UI Developer"];
	const [text, setText] = useState("");
	const [roleIndex, setRoleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentRole = roles[roleIndex];
		let typingSpeed = isDeleting ? 50 : 100;

		const type = () => {
			if (isDeleting) {
				setText(currentRole.substring(0, charIndex - 1));
				setCharIndex(charIndex - 1);
			} else {
				setText(currentRole.substring(0, charIndex + 1));
				setCharIndex(charIndex + 1);
			}

			// Full word typed
			if (!isDeleting && charIndex === currentRole.length) {
				setTimeout(() => setIsDeleting(true), 1200);
			}

			// Word deleted
			if (isDeleting && charIndex === 0) {
				setIsDeleting(false);
				setRoleIndex((roleIndex + 1) % roles.length);
			}
		};

		const timer = setTimeout(type, typingSpeed);
		return () => clearTimeout(timer);
	}, [charIndex, isDeleting, roleIndex]);

	return (
		<div className="home__data">
			<h1 className="home__title">Hi!&nbsp;I'm&nbsp;Anusha</h1>
			<h3 className="home__subtitle">
				{`${text}`}
				<span className="blinking-cursor">|</span>
			</h3>
			<strong></strong>
			<p className="home__description">
				With a background in <strong>software engineering</strong> and a mind
				for <strong>machine learning</strong>, I build systems that{" "}
				<strong>think and understand</strong>.<br />
				<br />
				From <strong>analyzing complex data</strong> to crafting{" "}
				<strong>elegant UI/UX</strong>, I blend logic with creativity to solve
				real-world problems—always with the <strong>user in mind</strong>.
				<br />
				<br />
				Currently <strong>shaping this vision</strong> through my Master’s in
				Information Science at the <strong>University of Pittsburgh</strong>.
			</p>
			<a
				href="https://pitt-my.sharepoint.com/:b:/g/personal/ans797_pitt_edu/EcOCIivcyShFkbqHBgWoIG0Bm0dCWwJs_zDD1BYj9MMT4A?e=DsiZO6s"
				className="button button--flex"
			>
				My Resume
				<svg
					className="button__icon"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
						fill="var(--container-color)"
					></path>
					<path
						d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
						fill="var(--container-color)"
					></path>
				</svg>
			</a>
		</div>
	);
};

export default Data;
