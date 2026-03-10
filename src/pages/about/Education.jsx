import courses from '../../data/courses.json';

export function Education() {
	return (
		<div className='info-container my-4 mx-3'>
			<h1 className='info-container-header font-semibold py-3 pl-3'>Education</h1>
			<div className='flex flex-col pt-3 px-3'>
				<p className='font-bold text-lg'>B.S. Software Engineering</p>
				<p className='font-semibold'>
					Western Governors University |
					<span className='text-black/50 italic font-normal'>
						{' '}
						Expected Sept. 2026
					</span>
				</p>
			</div>
			<p className='my-1 px-3'>Relevent Course Work:</p>
			<div className='columns-2 px-3 mb-2'>
				{courses.map((course, idx) => {
					return (
						<p key={idx} className='py-1'>
							{course}
						</p>
					);
				})}
			</div>
		</div>
	);
}
