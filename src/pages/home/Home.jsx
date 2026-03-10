import './Home.css';

export function Home() {
	return (
		<>
			<div className='items-center flex flex-col gap-8 my-3 mx-3'>
				<div className='profile-image-container'>
					<div className='profile-image'></div>
				</div>
				<div className='flex flex-col p-3'>
					<h1 className='text-2xl font-bold text-center mb-1 relative'>
						<div className='absolute text-white bg-blue-600 py-0.5 px-1 text-sm left-5 -top-5 -rotate-12'>
							Hi
						</div>
						I'm Andrew De La Torre
					</h1>
					<h3 className='text-xl font-semibold text-center'>
						Full-Stack Developer
					</h3>
					<p className='my-2.5'>
						Experience building front-end and back-end applications with an
						interest in creating clean and user-friendly interfaces.
					</p>
					<p className='text-center mb-1'>HTML • CSS • JavaScript • Java</p>
					<p className='text-center'>React • Spring Boot • TailwindCSS</p>
				</div>
			</div>
		</>
	);
}
