import courses from '../../data/courses.json';

export function Education() {
	return (
		<div className='section-container bg-(--primary-color) text-(--light-color)'>
			<h1 className='section-header font-extrabold text-4xl'>Education</h1>
			<div className='md:flex md:justify-between'>
				<div className='md:flex md:flex-col md:justify-center'>
					<p className='text-xl font-bold md:text-2xl'>
						B.S. Software Engineering
					</p>
					<p className='font-semibold mt-1 mb-5 md:text-lg'>
						Western Governors University |
						<span className='font-thin italic text-(--light-color)/70'>
							{' '}
							Expected Sept. 2026
						</span>
					</p>
				</div>
				<div className=''>
					<p className='font-semibold underline underline-offset-4 mb-4 md:text-lg'>
						Relevent Course Work
					</p>
					<div className='columns-2 md:columns-3'>
						{courses.map((course, idx) => {
							return (
								<p
									key={idx}
									className='mb-3 pl-1 pr-2 bg-(--light-color) text-(--dark-color) rounded-r-full min-h-12 overflow-hidden flex items-center md:mb-5 md:pl-2 md:pr-3'
								>
									{course}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
