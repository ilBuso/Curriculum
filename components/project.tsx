import { Tag } from "./tag"

import style from './components.module.css'

interface elements {
    title: string;
    description: string;
    tag: string[];
    link: string;
}
  
export function Project({ title, description, link, tag }: elements) {
    return (
        <div className={style.prjct_item}>
            <div>
                <a href={link}
                target='_blank'>
                    <div className={style.prjct_title}>{title}</div>
                </a>
            </div>
            <p>
                {description}
            </p>
            <div className='tag_container'>
                {tag.map((tag) => {
                    return (
                        <Tag key={tag}
                            tag={tag}
                        />
                    )
                })}
            </div>
        </div> 
    );
}