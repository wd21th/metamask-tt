import React, { FormEvent } from 'react';
import './App.css';
import planet from './planet.png';
import { ethers } from 'ethers';
import SimpleStorage_abi from './SimpleStorage_abi.json'
import {disableScroll} from './helper-functions'

import {
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import { Link } from 'react-router-dom';


interface User {
  id: number | null;
  username: string;
  email: string;
  address: string;
}

function MainPage() {
  const [data, setData] = React.useState<null | Array<any>>(null);
  const [listMe, setListMe] = React.useState<boolean>(false);
  const hasExtension = window.ethereum && window.ethereum.isMetaMask;
	const [address, setAddress] = React.useState<null | string>(null);
	const [user, setUser] = React.useState<null | User>(null);
  const accountChangedHandler = (newAccount: any) => {
    setAddress(newAccount);
  }
  
  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  }
  
  const connectWalletHandler = () => {
      window.ethereum.request({ method: 'eth_requestAccounts'})
      .then((result: any[]) => {
        accountChangedHandler(result[0]);
        localStorage.setItem('visited', '1');
      })
      .catch((error: { message: React.SetStateAction<null>; }) => {
        alert(error.message);
      });
  }

  const movePlanet = (e: any)=> {
    e.target.classList.add('move-planet')
    const el = document.querySelector('.cut-circle') as HTMLElement;
    const planetImage = document.querySelector('#planet') as HTMLElement;
    var rect = (document.querySelector("#text-overlay") as HTMLElement).getBoundingClientRect();
    var x_rel = e.clientX - rect.left;
    var y_rel = e.clientY - rect.top;
    if(el){
      el.style.clipPath = `circle(160px at ${x_rel}px ${y_rel}px)`
      planetImage.style.top = `${y_rel}px`
      planetImage.style.left = `${x_rel}px`
    }
  }

  const returnToPlace = (e: any)=> {
    e.target.classList.remove('move-planet')
    const el = document.querySelector('.cut-circle') as HTMLElement;
    const planetImage = document.querySelector('#planet') as HTMLElement;
    if(el){
      el.style.clipPath = `circle(160px at 63% 40%)`
      planetImage.style.top = `40%`
      planetImage.style.left = `63%`
    }
  }
  

  const removeMe = () => {
    let arr = data || [];
    arr.shift();
    setData(JSON.parse(JSON.stringify(arr)));
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  }
    
    
  React.useEffect(() => {
    
    // In local developement, use this
    // fetch("/data")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));


    // In production, use this
    fetch('https://new-backend.unistory.app/api/data')
    .then((res) => res.json())
    .then((data) => {
      if(localStorage.getItem('user')){
        data.items.unshift(JSON.parse(localStorage.getItem('user') as string));
      }
      setData(data.items)
    });

    if(!hasExtension) {
      disableScroll()
    }else {

      if(+(localStorage.getItem('visited') || 0)){
        connectWalletHandler()
      }
      
      window.ethereum.on('accountsChanged', accountChangedHandler);
      window.ethereum.on('chainChanged', chainChangedHandler);
    }

    if(localStorage.getItem('user')){
      setUser(JSON.parse(localStorage.getItem('user') as string));
    }

    
  }, []);

  return (
    <>
    
      {
        !hasExtension ? 
        <>
        <div className='notify-modal flow center'>
          <div className='notify-modal-content'>
            <div className='notify-modal-header'>
              <h2 className='primary-color'>Notification</h2>
            </div>
            <div className='notify-modal-body'>
              <p className='secondary-color'>In order to use our site, you need to install the Meta Mask extension.</p>
              <div className='notify-modal-buttons'>
                <button className='primary-bg secondary-color' onClick={() => window.open('https://metamask.io/download.html', '_blank')}>Install</button>
              </div>
            </div>
          </div>
        </div>
        </>
        : <></>
      }
      <div className={"App" + (!hasExtension ? ' pointless' : '')}>
        <div className="full-screen">
          <header className='in-row'>
            <div className="in-row half-width content-left">
              <Link to="/">
                <div className="logo alignment-center">
                  <p className='secondary-color'>
                      Logo
                  </p>
                </div>
              </Link>
            </div>
            <div className="in-row half-width content-right">
                {
                address ? <span className='primary-color'>{address.slice(0, 15)}...</span> : <button className="wallet primary-bg slim-width secondary-color" onClick={connectWalletHandler}>
                  Connect metamask
                </button>
                }
            </div>
          </header>
          <div className='from-bottom full-height'>
            <div className="in-row from-bottom" style={{
                  marginBottom: '60px'
            }}>
              <div className="progress orange nmcds parent">
                
                <div className="flow">
                  <div className="title parent pointless" style={{zIndex: 102}}>
                      <p>
                        Explore Your own planet
                      </p>
                      <p>
                        In <span className="stroke-text">our New</span> metaverse
                      </p>
                  </div>
                </div>
                
                <div className='parent left-corner'>
                  <div className="parent" id="text-overlay" >
                    <div className="title parent cut-circle observer pointless">
                      <p>
                        Explore Your own planet
                      </p>
                      <p>
                        In <span className="ld">our New</span> metaverse
                      </p>
                    </div>
                    <div className="fifth-level circle flow observer"
                        onMouseMove={movePlanet}
                        onMouseLeave={returnToPlace}
                    >
                      <div className="circle__ pointless">
                        <div className="circle__item">
                          <div className="circle__half circle__half--clipped"></div>
                        </div>
                        <div className="circle__half circle__half--fix"></div>
                        <div className="fourth-level circle slim-width">
                          <div className="third-level circle slim-width">
                            <div className="second-level circle slim-width">
                              <div className="first-level circle slim-width">
                                <div className='parent' style={{opacity: 0}} >
                                  <img className='pointless' src={planet} alt=""/>
                                </div>
                                <div className="quarter">
                                  <p>Q1 2022</p>
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
                      </div>      
                    </div>
                    <div className="from-bottom flow right-corner">
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
                    <img id="planet" className='flow observer pointless' src={planet} alt=""/>
                  </div>
                  <p className='subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-screen">
          <div className="in-row info">
              <div className='press user'>
                <p className='user__title primary-color'>Beta test registration</p>
                <p className='user__subtitle subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <form className="user__form" onSubmit={(e: FormEvent)=> {
                  e.preventDefault()
                  var formData = new FormData(e.target as HTMLFormElement);
                  console.log('formData :', formData.get('username'), formData.get('email'));
                    if(address && !user){
                      if((formData.get('username') as string).trim() !== '' && (formData.get('email')  as string).trim() !== ''){
                        let user: User = {
                          id: null,
                          username: formData.get('username') as string,
                          email: formData.get('email') as string,
                          address: address
                        }
                        let arr = JSON.parse(JSON.stringify(data)) || []
                        arr.unshift(user)
                        setUser(user)
                        localStorage.setItem('user', JSON.stringify(user))
                        setData(arr)
                      }
                    }else {
                      connectWalletHandler()
                    }
                  }}>
                  <div className="user__field">
                    <p className='secondary-color user__label'>Name</p>
                    {
                      (address && user) ?  <p className='primary-color user__form-value'>{user.username}</p> : <input className='user__form-input primary-color' type="text" placeholder='We will display your name in participation list' name='username' />
                    }
                    
                  </div>
                  <div className="user__field">
                    <p className='secondary-color user__label'>Email</p>
                    {
                      (address && user) ?  <p className='primary-color user__form-value'>
                        {user.email}
                      </p> : <input className='user__form-input primary-color' type="text" placeholder='We will display your email in participation list' name='email' />
                    }
                  </div>
                  <button className={"user__form-button primary-bg secondary-color"+ (listMe ? ' pale': '')} onClick={()=> {
                    if(address && user && !listMe){
                      setListMe(true)
                    }
                  }}>
                    { (address && user) ? 'List me to the table' : 'Connect metamask'}
                  </button>
                </form>
            </div>
            {
              (address && user) ?  
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
                    {data?.map((item: any, index: any) => (
                      <tr key={index} className={!item.id && listMe ? 'list-me': ''}>
                          <td className={!item.id ? 'pointless': ''}>
                            <Link to={"/user-page/"+item.id}>
                                {item.username}
                            </Link>
                          </td>  
                          <td className={!item.id ? 'pointless': ''}>
                            <Link to={"/user-page/"+item.id}>
                                {item.email}
                            </Link>
                          </td>
                          {/* <td><span className="slice">{item.address}</span></td> */}
                          <td className={!item.id ? 'td3 parent': ''}>
                            <Link to={"/user-page/"+item.id}>
                                {item.address.slice(0, 20)}...
                            </Link>

                            {
                              !item.id && listMe ? 
                              <svg className='remove-me flow'
                              onClick={removeMe}
                              width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2.11035" y="2.81799" width="1" height="10" rx="0.5" transform="rotate(-45 2.11035 2.81799)" fill="white"/>
                              <rect x="2.81738" y="9.88904" width="1" height="10" rx="0.5" transform="rotate(-135 2.81738 9.88904)" fill="white"/>
                              </svg> : ''
                            }

                          </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> : <></>
            }
          </div>
        </div>
      </div>
    </>
  );  
}


function UserPage(){
  const { id } = useParams();
  const [user, setUser] = React.useState<User | null>(null);
  const [localUser, setLocalUser] = React.useState<User | null>(null);
  React.useEffect(() => {
    const getUser = async () => {
      // locally: /data/id/${id}
      const response = await fetch(`https://new-backend.unistory.app/api/data/id/${id}`);
      const data = await response.json();
      setUser(data);
    }
    getUser();
    setLocalUser(JSON.parse(localStorage.getItem('user') || '{}'))
  }, [id]);


  return (
    <>
      <div className="App">
        <div className="full-screen">
          <header className='in-row'>
          <div className="in-row half-width content-left">
            <Link to="/">
              <div className="logo alignment-center">
                <p className='secondary-color'>
                    Logo
                </p>
              </div>
            </Link>
          </div>
        <div className="in-row half-width content-right">
          <span className='primary-color'>{localUser?.address.slice(0, 15)}...</span>
        </div>
          </header>
          <div className='parent v-center fill'>
            <div className="in-row info">
              <div className='press user'>
                <h1 className="user__header secondary-color">
                  Personal data
                </h1>
                <div className="user__form">
                  <div className="user__field">
                    <p className='secondary-color user__label'>Name</p>
                    <p className='primary-color user__form-value'>
                      {user?.username}
                    </p>
                  </div>
                  <div className="user__field">
                    <p className='secondary-color user__label'>Email</p>
                    <p className='primary-color user__form-value'>
                      {user?.email}
                    </p>
                  </div>
                  <div className="user__field">
                    <p className='secondary-color user__label'>Wallet</p>
                    <p className='primary-color user__form-value'>
                      {user?.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="fifth-level edge circle flow">
                <div className="circle__" style={{pointerEvents: 'none'}}>
                  <div className="circle__item">
                    <div className="circle__half circle__half--clipped"></div>
                  </div>
                  <div className="circle__half circle__half--fix"></div>
                  <div className="fourth-level circle slim-width">
                    <div className="third-level circle slim-width">
                      <div className="second-level circle slim-width">
                        <div className="first-level circle slim-width">
                          <div className='parent'>
                              <img className='pointless' src={planet} alt=""/>
                          </div>
                          <span className="point point-1 hide">
                            <span className="sub-circle"></span>
                          </span>
                          <span className="point point-2"></span>
                          <span className="point point-3"></span>
                          <span className="point point-4"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Application(){
  return (
    <div className='cut-outside'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user-page/:id" element={<UserPage />} />
      </Routes>
    </div>
  )
}

export default Application;
