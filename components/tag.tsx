import style from './components.module.css'

interface elements {
    tag: string;
}
  
export function Tag({ tag }: elements) {
    return (
        <div className={style.tag_item}>
            {tag}
        </div> 
    );
}