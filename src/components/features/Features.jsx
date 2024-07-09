import React from 'react'
import './features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Features() {
  return (
    <div className='features'>
      <div className="featureItem">
        <span className='feature-title'>Revanue</span>
        <div className="feature-container">
            <span className="feature-money">$2</span>
            <span className="feature-rate">$-45<ArrowDownwardIcon className='feature-icon negative'/></span>
        </div>
        <span className='feature-sub'>Compered to last month</span>
      </div>
      <div className="featureItem">
        <span className='feature-title'>Sales</span>
        <div className="feature-container">
            <span className="feature-money">$2</span>
            <span className="feature-rate">$-45<ArrowDownwardIcon className='feature-icon negative'/></span>
        </div>
        <span className='feature-sub'>Compered to last month</span>
      </div>
      <div className="featureItem">
        <span className='feature-title'>Cost</span>
        <div className="feature-container">
            <span className="feature-money">$2</span>
            <span className="feature-rate">$+45<ArrowUpwardIcon className='feature-icon '/></span>
        </div>
        <span className='feature-sub'>Compered to last month</span>
      </div>
    </div>
  )
}
