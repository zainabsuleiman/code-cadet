import React from 'react'
import google from '../../resources/googlelogo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col gap-y-5 bg-bgcolor1  px-10 py-5 rounded-lg font-nunito w-3/4 h-3/4'>
       
        <div className='text-text6'>
        <h1 className='text-2xl font-bold '>Login to your Account</h1>
        <p className='text-xs'>See what is going on with your business</p>
        </div>

        <button className='flex justify-center items-center rounded-lg gap-x-1 py-2 border-solid border border-text5 text-text4 text-sm font-bold'> <span><img src={google} alt="" /></span> Continue with Google</button>

        <div className='flex items-center gap-x-1 text-text5'>
            <hr className='flex-1 border-dashed' />
            <span className='text-xs'>or Sign In with Email</span>
            <hr className='flex-1 border-dashed'/>
        </div>
        <div className='flex flex-col gap-y-5 text-text4 text-sm'>

            <div className='flex flex-col'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='mail@abc.com' className='border border-solid border-purple-300  rounded-lg py-3 px-2 placeholder:text-xs' />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="">Password</label>
            <input type="password"  className='border border-solid border-purple-300  rounded-lg py-3 px-2 placeholder:text-xs' />
            </div>

        </div>
        
        <div className='flex justify-between text-sm'>
            <div className='flex gap-x-1 items-center'>
                <input type="checkbox" checked  className='checked:bg-primary'/>
                <span className='text-text5 '>Remember Me</span>
            </div>
            <span className='text-text6 font-bold'> <Link to="/reset-pass">Forgort Password?</Link></span>
        </div>
        <button className='bg-second flex justify-center items-center py-2 rounded-lg border-solid text-text2 text-sm font-bold uppercase'>Log In</button>

        <p className=' flex gap-x-5'>Don't have an account <span className='text-second font-bold underline uppercase'><Link to='/create-account'>Sign Up </Link></span></p>
    </div>
  )
}

export default Login