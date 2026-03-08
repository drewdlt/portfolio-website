export function AboutMe() {
    return (
        <>
            <div className=" bg-gray-400 my-4 mx-3 p-4">
                <h1 className="text-3xl font-semibold">About Me</h1>
                <p className="my-3">
                    I'm a developer who enjoys building full-stack web applications that combine clean functionality with intuitive user experiences. 
                    I work with both frontend and backend technologies to create responsive interfaces, structured APIs, and maintainable codebases.
                </p>
                <p>I focus on writing clean, maintainable code and continuously improving my skills as I explore new technologies and development practices.</p>
            </div>
            <div className="bg-gray-400 my-4 mx-3 p-4">
                <h1 className="text-3xl font-semibold">Education</h1>
                <div className="flex flex-col">
                    <p className="font-semibold">B.S. Software Engineering</p>
                    <p className="">Western Governors University |<span className="text-black/50 italic"> Expected September 2026</span></p>
                </div>
            </div>
        </>
    );
}