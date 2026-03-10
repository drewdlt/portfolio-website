import './About.css';
import { AboutMe } from './AboutMe';
import { Certifications } from './Certifications';
import { Education } from './Education';

export function About() {
	return (
		<div>
			{/* About Me section */}
			<AboutMe />

			{/* Education section */}
			<Education />

			{/* Certifications section */}
			<Certifications />
		</div>
	);
}
