import { techLanguages } from './TechLanguages.jsx';

export function Languages() {
	return (
		<div className='border-b-black border-b-2 pb-3 mb-3'>
			<p className='mb-2 font-semibold'>Languages:</p>
			<div className='columns-2'>
				{techLanguages.map((item) => {
					return (
						<div key={item.id} className='flex gap-1 mb-2'>
							<p className=''>{item.name}</p>
							{item.htmlTag}
						</div>
					);
				})}
			</div>
		</div>
	);
}
