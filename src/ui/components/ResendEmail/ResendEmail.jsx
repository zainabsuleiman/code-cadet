import React from 'react'
import ResetHeader from '../resetHeader/resetHeader';
const ResendEmail = () => {
  return (
    <div className="flex flex-col pb-6 bg-bgcolor1 w-96  rounded-xl m-auto  font-nunito">
      <ResetHeader />
      <div className='flex flex-col py-14 px-10 gap-y-4'>
      <p className='text-center text-text4'>Link to reset your password has <br /> been sent to <span className='text-tertiary underline'>mu....rw@gmail.com</span></p>
        <button className='bg-tertiary flex justify-center items-center py-2 rounded-md border-solid text-bgcolor1 text-xs font-bold'>Resend Link</button>
      </div>
        
    </div>
  )
}

export default ResendEmail