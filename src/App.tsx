import React from 'react';
import './App.css';
import planet from './planet.png';

function App() {
    const [data, setData] = React.useState<any>(null);

    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
      fetch("/data")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

  return (
    <div className="App">
    
    
      <svg width="0" height="0" viewBox="0 0 320 322" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <clipPath id="mask" style={{position: 'absolute', right: 0}}>
            <rect width="320" height="322" rx="160" fill="#E75626" style={{position: 'absolute', right: 0}}/>
          </clipPath>
      </svg>


  {/* <div className="parent" style={{top: 0, width: '100%'}}> */}
  {/* <div className="parent in-row main-block" style={{flexDirection: 'row-reverse'}}> */}
  {/* <div className="parent in-row main-block" style={{}}> */}
  <div className=" main-block" style={{
        width: '100vw',
        height: '100vh',
        padding: '14px 5% 60px 5%'
  }}>


<header className='in-row'>
      <div className="in-row half-width content-left">
        <div className="logo alignment-center">
          <p className='secondary-color'>
            Logo
           
          </p>
        </div>
      </div>
      <div className="in-row half-width content-right">
        {
          loggedIn ? <span className='primary-color'>0x279D9f0c10fBB3D44...</span> : <button className="wallet primary-bg slim-width secondary-color">
             Connect metamask
          </button>
        }
      </div>
      </header>
    
    
    
    
    <div className='from-bottom' style={{height: '100%'}}>
    <div className="in-row from-bottom" style={{
          marginBottom: '60px'
    }}>
      <div className="progress orange nmcds parent"  style={{}}>
                  {/* <span className="progress-left">
                      <span className="progress-bar ndj"></span>
                  </span>
                  <span className="progress-right">
                      <span className="progress-bar jjj"></span>
                  </span> */}
      
      
      {/*  */}
      <div className="flow">
        <div className="title parent" style={{zIndex: 102, pointerEvents: 'none'}}>
            <p>
              Explore Your own planet
            </p>
            <p>
              In <span className="stroke-text">our New</span> metaverse
            </p>
        </div>
      </div>
      {/*  */}
      <div
      style={{position: 'relative', top: 0, left: 0, }}
      
      
      >
        
        <div className="parent" id="cmksalcnksd" style={{
          marginBottom: '45px',
        }} >
      <div className="title parent dsnc observer" style={{clipPath: 'circle(160px at 63% 40%)', zIndex: 110, pointerEvents: 'none'}}
      >
        <p>
          Explore Your own planet
        </p>
        <p>
          In <span className="ld">our New</span> metaverse
        </p>
      </div>
      {/* HERE */}
      
        
      {/* <div className="fifth-level circle flow" style={{padding: "50px",top: '63%', left: '40%', transform: 'translateX(-50%) translateY(-50%)', cursor: 'pointer' */}
      <div className="fifth-level circle flow" style={{top: '40%', left: '63%', transform: 'translateX(-50%) translateY(-50%)', cursor: 'pointer'
      
      ,zIndex: 1, 
      
      }}
      
      onMouseMove={(e)=> {
      // onClick={(e)=> {
        console.log(e.clientX, e.clientY)
        
        // console.log(e., e.)
        const x = e.clientX;
        const y = e.clientY;
        const el = document.querySelector('.title.parent.dsnc') as HTMLElement;
        const planetImage = document.querySelector('#kdjacn') as HTMLElement;
      
        var rect = (document.querySelector("#cmksalcnksd")as HTMLElement).getBoundingClientRect();
        console.log(document.querySelector("#cmksalcnksd")as HTMLElement)
        console.log(rect)
        var x_r = e.clientX - rect.left; //x position within the element.
        var y_r = e.clientY - rect.top;  //y position within the element.
      
      
        if(el){
      el.style.clipPath = `circle(160px at ${x_r}px ${y_r}px)`
          planetImage.style.top = `${y_r}px`
      planetImage.style.left = `${x_r}px`
        }
      }}
      
      onMouseLeave={(e)=> {
        console.log(e.clientX, e.clientY)
        // console.log(e., e.)
        const x = e.clientX;
        const y = e.clientY;
        const el = document.querySelector('.title.parent.dsnc') as HTMLElement;
        const planetImage = document.querySelector('#kdjacn') as HTMLElement;
        
        
        if(el){
      // el.style.clipPath = `circle(160px at 60% 60%)`
      el.style.clipPath = `circle(160px at 63% 40%)`
      planetImage.style.transform = `translateX(-50%) translateY(-50%)`
      // planetImage.style.transform = `translateX(50%) translateY(0%)`
      planetImage.style.top = `40%`
      planetImage.style.left = `63%`
        }
      }}
      
      
      
      >
      
      
        {/* 4rd */}
        <div className="circle__" style={{pointerEvents: 'none'}}>
          <div className="circle__item">
            <div className="circle__half circle__half--clipped"></div>
          </div>
          <div className="circle__half circle__half--fix">
          </div>
      
      
        {/* 3rd */}
        <div className="fourth-level circle slim-width">
          <div className="third-level circle slim-width">
            <div className="second-level circle slim-width" style={{ }}>
              <div className="first-level circle slim-width">
      
                    <div className='parent' style={{ zIndex: 100,  backgroundColor: "", backgroundImage: 'url('+planet+')',  width: '320px', height: '322px',
                    clipPath: 'url(#mask)',
                    opacity: 0
                  }} ></div>
      
      <div className="quarter">
      {/* <div className=''> */}
        {/* <div className='alignment-center'> */}
      <p>Q1 2022</p>
      {/* <div className="circle parent-point alignment-center">
        <div className="circle point-1">
        </div>
      </div> */}
        {/* </div> */}
      {/* </div> */}
      </div>
                  <span className="point point-1">
                    <span className="sub-circle"></span>
                  </span>
                  <span className="point point-2"></span>
                  <span className="point point-3"></span>
                  <span className="point point-4"></span>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd */}
        </div>
      
      
                      {/* </div> */}
                    {/* 4rd */}
          </div>
      
          <div className="from-bottom flow" style={{    top: 0,
      right: 0}}>
                      <ul className='roadmap'>
                        <caption className='roadmap__caption secondary-color'>Roadmap stats</caption>
                        <li className='roadmap__point'>
                          <div className="roadmap__point-title primary-color">12, 345</div>
                          <div className="roadmap__point-subtitle secondary-color">Lorem inpsum</div>
                        </li>
                        <li className='roadmap__point'>
                          <div className="roadmap__point-title primary-color">12, 345</div>
                          <div className="roadmap__point-subtitle secondary-color">Lorem inpsum</div>
                        </li>
                        <li className='roadmap__point'>
                          <div className="roadmap__point-title primary-color">12, 345</div>
                          <div className="roadmap__point-subtitle secondary-color">Lorem inpsum</div>
                        </li>
                      </ul>
                    </div>
        <img id="kdjacn" className='flow observer' src={planet} alt="" style={{top: '40%', left: '63%', transform: 'translateX(-50%) translateY(-50%)',
        // zIndex: -1,
        zIndex: 10,
        pointerEvents:'none'
        }}  />
      {/* HERE */}
        
        </div>
      

        <p className='subtitle'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      
      
      
      </div>
      
        </div>
    </div>
    </div>


</div>




<div className="in-row info">

    <div className='press user'>
    <p className='user__title primary-color'>Beta test registration</p>

          
      <p className='user__subtitle subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>

      <div className="user__form">
        <div className="user__field">
          <p className='secondary-color user__label'>Name</p>
          {
            loggedIn ?  <p className='primary-color user__form-value'>Rojer waters</p> : <input className='user__form-input primary-color' type="text" placeholder='We will display your name in participation list' />
          }
          
        </div>
        <div className="user__field">
          <p className='secondary-color user__label'>Email</p>
          {
            loggedIn ?  <p className='primary-color user__form-value'>Charadeyouare@gmail.com</p> : <input className='user__form-input primary-color' type="text" placeholder='We will display your email in participation list' />
          }
        </div>
        <button className="user__form-button primary-bg secondary-color">
          { loggedIn ? 'List me to the table' : 'Connect metamask'}
        </button>
      </div>


    </div>
{
  loggedIn ? 
  <div className="slim">
    <p className="caption">
      Participation listing (enable only for participants)
    </p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th className='slice' style={{width: '200px'}}>Wallet</th>
        </tr>
      </thead>
      <tbody>
        {data?.items.map((item: any, index: any) => (
          <tr key={index}>
            <td>{item.username}</td>
            <td>{item.email}</td>
            {/* <td><span className="slice">{item.address}</span></td> */}
            <td>{item.address.slice(0, 20)}...</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> : <></>
}
</div>



    </div>
  );  
}

export default App;
