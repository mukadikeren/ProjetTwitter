import Incone from './Incone'
import Timeline from './Timeline'
import { Routes, Route, Link } from 'react-router-dom'

function Route() {
    return (
        <div>
            <Route path="/" element={<Timeline />} />
            <Route path="/Profile" element={<Profile />} />

            {/* <Route path="/Home" element={<Home />} />
            <Route path="/Explore " element={<Explore />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Message " element={<Message />} />
            <Route path="/Bookmarks" element={<Bookmarks />} />
            <Route path="/Groupe " element={<Groupe />} />
            <Route path="/More" element={<More />} />
            <Route path="*" element={< NotFound />} /> */}


        </div>

    )
}

export default Route;