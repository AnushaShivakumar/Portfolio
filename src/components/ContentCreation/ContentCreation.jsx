/** @format */

import "./ContentCreation.css";
import Insta1 from "../../assets/insta1.jpg";
import Insta2 from "../../assets/insta2.jpg";
import Insta3 from "../../assets/insta3.jpg";

const ContentCreation = () => {
	return (
		<section className="content section" id="content">
			<h2 className="section__title">Content Creation</h2>
			<span className="section__subtitle">
				Instagram Highlights (@ihopethebookiscaptivating)
			</span>

			<div className="content__container container grid">
				<img src={Insta1} alt="Insta Post 1" className="content__img" />
				<img src={Insta2} alt="Insta Post 2" className="content__img" />
				<img src={Insta3} alt="Insta Post 3" className="content__img" />
			</div>

			<div className="content__description">
				<p>
					<strong>Photography has always been something I come back to</strong>
					—it’s my way of{" "}
					<strong>noticing things that feel quiet but full</strong>. I try to{" "}
					<strong>capture the softness in a frame</strong>: moody skies, light
					slipping through windows, people caught in calm or movement. It’s
					never about a perfect shot, just about{" "}
					<strong>how a moment feels</strong>.
				</p>

				<p>
					My content is <strong>minimal</strong>, <strong>intentional</strong>,
					and <strong>rooted in balance</strong>—colors that breathe, shadows
					that hold shape, and scenes that feel{" "}
					<strong>unfiltered but meaningful</strong>. Most of what I share lives
					on <strong>Instagram</strong>, where I explore{" "}
					<strong>light, mood, and subtle emotion</strong>
					through visuals.
				</p>

				<p>
					<strong>Why I create:</strong> Photography gives me space to{" "}
					<strong>slow down and notice</strong>. It’s my way of{" "}
					<strong>being present</strong>—and{" "}
					<strong>sharing that feeling with others</strong>.
				</p>

				<p>
					<strong>Books</strong> are woven into this rhythm too. I read to
					<strong>
						reflect, reset, and sometimes to find language for things I haven’t
						figured out yet
					</strong>
					. Stories help me slow down—just like photography. I share both,
					because they feel connected in the way they hold presence.
				</p>
				<p>
					<strong>
						It’s not about doing it all. It’s about paying attention—to moments,
						to meaning, to what stays with you.
					</strong>
				</p>
			</div>
		</section>
	);
};

export default ContentCreation;
