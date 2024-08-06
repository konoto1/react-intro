import { Button } from '../button/Button';
import style from './Hero.module.css';
 import logo from '/vite.svg';

 export function Hero () { 
  const imgStyle = {
    height: '24rem',
    innerWidth: '100%',
  }
  
    return ( 
    <>
     <section className={style.hero}>
        <div className={style.textContent}>
          <h1 className={style.title}>Vite Next Generation Fronted Tooling</h1>
          <p className={style.description}>Get ready for development environment that can finally catch up with you.</p>
          <div className={style.btnList}>
            <Button url="#" text="Get started" />
            <Button url="#" text="Why Vite?" />
            <Button url="#" text="View on Github" />
            <Button url="#" text="⚡ ViteConf 24!" />
          </div>
        </div>
        <img src={logo} style={imgStyle} alt="Vite Image" />
      </section>
    </> 
    );
 }