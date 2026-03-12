import './App.css';
import { Route, Routes } from 'react-router';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Header } from './components/Header';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Projects } from './pages/projects/Projects';

function App() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			{/* Header component */}
			<Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

			<div className='pt-12 md:pt-16'>
				{/* Sidebar menu */}
				<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

				<Routes>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='projects' element={<Projects />}/>
				</Routes>
			</div>

			<Footer />
		</>
	);
}

export default App;
