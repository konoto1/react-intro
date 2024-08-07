import { Feature } from './Feature';
import style from './Features.module.css';

export function FeaturesMap(par) {
  const x = (item, index) => <Feature key={index} data={item}/>;
  return (
        <section className={style.featureList}>
        {par.list.map(x)}
      </section>
    );
}