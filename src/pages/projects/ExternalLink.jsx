export function ExternalLink({ index, link }) {
	return (
		<a
			className='flex gap-1 w-fit px-3 py-0.5 bg-(--primary-color) text-(--light-color) rounded-full'
			href={link}
			target='_blank'
		>
			{index === 0 ? 'Front-End' : 'Back-End'}
			<img src='./open-in-new.svg' className='w-4' />
		</a>
	);
}
