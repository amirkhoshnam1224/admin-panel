import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis,Tooltip } from 'recharts';
import './chart.css'
export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart'>
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#5550bd" strokeDasharray="10" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
