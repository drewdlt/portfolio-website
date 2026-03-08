import courses from './courses.json';

export function Education() {
	return (
		<div className='bg-gray-400 my-4 mx-3 p-4'>
			<h1 className='text-3xl font-semibold border-b-2 pb-3 mb-3'>Education</h1>
			<div className='flex flex-col'>
				<p className='font-bold text-lg'>B.S. Software Engineering</p>
				<p className='font-semibold'>
					Western Governors University |
					<span className='text-black/50 italic font-normal'>
						{' '}
						Expected Sept. 2026
					</span>
				</p>
			</div>
			<p className='my-1'>Relevent Course Work:</p>
			<div className='columns-2'>
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
