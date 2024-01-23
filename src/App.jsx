import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Timeline from './Profile'
// import Explore from './Explore'
import Profil from "./images/Profile-Photo.svg"
import Cnn from "./images/cnn.svg"
import Noir from "./images/noir-blanc.svg"
import Tweeter from "./images/Twitter.svg"
import Home from "./images/Home-Fill.svg"
import Explore from "./images/Explore.svg"
import Message from "./images/Messages.svg"
import More from "./images/More.svg"
import Media from "./images/Media.svg"
import Poll from "./images/Poll.svg"
import Gif from "./images/Gif.svg"
import Emoji from "./images/Emoji.svg"
import Schedule from "./images/Schedule-2.svg"
// import Schedule from "./images/Schedule.svg"
import Notification from "./images/Notifications.svg"
import Bookmarks from "./images/Bookmarks.svg"
import Groupe from "./images/Groupe.svg"
import Options from "./images/Options.svg"
import Search from "./images/Search.svg"

import Incone from './Incone'
import Like from './Like'
import File from './File'
import Trend from './Trends'
import Nav_link from './contenair'
// import Text from './Text'

function App() {

  //   const  [ nav, setNav] = useState ([])
  //   const handlesumit = (e) => {
  //     e.OnMouseUp()
  //     const form = e.target 
  //     let data = new FormData(data)
  //     let objNavs = object.formEntries(data)
  //     form.reset()
  //     setNav([objNavs, ...nav])
  //   }
  //  console.log(nav)
  return (
    <>
      <div className='contenair-central'>
        <div className='contenairpremiere'>
          <div className='contenairpremiere-1'>
            <div >
              <img src={Tweeter} alt="" />
            </div>
            <Link to="/" className='link'><Nav_link image={Home}>Home</Nav_link></Link>

            <Link to="/Explore" className='link'><Nav_link image={Explore}>Explore</Nav_link></Link>

            <Link to="/Notification" className='link'><Nav_link image={Notification}>Notification</Nav_link></Link>

            <Link to="/Message" className='link'><Nav_link image={Message}>Message</Nav_link></Link>

            <Link to="/Bookmarks" className='link'><Nav_link image={Bookmarks}>Bookmarks</Nav_link></Link>

            <Link to="/Liste" className='link'><Nav_link image={Groupe}>Liste</Nav_link></Link>

            <Link to="/Profile" className='link' ><Nav_link image={Groupe}>Profile</Nav_link></Link>

            <Nav_link image={More}>More</Nav_link>
            <div className='bouton'>
              <button className='buton-un'>Tweet</button>
            </div>
            <div className='bare-2'>
              <div>
                <img src={Profil} />
              </div>
              <div className='bare-text'>
                <div className='photo-du-bas'>
                  <span>Bradley Ortiz</span>
                  <img src="src/images/Private.svg" alt="" />
                  <div className='MORE'>
                    <img src="src/images/More-2.svg" alt="" />
                  </div>

                </div>

                <p className='bradley_'>@bradley_</p>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={
            <div className='classeun'>
              <div className='home'>
                <span>Home</span>
                <div>
                  <img className='img-etoile' src="src/images/Timeline-Prop.svg" alt="" />

                </div>
              </div>
              <div className='profilepremier'>
                <div>
                  <img src={Profil} />
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="sticker">
                  <span className='What-happening'>What's happening?</span>
                  <div className='media'>
                    <Incone image={Media} />
                    <Incone image={Gif} />
                    <Incone image={Poll} />
                    <Incone image={Emoji} />
                    <Incone image={Schedule} />
                    <div className='bouton-deux'>
                      <button className='tweeter-deux'>Tweeter</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <form onSubmit={OnMouseUp}> */}
              <Like> </Like>

              <File></File>

            </div>} />
          <Route path='/Profile' element={<Timeline />} />
        </Routes>


        <div className='bare-recherche'>
          <div className='nav'>
            <img src={Search} alt="" />
            <input className='nav-input' type="text" placeholder='Serach Twitter' />
          </div>
          <div className='ul'>
            <ul className='ul-un'>
              <div>
                {/* <div className='option'>
                  <div>
                  <p className='text-option'>Trends for you</p>
                  </div>
                  <div className='img-option'>
                    <img src="src/images/Settings.svg" alt="" />                   
                      </div>
                </div> */}

                <div className='Trending-1'>
                  <div className='Trending-enligne'>
                    <p>Trends for you</p>
                    <div>
                      <img src="src/images/Settings.svg" alt="" />
                    </div>
                  </div>

                </div>

                <div className='Trending-1'>
                  <div className='Trending-enligne'>
                    <p>Trending in Turkey</p>
                    <div>
                      <img src="src/images/More-2.svg" alt="" />
                    </div>
                  </div>
                  <span className='SQUID'>#SQUID</span>
                  <p>2,066 Tweets</p>
                </div>

                <div className='Trending-1'>
                  <div className='Trending-enligne'>
                    <p>Trending in Turkey</p>
                    <div>
                      <img src="src/images/More-2.svg" alt="" />
                    </div>
                  </div>
                  <span className='SQUID'>#SQUID</span>
                  <p>2,066 Tweets</p>
                </div>

                <div className='Trending-1'>
                  <div className='Trending-enligne'>
                    <p>Trending in Turkey</p>
                    <div>
                      <img src="src/images/More-2.svg" alt="" />
                    </div>
                  </div>
                  <span className='SQUID'>#SQUID</span>
                  <p>2,066 Tweets</p>
                </div>

                <div className='Trending-1'>
                  <div className='Trending-enligne'>
                    <p>Trending in Turkey</p>
                    <div>
                      <img src="src/images/More-2.svg" alt="" />
                    </div>
                  </div>
                  <span className='SQUID'>#SQUID</span>
                  <p>2,066 Tweets</p>
                </div>


                <div className='show-more'>
                  <span>Show more</span>
                </div>
              </div>
            </ul>
          </div>
          <div className='bloc-final'>
            <div className='bloc-dernier'>
              <ul className='bloc-ul'>
                <div className='ul-Who'>
                  <span>Who to follow</span>
                </div>
                <div className='colone-cnn'>
                  <img src={Noir} alt="" />
                  <div>
                    <div>
                      <span >The New York Times</span>
                      <img src="src/images/Verified.svg" alt="" />
                    </div>
                    <p className='cnn'>@nytimes</p>
                  </div>
                  <div className='classe-pour-follow-1' >
                    <button className='Follow'>Follow</button>
                  </div>
                </div>

                <div className='colone-cnn'>
                  <img src={Cnn} alt="" />
                  <div>
                    <div>
                      <span >CNN</span>
                      <img src="src/images/Verified.svg" alt="" />
                    </div>
                    <p className='cnn'>@cnn</p>
                  </div>
                  <div className='classe-pour-follow' >
                    <button className='Follow'>Follow</button>
                  </div>
                </div>

                <div className='colone-cnn'>
                  <img src="src/images/twiterbleu.svg" alt="" />
                  <div>
                    <div>
                      <span >Twitter</span>
                      <img src="src/images/Verified.svg" alt="" />
                    </div>
                    <p className='cnn'>@Twitter</p>
                  </div>
                  <div className='classe-pour-follow-3'>
                    <button className='Follow'>Follow</button>
                  </div>
                </div>
                <div className='show-more'>
                  <span>Show more</span>
                </div>
              </ul>
            </div>
          </div>

          {/* <Text></Text> */}
          <Trend></Trend>

        </div>
      </div >

    </>
  )
}
export default App





