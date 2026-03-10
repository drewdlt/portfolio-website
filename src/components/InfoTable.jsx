export function InfoTable({ title, languageArray }) {
	return (
		<div className='table-container mx-3'>
			<p className='info-container-header font-semibold py-3 pl-3'>{title}</p>
			<div className='px-3 pt-4 mb-2 columns-2'>
				{languageArray.map((item) => {
					return (
						<div key={item.id} className='flex gap-1 mb-2'>
							<p className=''>{item.name}</p>
							{/* SVG image */}
							{item.htmlTag}
						</div>
					);
				})}
			</div>
		</div>
	);
}
