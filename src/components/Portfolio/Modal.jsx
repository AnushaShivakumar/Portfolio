/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./modal.css";

const Modal = ({ project, onClose, onNext, onPrev }) => {
	const contentRef = useRef(null);
	const [showScrollHint, setShowScrollHint] = useState(false);
	useEffect(() => {
		const content = contentRef.current;
		if (!content) return;

		// Check initially if content overflows
		const isOverflowing = content.scrollHeight > content.clientHeight;
		setShowScrollHint(isOverflowing);

		// Scroll event to toggle hint visibility dynamically
		const handleScroll = () => {
			const atBottom =
				content.scrollTop + content.clientHeight >= content.scrollHeight - 10;

			// Show hint when not at bottom
			setShowScrollHint(!atBottom);
		};

		content.addEventListener("scroll", handleScroll);
		return () => content.removeEventListener("scroll", handleScroll);
	}, [project]);

	if (!project) return null;

	return (
		<div className="modal__overlay">
			<div className="modal__content" ref={contentRef}>
				<button className="modal__close" onClick={onClose}>
					&times;
				</button>

				<h2 className="modal__title">{project.title}</h2>

				<img
					src={project.image}
					alt={project.title}
					className="modal__img-rect"
				/>

				<div
					className="modal__description"
					dangerouslySetInnerHTML={{ __html: project.description }}
				/>

				{showScrollHint && (
					<div className="scroll-indicator">↓ Scroll Down</div>
				)}

				<div className="modal__tags">
					{project.tags.map((tag, i) => (
						<span key={i} className="modal__tag">
							{tag}
						</span>
					))}
				</div>

				{project.github && (
					<a
						href={project.github}
						className="modal__github"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Code / Website
					</a>
				)}

				<div className="modal__navigation">
					<button className="modal__nav-button" onClick={onPrev}>
						← Prev
					</button>
					<button className="modal__nav-button" onClick={onNext}>
						Next →
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
