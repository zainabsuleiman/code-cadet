import React from 'react'
import google from '../../resources/googlelogo.png'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='flex flex-col gap-y-5 bg-bgcolor1 px-10 py-5 rounded-lg font-nunito w-3/4 h-3/4'>
        <div className='text-text6'>
        <h1 className='text-3xl  font-bold '>Create Account</h1>
        <p >Be ready now</p>
        </div>
        <button className='flex justify-center items-center rounded-lg gap-x-1 py-2 border-solid border border-text5 text-text4 text-sm font-bold' > <span><img src={google} alt="" /></span> Sign Up with Google</button>
        <div className='flex items-center gap-x-1 text-text5'>
            <hr className='flex-1 border-dashed'/>
            <span className='text-xs'>or sign up with Email</span>
            <hr className='flex-1 border-dashed'/>
        </div>
        <div className='flex flex-col gap-y-5 text-text4 text-sm'>

            <div className='flex flex-col'>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='Mukw Lamb' className='border border-solid border-purple-300  rounded-lg py-3 px-2 placeholder:text-xs' />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='mail@abc.com' className='border border-solid border-purple-300  rounded-lg py-3 px-2 placeholder:text-xs'/>
            </div>
            <div className='flex flex-col'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='password' className='border border-solid border-purple-300  rounded-lg py-3 px-2 placeholder:text-xs'/>
            </div>


        </div>
        <button className='bg-second flex justify-center items-center py-2 rounded-lg border-solid text-text2 text-lg font-bold'>
            Create Account
        </button>

        <p className=' flex gap-x-5'>Don't Have an account <span className='text-second font-bold underline'><Link to='/login'>Log In</Link></span></p>
    </div>
  )
}

export default Register