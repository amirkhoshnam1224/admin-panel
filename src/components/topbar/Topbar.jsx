import React from 'react'
import './topbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">

                <div className="topleft">
                     <span className="logo">logo </span>
                </div>

                <div className="topright">
                    <div className="topbarIcon">
                        <NotificationsActiveIcon/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIcon">
                        <LanguageIcon/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIcon">
                        <SettingsIcon/>
                    </div>
                    <img src="images/account.jpg" alt="" className="topavatar" />
                </div>

            </div>
        </div>
    )
}
