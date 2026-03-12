import { NavLink } from 'react-router';

export function HeaderLinks() {
	return (
		<div className='hidden md:flex items-center justify-between gap-8 text-2xl font-semibold'>
			<NavLink
				to='/'
				className={({ isActive }) =>
					`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-(--light-color) after:origin-center after:scale-x-0 after:transition-transform after:duration-250 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
				}
			>
				Home
			</NavLink>

			<NavLink
				to='/about'
				className={({ isActive }) =>
					`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-(--light-color) after:origin-center after:scale-x-0 after:transition-transform after:duration-250 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
				}
			>
				About
			</NavLink>

			<NavLink
				to='projects'
				className={({ isActive }) =>
					`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-(--light-color) after:origin-center after:scale-x-0 after:transition-transform after:duration-250 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
				}
			>
				Projects
			</NavLink>
		</div>
	);
}
