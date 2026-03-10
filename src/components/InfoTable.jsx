export function InfoTable({ title, languageArray }) {
	return (
		<div className='table-container px-5'>
			<p className='section-header text-3xl font-bold mb-4 underline underline-offset-4 decoration-2'>{title}</p>
			<div className='columns-2'>
				{languageArray.map((item) => {
					return (
						<div key={item.id} className='flex gap-1 mb-3'>
							<p className='font-semibold'>{item.name}</p>
							{/* SVG image */}
							{item.htmlTag}
						</div>
					);
				})}
			</div>
		</div>
	);
}
