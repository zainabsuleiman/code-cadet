import React from "react";
import ResetHeader from "../resetHeader/resetHeader";
import { Link } from 'react-router-dom';

const ResetPass = () => {
  return (
    <div className="flex flex-col gap-y-5 bg-bgcolor1 w-96 rounded-xl m-auto  font-nunito">
      <ResetHeader />

      <div className="flex flex-col gap-y-5 px-10 py-5">
        <p className="text-sm  font-bold self-center">Please provide email acount</p>

        <div>
                <div className="flex justify-between text-text4 text-sm "><span>Email</span> <span className="text-xs">Required(*)</span></div>
                <input type="email" placeholder='mukla@coding.co' className='border border-solid border-text4  rounded-lg py-1 px-2 mt-1 placeholder:text-xs focus:border-second outline-none w-full placeholder:text-center' />
            </div>
            <Link to='/resend-email'><button className='bg-tertiary flex justify-center items-center py-2 rounded-lg border-solid text-bgcolor1 text-xs font-bold w-full uppercase'>Reset Password </button></Link>

        <p className=' flex gap-x-5 text-sm'>
          Remembered your credentials?
          <span className='text-second font-bold underline'>
            <a href="/">Login</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResetPass;
