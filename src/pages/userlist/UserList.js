import React from 'react'
import { useState } from 'react'
import { userRows } from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './userlist.css'
export default function UserList() {

  const [userdatas, setUserdatas] = useState(userRows)

  const Delethandler = (userid) => {
    console.log(userid)
    setUserdatas(userdatas.filter(user => (user.id != userid)))
  }
  const columns = [
    {
      field: 'id',
      headerMame: 'ID',
      with: '90',
    },
    {
      field: 'user',
      headerName: 'User',
      with: '200',
      renderCell: (params) => {
        return (
          <Link to="/" className='link'>
            <div className='userList-user'>
              <img src={params.row.avatar} className='userLiset-img' />
              {params.row.username}
            </div>
          </Link>

        )
      }
    },
    {
      field: 'email',
      headername: 'Email',
      width: 200
    },
    {
      field: 'status',
      headername: 'Status',
      width: 120
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160
    },
    {
      feild: 'action',
      headerName: 'Action',
      width: '150',
      renderCell: ((params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className='userList-edite' >Edite</button>
            </Link>
            <DeleteOutlineIcon
            onClick={()=>Delethandler(params.row.id)}
              className='userList-delet' />
          </>
        )

      })
    }
  ]
  return (
    <div className='userList'>
      <DataGrid
        rows={userdatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={3} />
    </div>
  )
}
