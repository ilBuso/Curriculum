import style from './components.module.css'

interface elements {
    where: string;
    when: string;
    role: string;
    text: string;
}
  
export function Work({ where, when, role, text }: elements) {
    return (
        <div className={style.work_item}>
            <div className={style.work_name}>
                <h3>{where}</h3> - ({when})
            </div>
                
            <div className={style.work_role}>{role}</div>
            <p>{text}</p>
        </div> 
    );
}