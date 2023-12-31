import { Skill } from "./skill";

interface elements {
    title: string;
    description: string;
    tag: string[];
    link: string;
}
  
export function Project({ title, description, link, tag }: elements) {
    return (
        <div>
            <div>
                <a href={link}
                target='_blank'>
                    <h3>{title}</h3>
                </a>
            </div>
            <div>
                {description}
            </div>
            <div>
                {tag.map((tag) => {
                    return (
                        <Skill key={tag}
                            skill={tag}
                        />
                    )
                })}
            </div>
        </div> 
    );
}