import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from './../../datas'
import './Widgets.css'


export default function WidgetsSM() {
    return (
        <div className='widgetsSM'>
            <span className='WidgetsSM-title'>New Join Members</span>
            <ul className="WidgetsSM-list">
                {newMembers.map(user => (
                    <li key={user.id} className="WidgetsSM-list-item">
                        <img src={user.img} alt="" className="WidgetsSM-img" />
                        <div className="WidgetsSM-user">
                            <span className="WidgetsSM-username">{user.username}</span>
                            <span className="WidgetsSM-usertitle">{user.title}</span>
                        </div>
                        <button className='WidgetsSM-button'>
                            <VisibilityIcon className='widgetsSM-icon' />
                        </button>
                    </li>

                ))}

            </ul>
        </div>
    )
}
