export function InfoTable({ title, languageArray }) {
	return (
		<div className='table-container px-5 md:text-center md:px-0 md:w-1/4'>
			<p className='section-header text-3xl font-bold md:text-4xl'>{title}</p>
			<div className='columns-2 border-t-2 pt-4'>
				{languageArray.map((item) => {
					return (
						<div key={item.id} className='flex gap-1 mb-3'>
							<p className='font-semibold md:text-lg'>{item.name}</p>
							{/* SVG image */}
							{item.htmlTag}
						</div>
					);
				})}
			</div>
		</div>
	);
}
