 import logo from '/vite.svg';

 export function Hero () { 
  const imgStyle = {
    height: '15rem',
  }
  
    return ( 
    <>
     <section>
        <div>
          <h1>Vite Next Generation Fronted Tooling</h1>
          <p>Get ready for development environment that can finally catch up with you.</p>
          <div>
            <a href="#">Get started</a>
            <a href="#">Why Vite?</a>
            <a href="#">View on Github</a>
            <a href="#">⚡ ViteConf 24!</a>
          </div>
        </div>
        <img src={logo} style={imgStyle} alt="Vite Image" />
      </section>
    </> 
    );
 }