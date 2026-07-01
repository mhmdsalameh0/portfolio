import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'10/2023-11/2023'} title={'MEPCO Engineering Company'} institution={'contact.mepco@gmail.com '} />
                                    <Card year={'09/2024-02/2025'} title={'GHADDAR Mechinery CO.'} institution={'info@ghaddar.com'} />
                              
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2025 - 2027'} title={'Master of Science in Mechanical Engineering'} institution={'Lebanese International University (LIU)'} />
                                    <Card year={'2021 - 2025'} title={'Bachelor of Science in Mechanical Engineering'} institution={'Lebanese International University (LIU)'} />
                                   
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    const isEmail = institution.includes('@')

    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company">
                        {isEmail ? (
                            <a
                                href={`mailto:${institution.trim()}`}
                                className="company-email"
                            >
                                {institution}
                            </a>
                        ) : (
                            institution
                        )}
                    </span>
                </div>
            </div>
        </SlideUp>
    )
}
