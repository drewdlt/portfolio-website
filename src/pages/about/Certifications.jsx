import certifications from '../../data/certifications.json';

export function Certifications() {
	return (
		<div className='info-container my-4 mx-3'>
			<h1 className='info-container-header font-semibold py-3 pl-3'>Certifications</h1>
			<div className='px-3 py-3'>
				{certifications.map((cert) => {
					return (
						<div key={cert.id} className='mb-3'>
							<p className='font-semibold'>
								{cert.name}
							</p >
							<p className='text-sm italic text-black/50 mt-0.5 mb-2'>
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
