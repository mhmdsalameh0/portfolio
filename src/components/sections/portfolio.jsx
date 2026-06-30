'use client'
import React, { useState } from 'react'
import SlideUp from '@/utlits/animations/slideUp';
import { projectsData } from '@/utlits/fackData/projectData';
import Image from 'next/image';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    const filteredProjects = category === 'All' ? projectsData : projectsData.filter(image => image.category === category);


    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Works & Projects</h2>
                                    <p>Explore my mechanical engineering projects, including the design of a Floor Hydraulic Crane, meticulously developed using my strong foundation in design, thermodynamics, and materials science.
                                        </p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <SlideUp>
                        <ul className="project-filter filter-btns-one single-filter justify-content-center pb-15">
                            <li onClick={() => handleCategoryClick('All')} className={category === 'All' ? "current" : ""}>All</li>
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map(({ category, id, src, title }) => <Card key={id} id={id} category={category} src={src} title={title} animationClass={animationClass} />)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio


const Card = ({ category, title, src, animationClass, id }) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <Image width={383} height={249} sizes='100vw' style={{width:"100%", height:"auto"}} src={src} alt="Project" />
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}
