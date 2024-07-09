import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from './../../components/charts/chart'
import { produtData } from './../../datas'
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitle-container">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className='productAdd-button'>Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="producttopleft">
                    <Chart
                        title='Sale in month' data={produtData} dataKey='sales' />
                </div>
                <div className="producttopright">
                    <div className="droductInfo-top">
                        <img src="/images/account.jpg" alt="" className="droductInfo-img" />
                        <span className="productName">Dell Loptop
                        </span>
                    </div>
                    <div className="ptoductInfoButton">
                        <div className="productInfoItem">
                            <div className="ptoductInfoKey">ID:</div>
                            <div className="productInfoValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="ptoductInfoKey">Name:</div>
                            <div className="productInfoValue">Dell</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="ptoductInfoKey">Sales</div>
                            <div className="productInfoValue">1220</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="ptoductInfoKey">Active:</div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="ptoductInfoKey">In Stock:</div>
                            <div className="productInfoValue">No</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productButton">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type='text' placeholder='Dell Laptop' />
                        <label>In Stock</label>
                        <select>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Active</label>
                        <select>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUploder">
                            <img src="" alt="" className="productUploaderImg" />
                            <label >
                                <PublishIcon />
                            </label>
                            <input type="file" style={{ display: 'none' }} />

                        </div>
                        <button className='productbutton'>Upload</button>

                    </div>
                </form>
            </div>

        </div>
    )
}
