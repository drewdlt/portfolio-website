import { techStack } from "./TechStack"

export function Stack() {
    return (
        <div>
            <p className="mb-2 font-semibold">Frameworks & Libraries:</p>
            <div className="columns-2">
                {
                    techStack.map(item => {
                        return (
                            <div key={item.id} className='flex gap-1 mb-2'>
                                <p className=''>{item.name}</p>
                                {item.htmlTag}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}