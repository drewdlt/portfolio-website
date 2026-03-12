import { Socials } from '../../components/Socials';
import './Home.css';

export function Home() {
	return (
		<>
			<title>Home</title>

			<div className='bg-(--light-color) text-(--dark-color) w-full overflow-x-hidden flex flex-col gap-10 min-h-[calc(100vh-2.5rem)] justify-center md:flex-row md:items-center md:justify-center md:gap-3 md:py-0'>
				<div className='profile-image-container border w-full md:w-1/3 md:h-full'>
					<div className='profile-image w-full h-full'></div>
				</div>
				<div className='flex flex-col mx-5 items-center md:w-1/2 md:mx-0'>
					<h1 className='relative text-center w-fit text-2xl mb-1.5 font-bold md:text-4xl'>
						<div className='absolute -left-3 -top-6 bg-(--primary-color) text-(--light-color) py-0.5 px-1 text-sm -rotate-12 md:text-base'>
							Hi
						</div>
						I'm Andrew De La Torre
					</h1>
					<h3 className='font-semibold text-lg md:text-xl'>Full-Stack Developer</h3>
					<p className='my-4 text-lg md:w-1/2 md:text-xl'>
						Experience building front-end and back-end applications with an
						interest in creating clean and user-friendly interfaces.
					</p>
					<p className='italic mb-2'>HTML • CSS • JavaScript • Java</p>
					<p className='italic mb-5'>React • Spring Boot • TailwindCSS</p>

					<Socials />

				</div>
			</div>
		</>
	);
}
