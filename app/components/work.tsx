interface elements {
    where: string;
    when: string;
    role: string;
    text: string;
}
  
export function Work({ where, when, role, text }: elements) {
    return (
        <div>
            <div>
                <h3>{where}</h3> - ({when})
            </div>
                
            <div className='type_role'>{role}</div>
            <p>{text}</p>
        </div> 
    );
}