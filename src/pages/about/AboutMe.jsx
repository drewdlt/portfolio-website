import { Socials } from './Socials';

export function AboutMe() {
	return (
		<div className='section-container bg-zinc-500 text-white'>
			<h1 className='section-header font-extrabold'>About Me</h1>
			<div className=''>
				<p className='mb-4'>
					I'm a developer who enjoys building{' '}
					<span className='font-black'>full-stack web applications</span> that
					combine clean functionality with intuitive user experiences. I work
					with both{' '}
					<span className='font-black'>frontend and backend technologies</span>{' '}
					to create responsive interfaces, structured APIs, and maintainable
					codebases.
				</p>

				<p className='mb-4'>
					I focus on writing clean, maintainable code and continuously improving
					my skills as I explore new technologies and development practices.
				</p>

				<Socials />
			</div>
		</div>
	);
}
