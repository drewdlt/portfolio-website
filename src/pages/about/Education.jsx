import courses from '../../data/courses.json';

export function Education() {
	return (
		<div className='section-container'>
			<h1 className='section-header font-extrabold text-4xl'>Education</h1>
			<div className=''>
				<p className='text-xl font-bold md:text-2xl'>B.S. Software Engineering</p>
				<p className='font-semibold mt-1 mb-5 md:text-lg'>
					Western Governors University |
					<span className='font-thin italic text-black/60'>
						{' '}
						Expected Sept. 2026
					</span>
				</p>
			</div>
			<p className='font-semibold underline underline-offset-4 mb-4 md:text-lg'>
				Relevent Course Work
			</p>
			<div className='columns-2 md:columns-4'>
				{courses.map((course, idx) => {
					return (
						<p
							key={idx}
							className='mb-3 border-l-2 pl-1 bg-white rounded min-h-12 overflow-hidden flex items-center md:mb-5 md:pl-4'
						>
							{course}
						</p>
					);
				})}
			</div>
		</div>
	);
}
