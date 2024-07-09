import React from 'react'
import './WidgetsLG.css'
import { transactions } from './../../datas'

export default function WidgetsLG() {
  const Button = ({ type }) => {
    return <button className={'WidgetsLGButton' + type}>{type}</button>
  }
  return (
    <div className='WidgetsLG'>
      <h3 className="WidgetsLG-title">Lasted transaction</h3>
      <table className="WidgetsLGtable">
        <tr className="WidgetsLG-tr">
          <th className="WidgetsLG-th">Customer</th>
          <th className="WidgetsLG-th">Data</th>
          <th className="WidgetsLG-th">Amout</th>
          <th className="WidgetsLG-th">Status</th>
        </tr>
        {
          transactions.map(user => (
          <tr key={user.id} className="WidgetsLG-tr">
            <td className="WidgetsLG-user">
              <img src={user.img} alt="" className='WidgetsLG-IMG' />
              <span className="WidgetsLGName">{user.customer}</span>
            </td>
            <td className="WidgetsLGDate">
              {user.data}
            </td>
            <td className="WidgetsLGAmount">
              ${user.amount}
            </td>
            <td className="WidgetsLGStatus">
              <Button type={user.status} />
            </td>
          </tr>))
        }




      </table>

    </div>
  )
}
