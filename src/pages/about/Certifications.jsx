import certifications from '../../data/certifications.json';

export function Certifications() {
	return (
		<div className='section-container bg-gray-200'>
			<h1 className='section-header font-black'>Certifications</h1>
			<div className=''>
				{certifications.map((cert, index) => {
					return (
						<div key={cert.id} className='certification-item mb-5'>
							<p className='font-semibold'>{cert.name}</p>
							<p className=' text-sm italic text-black/60 mt-1 mb-2'>
								Exp. {cert.expirationDate}
							</p>
							<p>{cert.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
