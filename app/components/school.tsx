interface elements {
    name: string;
    type: string;
    where: string;
    when: string;
    text: string;
}
  
export function School({ name, type, where, when, text }: elements) {
    return (
        <div className='school_name'>
            <div>
                <h3>{name}</h3> - ({when})
            </div>

            <div className='type_role'>{type} - <div className='school_where'>{where}</div></div>

            <p>{text}</p>
        </div> 
    );
}