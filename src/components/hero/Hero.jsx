 import './Hero.css';
 import logo from '/vite.svg';

 export function Hero () { 
  const imgStyle = {
    height: '24rem',
    innerWidth: '100%',
  }
  
    return ( 
    <>
     <section className='hero'>
        <div className='textContent'>
          <h1 className='title'>Vite Next Generation Fronted Tooling</h1>
          <p className='description'>Get ready for development environment that can finally catch up with you.</p>
          <div className='btnList'>
            <a className='btn' href="#">Get started</a>
            <a className='btn' href="#">Why Vite?</a>
            <a className='btn' href="#">View on Github</a>
            <a className='btn' href="#">⚡ ViteConf 24!</a>
          </div>
        </div>
        <img src={logo} style={imgStyle} alt="Vite Image" />
      </section>
    </> 
    );
 }