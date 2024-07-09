import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h1 className="sidebartitle">Dashboard</h1>
                    <ul className="sidebarlist">
                        <Link to='/' className='link'>
                            <li className="sidebarlistitem active " >
                                <LineStyleIcon className='sideIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarlistitem">
                            <TimelineIcon className='sideIcon' />
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <TrendingUpIcon className='sideIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">

                    <h1 className="sidebartitle">Quick Menu</h1>
                    <ul className="sidebarlist">
                        <Link to='/user' className='link'>
                            <li className="sidebarlistitem active" >
                                <PermIdentityIcon className='sideIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/newuser' className='link'>
                            <li className="sidebarlistitem">
                                <PermIdentityIcon className='sideIcon' />
                                New User
                            </li>
                        </Link>
                        <Link to='/products' className='link'>

                            <li className="sidebarlistitem">
                                <StorefrontIcon className='sideIcon' />
                                Products
                            </li>
                        </Link>

                        <li className="sidebarlistitem">
                            <AttachMoneyIcon className='sideIcon' />
                            Transactions
                        </li>
                        <li className="sidebarlistitem">
                            <BarChartIcon className='sideIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h1 className="sidebartitle">Notifications</h1>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active" >
                            <MailOutlineIcon className='sideIcon' />
                            Mail
                        </li>
                        <li className="sidebarlistitem">
                            <DynamicFeedIcon className='sideIcon' />
                            Feedback
                        </li>
                        <li className="sidebarlistitem">
                            <ChatBubbleIcon className='sideIcon' />
                            Massages
                        </li>

                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h1 className="sidebartitle">Staff</h1>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active" >
                            <WorkOutlineIcon className='sideIcon' />
                            Manage
                        </li>
                        <li className="sidebarlistitem">
                            <TimelineIcon className='sideIcon' />
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <ReportIcon className='sideIcon' />
                            Reports
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}
