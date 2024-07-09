import React from 'react';
import './home.css'
import Chart from './../../components/charts/chart.jsx'
import Features from './../../components/features/Features.jsx'
import {xAxisData} from '../../datas.js'
import WidgetsSM from '../../components/widgets/WidgetsSM.jsx'
import WidgetsLG from './../../components/WidgetsLG/WidgetsLG.jsx'
const Home = () => {
  
    return (
        <div className='homes'>
            <Features />
            <Chart grid title='month Sale' data={xAxisData} dataKey="Sale"/>
            <div className='homeWidgets'>
                <WidgetsSM/>
                <WidgetsLG/>
            </div>

        </div>
    );
};

export default Home;
