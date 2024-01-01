interface elements {
    tag: string;
}
  
export function Tag({ tag }: elements) {
    return (
        <div className='tag_item'>
            {tag}
        </div> 
    );
}