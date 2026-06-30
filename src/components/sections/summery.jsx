import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I'm Mostafa Sareini, a Mechanical Engineer.
                                </h2>
                                <p>I am a Mechanical Engineer based in El-Ghazieh, South Lebanon. I hold a B.Sc. and M.Sc. in Mechanical Engineering, with a strong foundation in design, thermodynamics, and materials science. I have a diverse range of practical experience, having worked across projects ranging from residential MEP systems to heavy industrial manufacturing.</p>
                                <p>As a highly motivated and detail-oriented professional, I am passionate about applying my technical skills to solve complex engineering challenges. My hands-on background includes everything from designing a Floor Hydraulic Crane to operating CNC machinery and drafting precise CAD models using SolidWorks and AutoCAD.</p>
                                <div className="hero-btns">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mostafasariene@gmail.com" target="_blank" rel="noreferrer" className="theme-btn">Email Me to Learn More<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery
