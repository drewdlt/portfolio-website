import certifications from '../../data/certifications.json';

export function Certifications() {
	return (
		<div className='bg-gray-400 my-4 mx-3 p-4'>
			<h1 className='text-3xl font-semibold'>Certifications</h1>
			{certifications.map((cert) => {
				return (
					<div key={cert.id} className='mt-3 border-t-2 pt-3'>
						<p className='font-semibold'>
							{cert.name} |{' '}
							<span className='font-normal italic text-black/50'>
								Exp. {cert.expirationDate}
							</span>
						</p>
						<p>{cert.description}</p>
					</div>
				);
			})}
		</div>
	);
}
