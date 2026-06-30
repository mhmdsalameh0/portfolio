'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                                <h2>Mostafa Sareini</h2>
                                    <p>I am a Mechanical Engineer based in El-Ghazieh, South Lebanon</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href=""><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link href=""><RiInstagramLine size={20} /></Link></li>
                                        <li><Link href=""><RiLinkedinFill size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
I’m Mostafa Sareini, a mechanical engineer crafting innovative solutions with a strong foundation in design and thermodynamics.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Pursuing M.S. in Mechanical Engineering</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a href="/Mostafa-Sareini-CV.pdf" download className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </a>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero
