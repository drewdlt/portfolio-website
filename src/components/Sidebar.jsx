import { NavLink } from "react-router";

export function Sidebar({ showSidebar, setShowSidebar }) {

	const closeSidebar = () => {
		setShowSidebar(false)
	}

	return (
		<div
			className='sidebar-menu gap-4 pt-4 pl-3 md:pt-7 md:pl-5'
			hidden={showSidebar ? false : true}
		>
			<NavLink
				to='/'
				className='sidebar-link'
				onClick={closeSidebar}
			>
				Home
			</NavLink>
			<NavLink
				to='/about'
				className='sidebar-link'
				onClick={closeSidebar}
			>
				About
			</NavLink>
			<NavLink
				to="/projects"
				className="sidebar-link"
				onClick={closeSidebar}	
			>
				Projects
			</NavLink>
		</div>
	);
}
