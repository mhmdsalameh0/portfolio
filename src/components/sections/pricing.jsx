import React from 'react'
import { priceData } from '@/utlits/fackData/priceData'
import { RiArrowRightLine, RiWhatsappLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Pricing = () => {
    return (
        <section className="pricing-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Expertise</p>
                                    <h2>Technical Capabilities</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {priceData.map(({ features, id, sortInfo, title }) => <Card key={id} id={id} features={features} sortInfo={sortInfo} title={title} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing


const Card = ({ id, title, sortInfo, features }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="pricing-item">
                    <div className="pricing-header">
                        <h4 className="title">{title}</h4>
                        <p className="save-percent capability-summary">{sortInfo}</p>
                    </div>
                    <div className="pricing-details">
                        <ul>
                            {
                                features.map(({ id, feature, unable }) => <li key={id} className={`${unable ? "unable" : ""}`}><i> <RiArrowRightLine size={14} /></i>{feature}</li>)
                            }
                        </ul>
                        <a href="https://wa.me/96171733832" target="_blank" rel="noreferrer" className="theme-btn">Discuss Your Project <i><RiWhatsappLine size={16} /></i> </a>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}
