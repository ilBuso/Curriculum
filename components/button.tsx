import style from './components.module.css'

interface elements {
    link?: string;
    target?: string;
    className?: string;
    children?: React.ReactNode;
}

export function Button({link, target, className, children}: elements)  {
    return (
        <a href={link} target={target} className={`${style.button_item} ${className}`}>
            {children}
        </a>
    )
}