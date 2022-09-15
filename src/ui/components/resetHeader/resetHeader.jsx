import React from 'react'
import shield from '../../resources/shield.png'

const ResetHeader = () => {
  return (
    <div className="flex bg-tertiary items-center gap-x-2 py-10 justify-center rounded-tr-xl rounded-tl-xl">
        <span>
          <img src={shield} alt="" className="w-9" />
        </span>
        <p className="text-second text-sm font-bold">
          You are requesting to <br /> reset your password
        </p>
      </div>
  )
}

export default ResetHeader