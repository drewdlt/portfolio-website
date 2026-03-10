import { NavLink } from "react-router";

export function Sidebar({ showSidebar, setShowSidebar }) {
	return (
		<div
			className='flex flex-col gap-4 pt-4 pl-3 sidebar-menu'
			hidden={showSidebar ? false : true}
		>
			<NavLink
				to='/'
				className='text-lg font-semibold text-white'
				onClick={() => setShowSidebar(false)}
			>
				Home
			</NavLink>
			<NavLink
				to='/about'
				className='text-lg font-semibold text-white'
				onClick={() => setShowSidebar(false)}
			>
				About
			</NavLink>
		</div>
	);
}
