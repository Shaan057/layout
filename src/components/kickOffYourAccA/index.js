import './index.css'


import React from 'react'

const KickStartSection = () =>
    <div className='kick-bg'>
        <div>
            <h3 className='kick-head'>Kick off your ACCA Prep journey with IndigoLearn</h3>
            <p className='kick-para'>Sign in and get access to our Free Cources</p>
            <button className='button-red button-kick' type='button'>Lorem</button>
        </div>
        <div className='request-form'>
            <p className='become-heading-ACCA'>Aspiring to be an ACCA? Get in touch with us</p>
            <form className='register-form'>
                <input className='reg-input' placeholder='Enter Name' />
                <input className='reg-input' placeholder='Enter Email' />
                <input className='reg-input' placeholder='Enter Number' />
                <input className='reg-input' placeholder='Query' />
                <br />
                <button className='button-blue button-call-req'>Request Call Back</button>
            </form>
        </div>
    </div>

export default KickStartSection