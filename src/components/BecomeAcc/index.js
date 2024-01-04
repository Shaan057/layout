import './index.css'

import { FaBookReader } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";

const BecomeAcc = () =>
    <div className='become-acc-section'>
        <div className='become-acc-18-bg'>
            <h1 className='become-acc-heading'>Become ACCA in 18 months</h1>
            <p className='beacome-acc-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            <ul className='become-acc-list'>
                <li className='become-acc-list-item'>
                    <p className='become-icon'><FaBookReader />
                        Lorem Ipsum</p>
                    <p className='become-txt'>11111</p>
                </li>
                <li className='become-acc-list-item'>
                    <p className='become-icon'><GiPerspectiveDiceSixFacesRandom />
                        Passed Out</p>
                    <p className='become-txt'>11111</p>
                </li>
                <li className='become-acc-list-item'>
                    <p className='become-icon'><IoBookOutline />
                        Placed</p>
                    <p className='become-txt'>11111</p>
                </li>
                <li className='become-acc-list-item'>
                    <p className='become-icon'><CiPen />
                        Faculty</p>
                    <p className='become-txt'>11111</p>
                </li>
            </ul>
            <div className='buttons-div-become'>
                <button className='button-blue' type='button'>Download IndigoLearn</button>
                <button className='button-red' type='button'>Batch starts soon</button>
            </div>
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


export default BecomeAcc