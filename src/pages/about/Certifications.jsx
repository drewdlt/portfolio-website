import certifications from '../../data/certifications.json';

export function Certifications() {
	return (
		<div className='section-container bg-(--light-color)'>
			<h1 className='section-header font-black text-(--primary-color)'>Certifications</h1>
			<div className=''>
				{certifications.map((cert, index) => {
					return (
						<div key={cert.id} className='certification-item mb-5 text-(--dark-color)'>
							<p className='font-semibold md:text-xl'>{cert.name}</p>
							<p className=' text-sm italic text-(--dark-color)/80 mt-1 mb-2 md:text-base md:mt-2 md:mb-4'>
								Exp. {cert.expirationDate}
							</p>
							<p className='md:w-1/2'>{cert.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
