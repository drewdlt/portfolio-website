import { NavLink } from "react-router";

export function Sidebar({ showSidebar, setShowSidebar }) {
	return (
		<div
			className='sidebar-menu gap-4 pt-4 pl-3 md:pt-7 md:pl-5'
			hidden={showSidebar ? false : true}
		>
			<NavLink
				to='/'
				className='sidebar-link'
				onClick={() => setShowSidebar(false)}
			>
				Home
			</NavLink>
			<NavLink
				to='/about'
				className='sidebar-link'
				onClick={() => setShowSidebar(false)}
			>
				About
			</NavLink>
		</div>
	);
}
