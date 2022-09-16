import React from 'react'
import icon from '../../../resources/landingsection3/icon1.png'

const Item = (props) => {
  return (
    <div className='flex gap-x-3 items-center font-inter '>
        <span className='flex items-center justify-center bg-bglanding6 w-11 h-11 rounded-full  '>
            <img className='object-scale-down' src={props.icon} alt="" />
        </span>
        <div>
            <h2 className='font-bold'> {props.header}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Item