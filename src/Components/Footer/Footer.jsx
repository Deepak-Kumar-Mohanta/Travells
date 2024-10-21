import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4" ></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className="btn flex " type='submit'>
                            SEND<FiSend className='icon' />
                        </button>
                    </div>
                </div>



                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className='icon' />  Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerPara">
                            Traveling opens up a world of experiences, allowing us to explore diverse cultures, savor unique cuisines, and connect with people from all walks of life. Each destination offers its own story, from the bustling markets of Marrakech to the serene landscapes of the Swiss Alps. Whether wandering through ancient ruins or lounging on a sun-kissed beach, travel enriches our understanding of the world and broadens our perspectives. It invites us to step outside our comfort zones, fostering a sense of adventure and curiosity that lingers long after the journey ends.
                        </div>

                        <div data-aos="fade-up" className="footerSocial flex">
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <AiFillInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>

                    </div>

                    <div className="footerLinks grid">
                        {/* GROUP_1 */}

                        <div data-aos="fade-up"
                            data-aos-duration="3000"
                            className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>

                        </div>
                        {/* GROUP_2 */}
                        <div data-aos="fade-up"
                            data-aos-duration="4000"
                            className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                HotelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TripAdviser
                            </li>

                        </div>
                        {/* GROUP_3 */}
                        <div data-aos="fade-up"
                            data-aos-duration="5000"
                            className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Carlifornia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Odisha
                            </li>

                        </div>

                    </div>


                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE</small>
                        <small>deepakmohanta407@gmail.com</small>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer