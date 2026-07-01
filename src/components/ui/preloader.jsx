'use client'
import React, { useEffect, useState } from "react";

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        document.documentElement.classList.add("preloading");
        document.body.classList.add("preloading");
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        const timeoutId = window.setTimeout(() => {
            setIsVisible(false);
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.documentElement.classList.remove("preloading");
            document.body.classList.remove("preloading");
        }, 1200);

        return () => {
            window.clearTimeout(timeoutId);
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.documentElement.classList.remove("preloading");
            document.body.classList.remove("preloading");
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="preloader">
            <div className="preloader-heading">
                <div className="load-text">LOADING</div>
            </div>
        </div>
    );
};

export default Preloader;
