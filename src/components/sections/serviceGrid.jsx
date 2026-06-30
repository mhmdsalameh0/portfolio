import React from 'react'
import { RiPencilRuler2Line, RiTempHotLine, RiToolsLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiPencilRuler2Line size={60} />} title={"Mechanical Design & CAD"} description={"Skilled in AutoCAD and SolidWorks, with knowledge in mechanical systems and mechanics of materials."} />
                        <Card id={2} icon={<RiTempHotLine size={60} />} title={"Thermal Engineering Knowledge"} description={"Strong foundation in thermodynamics and heat transfer through Mechanical Engineering studies."} />
                        <Card id={3} icon={<RiToolsLine size={60} />} title={"Manufacturing & Assembly Training"} description={"Hands-on training in genset assembly, soundproofing, CNC plasma operation, and engine components."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}
