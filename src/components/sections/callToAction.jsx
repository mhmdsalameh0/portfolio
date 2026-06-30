import React from 'react'
import { RiPhoneLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>Are you ready to engineer your next project with precision?</h2>
                                <p>Reach out and let's make it happen. As a motivated and detail-oriented graduate, I am available for opportunities to apply my strong foundation in design, thermodynamics, and materials science.</p>
                                <div className="hero-btns">
                                    <a href="https://wa.me/96171733832" target="_blank" rel="noreferrer" className="theme-btn">Chat on WhatsApp  <i><RiPhoneLine size={16} /></i></a>
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

export default CallToAction
