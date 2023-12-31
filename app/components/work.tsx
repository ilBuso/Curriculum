interface elements {
    where: string;
    when: string;
    role: string;
    text: string;
}
  
export function Work({ where, when, role, text }: elements) {
    return (
        <p>
            <div>
                <h3>{where}</h3>
            </div>
            <div>
                {role} ({when})
            </div>
            <div>
                {text}
            </div>
        </p> 
    );
}