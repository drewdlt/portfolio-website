export function ProjectInfo({ project }) {
	return (
		<div className='text-(--dark-color)'>
			<p className='text-xl font-bold mb-0.5'>{project.title}</p>
			<p className='font-semibold mb-2 italic'>{project.type}</p>
			<p className='mb-2'>{project.description}</p>
			<div className="flex justify-evenly flex-wrap">
				{project.stack.map(item => {
					return <span className="w-1/3 text-center mb-1">{item}</span>
				})}
			</div>
		</div>
	);
}
