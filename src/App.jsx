import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Timeline from './Profile'
import Notification from './Notification'
import Message from './Message'
import Bookmarks from './Bookmarks'

import Follow from './Follow'
import Squid from './Squid'
import Bradley from './Bradley'
import Explore from './Explore'
import Profil from "./images/Profile-Photo.svg"
import Tweeter from "./images/Twitter.svg"
import Home from "./images/Home-Fill.svg"
import ExploreIcon from "./images/Explore.svg"
import MessageIcon from "./images/Messages.svg"
import More from "./images/More.svg"
import Media from "./images/Media.svg"
import Poll from "./images/Poll.svg"
import Gif from "./images/Gif.svg"
import Emoji from "./images/Emoji.svg"
import Schedule from "./images/Schedule-2.svg"
import NotificationIcon from "./images/Notifications.svg"
import BookmarksIcon from "./images/Bookmarks.svg"
import Groupe from "./images/Groupe.svg"
import Search from "./images/Search.svg"
import Incone from './Incone'
import Like from './Like'
import File from './File'
import Trend from './Trends'
import Nav_link from './contenair'
import axios from 'axios'
import Post from './Post'



function App() {


  return (
    <>
      <div className='contenair-central'>
        <div className='contenairpremiere'>
          <div className='contenairpremiere-1'>
            <div>
              <img src={Tweeter} alt="" />
            </div>
            <Link to="/" className='link'><Nav_link className="link-1" image={Home}>Home</Nav_link></Link>
            <Link to="/Explore" className='link'><Nav_link image={ExploreIcon}>Explore</Nav_link></Link>
            <Link to="/Notification" className='link'><Nav_link image={NotificationIcon}>Notification</Nav_link></Link>
            <Link to="/Message" className='link'><Nav_link image={MessageIcon}>Message</Nav_link></Link>
            <Link to="/Bookmarks" className='link'><Nav_link image={BookmarksIcon}>Bookmarks</Nav_link></Link>
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
                  <div className='MORE'>
                    <img src="src/images/More-2.svg" alt="" />
                  </div>
                </div>
                <p className='bradley_'>@bradley_</p>
              </div>
            </div>
            {/* <Bradley></Bradley> */}
          </div>
        </div>

{/*        
export default function Timeline() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
            .then((res) => { setPost(res.data) })

    }, [])
     const [user, setUser] = useState([]);
     useEffect(() => {
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
    .then((res) =>{setUser(res.data)} )
     },[])
    return (
        <div className="timeline">
            <header className="container">
                <h2 className="page-title">Home</h2>
                <img className="top-tweets" src="Timeline-Prop.svg" alt="button menu" />
            </header>
            <Avatar>
                <Button />
            </Avatar>
            {post.map((data) => (<Post
                key={data.id}
                text={data.body}
                avatar={User.find((element) => element.id === data.userId)?.thumbnailProfil}
                image={data.url}
                user={User.find((element)=> element.id === data.userId)?.name } 
                email={Userser.find((element)=> element.id === data.userId)?.email}
                /> ))}
        </div>
    )
} */}

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
                  <Link to="Profile"><img src={Profil} /></Link>
                </div>
                <div className="sticker">
                  <textarea type="text" name="" id="" placeholder='what s    happening ' />
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

              <Like></Like>
              <File></File>

            </div>} />
          <Route path='/Profile' element={<Timeline />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path='/Notification' element={<Notification />} />
          <Route path='/Message' element={<Message />} />
          <Route path='/Bookmarks' element={<Bookmarks />} />

        </Routes>

        <div className='bare-recherche'>
          <div className='nav'>
            <img src={Search} alt="" />
            <input className='nav-input' type="text" placeholder='Serach Twitter' />
          </div>

          <Squid></Squid>
          <Follow></Follow>
          <Trend></Trend>
        </div>
      </div >

    </>
  )
}
export default App





