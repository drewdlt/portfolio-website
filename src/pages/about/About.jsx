import './About.css';
import { AboutMe } from './AboutMe';
import { Certifications } from './Certifications';
import { Education } from './Education';

export function About() {
	return (
		<div>
			<AboutMe />

			<Education />

			<Certifications />
		</div>
	);
}
