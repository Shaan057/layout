import './index.css'
import { GiCeilingLight } from "react-icons/gi";
import { MdOutlineGroups2 } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const WhyChooseUs = () => {
    return (
        <div className='why-choose-us-bg'>
            <h3 className='why-choose-heading'>Why Choose Us?</h3>
            <hr className='horizontal-line' />
            <ul className='why-choose-us-list'>
                <li className='why-choose-list'>
                    <GiCeilingLight className='why-icons' />
                    <p>Expert Faculty</p>
                    <p className='why-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </li>
                <li className='why-choose-list'>
                    <MdOutlineGroups2 />
                    <p>Complete Success Packege</p>
                    <p className='why-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </li>
                <li className='why-choose-list'>
                    <FaEnvelopeOpenText />
                    <p>Placements</p>
                    <p className='why-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </li>
            </ul>
            <ul className='why-footer'>
                <li className='why-footer-item'>
                    <h6 className='why-footer-icon'> Levels</h6>
                    <p className='why-footer-paras'><MdCardMembership />  Three(13 programs)</p>
                </li>
                <li className='why-footer-item'>
                    <h6 className='why-footer-icon'>  Duration</h6>
                    <p className='why-footer-paras'><FaRegClock /> 6:30 hours</p>
                </li>
                <li className='why-footer-item'>
                    <h6 className='why-footer-icon'> Exams</h6>
                    <p className='why-footer-paras'><IoDesktopOutline />  Loren Ipsum</p>
                </li>
                <li className='why-footer-item'>
                    <h6 className='why-footer-icon'> Exemptions</h6>
                    <p className='why-footer-paras'><SlCalender />  upto 9 papers</p>
                </li>
            </ul>
        </div>
    )
}

export default WhyChooseUs