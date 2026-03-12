import './Header.css';
import { Link } from 'react-router';
import { HeaderLinks } from './HeaderLinks';

export function Header({ showSidebar, setShowSidebar }) {
	return (
		<div className='flex justify-between items-center bg-(--primary-color) text-(--light-color) h-12 fixed w-full px-3 md:h-16 md:px-20'>
			<Link to={'/'}>
				<p className='text-xl font-bold md:text-2xl'>MyPortfolio</p>
			</Link>

			<HeaderLinks />

			{/* Only show on mobile devices */}
			<button
				className='hover:cursor-pointer md:hidden'
				onClick={() => setShowSidebar(!showSidebar)}
			>
				<img src={showSidebar ? '/close.svg' : '/menu.svg'} className='w-10' />
			</button>
		</div>
	);
}
