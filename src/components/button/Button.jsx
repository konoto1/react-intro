import style from './Button.module.css';

export function Button (par) {
    
    return <a className={style.btn} href={par.url}>{par.text}</a>
}