import { Languages } from "../../components/Languages";
import { Stack } from "../../components/Stack";

export function AboutMe() {
	return (
		<div className='bg-gray-400 my-4 mx-3 p-4'>
			<h1 className='text-3xl font-semibold border-b-2 pb-3'>About Me</h1>

			<p className='my-3'>
				I'm a developer who enjoys building full-stack web applications that
				combine clean functionality with intuitive user experiences. I work with
				both frontend and backend technologies to create responsive interfaces,
				structured APIs, and maintainable codebases.
			</p>

			<p className="pb-3 mb-3 border-b-2 border-black">
				I focus on writing clean, maintainable code and continuously improving
				my skills as I explore new technologies and development practices.
			</p>

            <Languages />
            
			<Stack />

		</div>
	);
}
