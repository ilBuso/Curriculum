interface elements {
    skill: string;
}
  
export function Skill({ skill }: elements) {
    return (
        <div className='skill_item'>
            {skill}
        </div> 
    );
}