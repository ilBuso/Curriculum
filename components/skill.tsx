import style from './components.module.css'

interface elements {
    skill: string;
}
  
export function Skill({ skill }: elements) {
    return (
        <div className={style.skill_item}>
            {skill}
        </div> 
    );
}