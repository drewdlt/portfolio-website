import './About.css';
import { InfoTable } from '../../components/InfoTable';
import { AboutMe } from './AboutMe';
import { Certifications } from './Certifications';
import { Education } from './Education';
import { techLanguages } from '../../data/TechLanguages';
import { techStack } from '../../data/TechStack';

export function About() {
	return (
		<div>
			<title>About Me</title>

			{/* About Me section */}
			<AboutMe />

			<div className='pb-13 flex flex-col bg-(--light-color) md:px-12 md:flex-row md:justify-around md:pb-17'>
				{/* Languages section */}
				<InfoTable title={'Languages'} languageArray={techLanguages} />

				{/* Frameworks & Libraries section */}
				<InfoTable title={'Frameworks & Libraries'} languageArray={techStack} />
			</div>

			{/* Education section */}
			<Education />

			{/* Certifications section */}
			<Certifications />
		</div>
	);
}
