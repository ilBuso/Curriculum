import style from './components.module.css'

interface elements {
    name: string;
    type: string;
    where: string;
    when: string;
    text: string;
}
  
export function School({ name, type, where, when, text }: elements) {
    return (
        <div className={style.school_item}>
            <div className={style.school_name}>
                <h3>{name}</h3> - ({when})
            </div>

            <div className={style.school_where}>
                <div className={style.shool_type}>{type}</div> - {where}
            </div>

            <p>{text}</p>
        </div> 
    );
} 