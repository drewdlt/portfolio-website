import { Socials } from '../../components/Socials';

export function AboutMe() {
	return (
		<div className='section-container bg-(--light-color)'>
			<div className='md:w-1/2'>
				<h1 className='section-header font-extrabold text-(--primary-color)'>About Me</h1>
				<div className='text-(--dark-color) md:text-lg'>
					<p className='mb-4 md:mb-6'>
						I'm a developer who enjoys building{' '}
						<span className='font-black'>full-stack web applications</span> that
						combine clean functionality with intuitive user experiences. I work
						with both{' '}
						<span className='font-black'>frontend and backend technologies</span>{' '}
						to create responsive interfaces, structured APIs, and maintainable
						codebases.
					</p>

					<p className='mb-4 md:mb-6'>
						I focus on writing clean, maintainable code and continuously improving
						my skills as I explore new technologies and development practices.
					</p>

					<Socials />
				</div>
			</div>
		</div>
	);
}
