import React from 'react'

import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';


import './userlist.css'
export default function UserList() {

  const [userdatas, setUserdatas] = useState([])

  useEffect(() => {
    fetch('https://khoshnam-9dadd-default-rtdb.firebaseio.com/users.json')
      .then(Response => Response.json())
      .then(data => {
        const rows = Object.entries(data).map(([id, user]) => ({ id, ...user }));
        setUserdatas(rows);
      });
  }, []);


  const columns = [
    {
      field: 'id',
      headerMame: 'ID',
      with: '90',
    },
    {
      field: 'username',
      headerName: 'User',
      with: '200',

    },
    {
      field: 'firstName',
      headerName: 'User',
      with: '200',

    },
    {
      field: 'lastName',
      headerName: 'User',
      with: '200',

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
