import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profil from "./images/Profile-Photo.svg"
import Fleure from "./images/image-3.png"
import Cnn from "./images/cnn.svg"
import Noir from "./images/noir-blanc.svg"
import Icone from "./images/Icone.svg"
import Tweeter from "./images/Twitter.svg"
import Home from "./images/Home-Fill.svg"
import Explore from "./images/Explore.svg"
import Message from "./images/Messages.svg"
import More from "./images/More.svg"
import Media from "./images/Media.svg"
import Poll from "./images/Poll.svg"
import Gif from "./images/Gif.svg"
import Emoji from "./images/Emoji.svg"
import Schedule from "./images/Schedule.svg"
import Share from "./images/Share.svg"
import Twiter from "./images/twiterbleu.svg"
import Notification from "./images/Notifications.svg"
import Bookmarks from "./images/Bookmarks.svg"
import Groupe from "./images/Groupe.svg"
import Search from "./images/Search.svg"

import Navlink from './contenair'
import Incone from './Incone'
import Like from './Like'


function App() {

  return (
    <>
      <div className='contenair-central'>
        <div className='contenairpremiere'>
          <div className='contenairpremiere-1'>
            <div >
              <img src={Tweeter} alt="" />
            </div>
            <Navlink image={Home}>Home</Navlink>
            <Navlink image={Explore}>Explore</Navlink>
            <Navlink image={Notification}>Notification</Navlink>
            <Navlink image={Message}>Message</Navlink>
            <Navlink image={Bookmarks}>Bookmarks</Navlink>
            <Navlink image={Groupe}>Groupe</Navlink>
            <Navlink image={Groupe}>Groupe</Navlink>
            <Navlink image={More}>More</Navlink>
            <div className='bouton'>
              <button className='buton-un'>Tweet</button>
            </div>
            <div className='bare-2'>
              <div>
                <img src={Profil} />
              </div>
              <div className='bare-text'>
                <span>Bradley Ortiz</span>
              </div>
              <div>
                <p>@bradley_</p>
              </div>
            </div>

          </div>
        </div>
        <div className='classeun'>
          <div className='home'>
            <span>Home</span>
            <img src="src/images/Timeline-Prop.svg" alt="" />
          </div>
          <div className='profilepremier'>
            <div>
              <img src={Profil} />
            </div>
            <div className="sticker">
              <span>What't happening?</span>
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
          <Like />
          <Like image={Fleure} avatar={Cnn} source="CNN" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, deleniti laudantium itaque minima magnam praesentium error aperiam architecto ipsam vitae minus sint, et tempore fuga? Repudiandae delectus aperiam consequuntur id." reply="19" reacted="46" share="468" ></Like>
          {/* <Like avatar={Noir} source="The New York Times" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, deleniti laudantium itaque minima magnam praesentium error aperiam architecto ipsam vitae minus sint, et tempore fuga? Repudiandae delectus aperiam consequuntur id." reply="19" reacted="46" share="468" ></Like> */}
        </div>
        <div className='contenairtrois'>
          <div className='nav'>
           <img src={Search} alt="" />
           <input className='nav-input' type="text" placeholder='Serach Twitter' />
           
          </div>
          <div className='ul'>
            <ul>

            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
export default App





