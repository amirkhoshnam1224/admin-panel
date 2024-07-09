import React from 'react';
import './products.css';
import { useState } from 'react';
import { productss } from '../../datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CheckBox } from '@mui/icons-material';

export default function UserList() {

  const [products, setProducts] = useState(productss)

  const Delethandler = (productsid) => {
    console.log(productsid)
    setProducts(products.filter(product => (product.id != productsid)))
  }
  const columns = [
    {
      field: 'id',
      headerMame: 'ID',
      with: '90',
    },
    {
      field: 'title',
      headerName: 'Name',
      with: '200',
      renderCell: (params) => {
        return (
          <Link to={`/products/${params.row.id}`} className='link'>
            <div className='userList-user'>
              <img src={params.row.avatar} className='userLiset-img' />
              {params.row.title}
            </div>
          </Link>

        )
      }
    },

    {
      field: 'price',
      headername: 'Price',
      width: 120
    },

    {
      feild: 'action',
      headerName: 'Action',
      width: '150',
      renderCell: ((params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}>
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
        rows={products}
        columns={columns}
        disableSelectionOnClick
        pageSize={3}
        checkboxSelection
        />
        
    </div>
  )
}

