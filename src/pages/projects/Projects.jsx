import './Projects.css';
import projects from '../../data/projects.json';
import { ProjectInfo } from './ProjectInfo';

export function Projects() {
	return (
		<div className='section-container bg-(--light-color) min-h-[calc(100vh-2.5rem)]'>
			<h1 className='section-header font-extrabold text-(--primary-color)'>
				Projects
			</h1>
			<div className='text-(--dark-color) flex flex-col gap-6'>
				{projects.map((project) => {
					return <ProjectInfo key={project.id} project={project} />;
				})}
			</div>
		</div>
	);
}
