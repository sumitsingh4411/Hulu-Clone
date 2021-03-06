import React from 'react'
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className="header">
        
        <div className="header_icons">
        <div className="header_icon always-act">
         <HomeIcon/>
         <p>Home</p>
         </div>
         <div className="header_icon">
         <LiveTvIcon/>
         <p>verified</p>
         </div>
         <div className="header_icon">
         <FlashOnIcon/>
         <p>Trending</p>
         </div>
         <div className="header_icon">
         <VideoLibraryIcon/>
         <p>Collections</p>
         </div>
         <div className="header_icon">
         <SearchIcon/>
         <p>search</p>
         </div>
         <div className="header_icon">
         <PersonOutlineIcon/>
         <p>person</p>
         </div>
        </div>
        <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"/>
        </div>
    )
}

export default Header
