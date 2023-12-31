interface elements {
    name: string;
    type: string;
    where: string;
    when: string;
    text: string;
}
  
export function School({ name, type, where, when, text }: elements) {
    return (
        <p>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                {type} ({when})
            </div>
            <div>
                {where}
            </div>
            <div>
                {text}
            </div>
        </p> 
    );
}