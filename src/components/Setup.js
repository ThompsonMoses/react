import React from 'react';
import './Setup.css';
import logo from '../images/logo.png';

function setup() {
  return (
    <div className="test">
      <div className='setup-box'>
        <div className='box-cont'> 

          <div className='imgs'>
            <div className='container-img'>
              <img src={logo} alt='logo' className='logo' />
            </div>
          </div>

          <div className='label'>
          <p>WELCOME BACK</p>
          <p> <span>Login</span></p>
          </div>

          <div className='pass-box'>
            <form>
              <input type='email' placeholder='Mail'></input>
              <input type='password' placeholder='Password'></input>
              <button type='submit' className='login'> LOGIN</button>
            </form>
          </div>
          
        </div>
      </div>

      <div className='hotline'>
        <h3><span>emergency hotline:</span></h3>
        <div className='tel'>
          <a href='tel:+234929282891'>+234 92 928 2891</a>
          <a href='tel:+234606212098'>+234 60 621 2098</a>
        </div>
      </div>
    </div>
  )
}

export default setup