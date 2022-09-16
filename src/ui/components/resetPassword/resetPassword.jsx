import React from 'react'


const ResetPassword = () => {
  return (
    <div>
        <h1>Reset your password</h1>
        <div>
            <div><span></span> <span>Password Tip! </span><span>Hide</span></div>
            <p>Good password security you can mix at-least <span>8characters</span> like <span>letters,numbers</span>and <span>special characters</span>.</p>
        </div>

        <h2>Create you new password</h2>

        <div>
        <div>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='mukla@coding.com' />
            <div>
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder='mukla@coding.com' />
        </div>
        </div>
        <button>Reset and Log In</button>
        </div>
    </div>
  )
}

export default ResetPassword