import { ExternalLink } from './ExternalLink';

export function ProjectInfo({ project }) {
	return (
		<div className='project-container border-b pb-6 border-(--primary-color)'>
			<p className='text-xl font-bold mb-2'>{project.title}</p>
			<p className='font-bold'>{project.type}</p>
			<div className='flex flex-wrap italic font-semibold'>
				{project.stack.map((item) => {
					return <span className='mr-2 mb-0.5'>{item}</span>;
				})}
			</div>
			<p className='my-4'>{project.description}</p>
			<p className='mb-2 italic'>View on GitHub:</p>
			<div className='flex gap-3'>
				{project.links.map((link, idx) => {
					return <ExternalLink index={idx} link={link} />;
				})}
			</div>
		</div>
	);
}
