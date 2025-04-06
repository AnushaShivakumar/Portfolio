/** @format */

import FedEx from "../../assets/FedEx.webp";
import Reflections from "../../assets/Reflections.png";
import Expo from "../../assets/Expo.png";
import mHealth from "../../assets/mHealth.png";
import CanvaAI from "../../assets/CanvaAI.png";
import Archaeology from "../../assets/Archaeology.png";
import Blockchain from "../../assets/Blockchain.png";
import HRI from "../../assets/HRI.png";
import DataVisual from "../../assets/DataVisual.png";
import MLProject from "../../assets/MLProject.webp";
import MLAlgo from "../../assets/MLAlgo.png";
import PAWS from "../../assets/PAWS.png";
import DataAnalytics from "../../assets/DataAnalytics.webp";
import VR from "../../assets/VR.jpg";
import ASL from "../../assets/ASL.png";

export const projectsData = [
	{
		id: 1,
		title: "Reflections – A Photo Gallery Application",
		category: ["Web & App Dev", "All"],
		date: "Dec 2024",
		shortDescription: "Full-stack gallery app with role-based access.",
		description: `
      <p>A feature-rich full-stack photo gallery platform built with Node.js, Express.js, and MongoDB. The app offers interactive features, robust admin control, and seamless performance across devices.</p>
      <ul style="text-align: left; padding-left: 1.5rem;">
        <li>Role-based access: users can register, log in, and admins can moderate content</li>
        <li>Photo upload with title, category, and description support</li>
        <li>Commenting and liking functionality with real-time feedback</li>
        <li>Utility scripts for promoting users to admin and cleaning orphaned data</li>
        <li>GridFS for scalable file upload and storage</li>
        <li>Modular CSS and responsive EJS templates for a consistent UI</li>
        <li>Flash notifications for feedback and dynamic user interaction</li>
      </ul>
    `,
		tags: ["Node.js", "Express.js", "MongoDB", "Bootstrap", "Vanilla CSS"],
		image: Reflections,
		github: "https://reflections-site.glitch.me/",
	},
	{
		id: 2,
		title: "Graduate Research – University of Pittsburgh",
		category: ["Research & Publications", "ML & Data", "All"],
		date: "Jul 2024 – Present",
		shortDescription: "ML for social policy insights.",
		description: `
		Leading research at the intersection of machine learning, public health, and policy analytics. Contributing to a peer-reviewed research publication addressing systemic disparities through data-driven approaches.
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Applied <strong>machine learning</strong> and statistical modeling to analyze large-scale survey datasets covering healthcare access, Medicaid expansion, and social determinants of health.</li>
			<li>Performed multi-variable analysis using <strong>SPSS</strong>, <strong>Excel</strong>, and <strong>Tableau</strong> to uncover trends in mental health utilization, dental health outcomes, and pandemic-era policy responses.</li>
			<li>Developed geospatial visualizations and regression models to evaluate equity-focused healthcare indicators across racial and demographic lines.</li>
			<li>Contributing author on an ongoing <strong>policy research paper</strong>, integrating empirical findings to inform healthcare access recommendations at the state level.</li>
		</ul>
	`,
		tags: [
			"SPSS",
			"Excel",
			"Tableau",
			"Policy Research",
			"ML for Social Science",
			"Health Disparities",
		],
		image: DataAnalytics,
		github: "",
	},
	{
		id: 3,
		title: "Reinforcement Learning Recitation – Deep Learning Variants",
		category: ["ML & Data", "All"],
		date: "Aug 2024 – Dec 2024",
		shortDescription: "Compared DQN, PPO, SAC, and A2C for autonomous driving.",
		description: `
		<p>Implemented and compared multiple reinforcement learning algorithms in a simulated driving environment using <strong>Stable-Baselines3</strong> and <strong>highway-fast-v0</strong>. Evaluated <strong>DQN, PPO, SAC, and A2C</strong> agents on metrics such as reward stability, episode length, and collision rates. The training was executed in Google Colab and visualized using TensorBoard.</p>
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li><strong>DQN:</strong> Unstable, low reward, high variance</li>
			<li><strong>PPO:</strong> High stability, low crash rate</li>
			<li><strong>SAC:</strong> Best performance, minimal variance</li>
			<li><strong>A2C:</strong> Moderate results, better than DQN</li>
			<li>Logged and visualized training trends using TensorBoard</li>
			<li>Simulated highway with dynamic traffic and collision conditions</li>
		</ul>
	`,
		tags: [
			"PyTorch",
			"Stable-Baselines3",
			"DQN",
			"PPO",
			"SAC",
			"A2C",
			"TensorBoard",
			"highway-env",
		],
		image: HRI,
		github: "https://github.com/AnushaShivakumar/RL-Autonomous-Driving",
	},

	{
		id: 4,
		title: "Blockchain-assisted Verifiable Cassandra",
		category: ["Backend & Cloud", "All"],
		date: "Feb 2024 – Mar 2024",
		shortDescription:
			"Proof-of-concept integrating Merkle Trees and Ethereum for query verification on Cassandra DB.",
		description: `
		<p>This project secures distributed Cassandra databases using blockchain-backed Merkle Tree verification. It demonstrates how clients can validate query results and detect tampering through a decentralized integrity system.</p>
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Simulated interaction between four roles: Data Owner, Service Provider, Query Client, and Malicious Client</li>
			<li>Constructs Merkle Hash Trees (MHT) from data and stores the root on the Ethereum blockchain</li>
			<li>Clients use Merkle proofs to verify query results against the blockchain root</li>
			<li>Implements tampering detection via simulated adversarial clients</li>
			<li>Decentralized trust achieved through Ethereum smart contract integration</li>
			<li>Proof-of-concept built entirely with Python and simulated over a local Cassandra DB</li>
		</ul>
	`,
		tags: [
			"Python",
			"Cassandra",
			"Merkle Tree",
			"Ethereum",
			"Blockchain",
			"Smart Contracts",
			"Web3.py",
			"Truffle",
			"Ganache",
		],
		image: Blockchain,
		github:
			"https://github.com/AnushaShivakumar/Blockchain-assisted-Verifiable-Cassandra",
	},
	{
		id: 5,
		title: "Machine Learning Project – Paint Color Analysis",
		category: ["ML & Data", "All"],
		date: "Apr 2024 – May 2024",
		shortDescription: "Industry-sponsored paint color popularity prediction.",
		description: `
		<p>Conducted a collaborative machine learning research project with PPG Industries to analyze customer preferences and predict paint color trends using RGB and HSL data features.</p>
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Built regression and clustering models to predict paint color popularity</li>
			<li>Leveraged RGB and HSL color models for feature engineering</li>
			<li>Collaborated with PPG Industries to align insights with product design and inventory strategies</li>
			<li>Used Scikit-learn for model development and Seaborn for visualization</li>
			<li>Improved predictive accuracy of customer preferences for future product planning</li>
		</ul>
	`,
		tags: [
			"Scikit-learn",
			"Regression",
			"K-Means Clustering",
			"RGB/HSL",
			"Pandas",
			"Data Visualization",
		],
		image: MLProject,
		github:
			"https://github.com/AnushaShivakumar/Industry-Sponsored-Machine-Learning-Project-Paint-Color-Analysis",
	},
	{
		id: 6,
		title: "Consulting Field Project – FedEx",
		category: ["Industry & Innovation", "ML & Data", "All"],
		date: "Jan 2024 – May 2024",
		shortDescription: "FedEx delivery analytics and optimization project.",
		description: `
		Worked as a Data Analyst for FedEx Ground to identify inefficiencies in delivery operations using Excel, Tableau, and Python. 
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Developed data-driven consulting insights, achieving a <strong>15% improvement</strong> in operational efficiency and reduced delivery delays.</li>
			<li>Collaborated with cross-functional teams to analyze <strong>package volume and station density</strong>, delivering recommendations that led to a <strong>projected annual savings of 9.8%</strong>.</li>
			<li>Led strategic data analytics initiatives as part of a consulting competition, earning <strong>2nd place in the KPMG US Cup</strong> where solutions were projected to <strong>save millions annually</strong>.</li>
			<li>Applied Agile methodologies to iteratively refine <strong>data models and business strategies</strong> in close coordination with stakeholders.</li>
		</ul>
		Due to NDA restrictions, specific datasets and code implementations cannot be disclosed.
	`,
		tags: ["Excel", "Tableau", "Python", "Data Analytics", "Agile"],
		image: FedEx,
		github: "",
	},

	{
		id: 7,
		title: "Canva AI Voice Assistant",
		category: ["Industry & Innovation", "ML & Data", "All"],
		date: "Jun 2024 – Jul 2024",
		shortDescription:
			"AI-powered voice assistant for color palette creation within Canva.",
		description: `
		<p>Canva AI Voice Assistant is an AI-driven mobile design tool built for the Canva Apps Marketplace. It enhances the creative process by transforming natural language commands into intelligent design actions using OpenAI’s ChatGPT and DALL·E APIs.</p>
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li><strong>Voice to Color Palette:</strong> Converts spoken commands into aesthetic color palettes using AI</li>
			<li><strong>AI Chat Assistant:</strong> Interactive chatbot provides design suggestions and feedback</li>
			<li><strong>Image Generation:</strong> Generates visuals from user descriptions with DALL·E integration</li>
			<li><strong>Memory Function:</strong> Remembers past interactions for personalized assistance</li>
			<li><strong>React Native App:</strong> Built a cross-platform interface optimized for mobile interaction</li>
		</ul>
		<p>This app streamlines the creative experience for designers, marketers, and content creators looking to accelerate ideation and generate designs on the fly—right within the Canva ecosystem.</p>
	`,
		tags: ["React Native", "Xcode", "OpenAI"],
		image: CanvaAI, // Replace with the appropriate imported image
		github: "https://github.com/AnushaShivakumar/CANVA-AI",
	},
	{
		id: 8,
		title: "Database for Center for Comparative Archaeology",
		category: ["Backend & Cloud", "All"],
		date: "Oct 2023 – Dec 2023",
		shortDescription:
			"Flask-based platform for managing archaeological datasets.",
		description: `
		<p>A full-stack web platform developed for the Center for Comparative Archaeology using Flask and MySQL. The system offers secure access, data contribution workflows, and moderator tools.</p>
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Guest access to browse and download datasets (CSV/Excel)</li>
			<li>Registered users can submit new projects and upload to existing datasets</li>
			<li>Moderator dashboard to approve new project and contribution requests</li>
			<li>Secure user authentication and session handling using Flask-Login</li>
			<li>MySQL backend with SQLAlchemy ORM for robust data management</li>
			<li>Responsive design using HTML/CSS and modular Flask templates</li>
		</ul>
	`,
		tags: [
			"Python",
			"Flask",
			"MySQL",
			"SQLAlchemy",
			"HTML",
			"CSS",
			"User Authentication",
			"Moderation Dashboard",
		],
		image: Archaeology,
		github:
			"https://github.com/AnushaShivakumar/Archaeology-Dataset-Management-System",
	},

	{
		id: 9,
		title: "Syncing to the Beat – Spotify Global Music Trends",
		category: ["ML & Data", "All"],
		date: "Nov 2024 – Dec 2024",
		shortDescription: "Advanced data visualizations on Spotify trends.",
		description: `
		<p>Analyzed Spotify’s global music dataset to uncover insights on genre diversity, record label influence, and language distribution. Presented findings through visually compelling, interactive plots built using Python visualization libraries.</p>
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Explored correlations between genres, languages, and popularity over time</li>
			<li>Utilized treemaps, chord diagrams, heatmaps, and pairplots for in-depth trend analysis</li>
			<li>Studied streaming patterns, record label dominance, and song characteristics</li>
			<li>Notebook includes annotated code and embedded plots for presentation-ready storytelling</li>
			<li>Final report provides a comprehensive summary of methods and takeaways</li>
		</ul>
	`,
		tags: [
			"Plotly",
			"Matplotlib",
			"Seaborn",
			"Pandas",
			"Spotify",
			"Data Visualization",
		],
		image: DataVisual,
		github: "https://github.com/AnushaShivakumar/Spotify_Data_Visualization",
	},

	{
		id: 10,
		title: "Project Expo Manager & Website Manager",
		category: ["Web & App Dev", "All"],
		date: "Dec 2024 – Present",
		shortDescription:
			"Designed and managed the official SheInnovates 2025 Hackathon website and expo showcase.",
		description: `
		<p>The SheInnovates 2025 Hackathon, hosted by the University of Pittsburgh, celebrated women in innovation through tech, design, and entrepreneurship. As both the website lead and expo manager, I handled full-stack development of the official event website and coordinated the project showcase experience.</p>
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Designed and developed responsive web pages including Home, Sponsors, Tracks, Contact, and FAQs</li>
			<li>Built and maintained modular CSS and JavaScript files for a clean, scalable frontend</li>
			<li>Collaborated with a team of designers and developers to ensure branding consistency</li>
			<li>Deployed and tested the site locally with version control and GitHub collaboration</li>
		</ul>
	`,
		tags: ["HTML", "CSS", "JavaScript", "SFTP", "GitHub", "GlobalProtect VPN"],
		image: Expo,
		github: "https://github.com/AnushaShivakumar/SheInnovates-Website",
	},
	{
		id: 11,
		title: "PAWS – Strategic Course Evaluation System",
		category: ["Industry & Innovation", "All"],
		date: "Jan 2025 – Present",
		shortDescription: "Survey analytics for student decision-making.",
		description: `
		Developed a strategic course evaluation system (PAWS) at the University of Pittsburgh to enhance student decision-making through data-driven insights.
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li><strong>Analyzed business processes</strong> and conducted <strong>survey-driven research</strong> to inform system design and feedback mechanisms.</li>
			<li><strong>Elicited and defined business requirements</strong> through stakeholder interviews, surveys, workflow analysis, and use case modeling—resulting in a <strong>14% improvement in course selection effectiveness</strong>.</li>
			<li>Utilized <strong>Agile methodologies</strong> to iterate on requirements, ensure <strong>data integrity</strong>, and continuously optimize system performance in collaboration with academic stakeholders.</li>
		</ul>
	`,
		tags: [
			"Agile",
			"Business Analysis",
			"Workflow Analysis",
			"Survey Design",
			"Data Integrity",
		],
		image: PAWS,
		github: "",
	},

	{
		id: 12,
		title: "Virtual Reality Rehabilitation for Cerebral Palsy Patients",
		category: ["Industry & Innovation", "All"],
		date: "Dec 2021 – Jul 2022",
		shortDescription: "Unity-based VR rehab with sensors.",
		description: `
		Designed a VR-based rehabilitation game using Unity for children with cerebral palsy, integrating real-time motion input through inertial sensors.
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Used the <strong>BN0055 sensor</strong> to detect limb motion and track physical therapy progress.</li>
			<li>Developed therapeutic modules that adapt in difficulty based on the patient's motor response.</li>
			<li>Supported pediatric physical therapy by gamifying repetitive movements for higher engagement.</li>
		</ul>
	`,
		tags: ["Unity", "C#", "Sensor Data", "Rehabilitation", "Assistive Tech"],
		image: VR,
		github:
			"https://github.com/AnushaShivakumar/Cerebral-Palsy-VR-Therapy-A-Gaming-Approach",
	},
	{
		id: 13,
		title: "Sign Language Conversation App",
		category: ["Web & App Dev", "Industry & Innovation", "All"],
		date: "Nov 2021 – Feb 2022",
		shortDescription: "Speech-to-sign Android app.",
		description: `
		Developed an Android mobile application to translate real-time spoken English into animated sign language using avatars.
		<ul style="text-align: left; padding-left: 1.5rem;">
			<li>Integrated <strong>speech recognition</strong> for voice input and mapped words to sign equivalents.</li>
			<li>Used custom-built animated avatars to display sign language sequences.</li>
			<li>Aimed at enhancing communication accessibility for the hearing-impaired in live conversations.</li>
		</ul>
	`,
		tags: ["Java", "Android Studio", "Speech Recognition", "Accessibility"],
		image: ASL,
		github: "",
	},

	{
		id: 14,
		title: "mHealth – Secure Mobile Healthcare Application",
		category: ["Web & App Dev", "All"],
		date: "Nov 2024",
		shortDescription:
			"Java-based Android app for secure patient data using Android Studio, Firebase and Google KMS.",
		description: `
  <p style="text-align: left; font-weight: 500; margin-bottom: 0.5rem;">
    A secure Android application developed using Java to manage and store patient healthcare data. The app focuses on security, responsiveness, and scalability.
  </p>
  <ul style="text-align: left; padding-left: 1.5rem; margin-top: 0.5rem;">
    <li>Secure authentication with Firebase (registration, login, password reset)</li>
    <li>Organized data management using Firebase Realtime Database</li>
    <li>Encryption of sensitive data using Google Cloud KMS</li>
    <li>Optimized for mobile with a responsive user interface</li>
    <li>Scalable foundation for future ML integration and location-aware access</li>
  </ul>


  `,
		tags: ["Java", "Firebase", "Android Studio"],
		image: mHealth,
		github:
			"https://github.com/AnushaShivakumar/mHealth---Secure-Mobile-Healthcare-Application",
	},

	{
		id: 15,
		title: "Improvisation of the Nature-Inspired Meta-Heuristic Algorithm",
		category: ["Research & Publications", "ML & Data", "All"],
		date: "Mar 2021 – Jul 2021",
		shortDescription:
			"Published paper on improved HGS with Levy and Cauchy flights.",
		description:
			"Published a peer-reviewed research paper introducing improvements to the Hunger Games Search (HGS) algorithm for optimization and clustering tasks. Integrated Lévy and Cauchy flight mechanisms to enhance exploration and prevent premature convergence. Evaluated the algorithm using 28 benchmark functions from the IEEE CEC 2014 suite and validated its performance on 24 real-world clustering datasets, demonstrating superior performance against traditional HGS and K-Means clustering techniques.",
		tags: [
			"HGS Algorithm",
			"Lévy Flight",
			"Cauchy Flight",
			"Clustering",
			"Optimization",
			"Benchmark Functions",
			"K-Means",
		],
		image: MLAlgo,
		github: "https://www.webology.org/abstract.php?id=1468",
	},
];

export const projectsNav = [
	{ name: "Web & App Dev" },
	{ name: "ML & Data" },
	{ name: "Industry & Innovation" },
	{ name: "Research & Publications" },
	{ name: "Backend & Cloud" },
];
