interface elements {
    skill: string;
}
  
export function Skill({ skill }: elements) {
    return (
        <div>
            {skill}
        </div> 
    );
}