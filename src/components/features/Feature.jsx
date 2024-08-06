import style from './Features.module.css';

export function Feature (par) {
    return (
        <div className={style.feature}>
          <div className={style.icon}>{par.icon}</div>
          <h2 className={style.title}>{par.title}</h2>
          <p className={style.description}>{par.description}</p>
        </div>
    );
}