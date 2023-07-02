import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../styles/Carousel.scss";

export default function Carousel({ carouselItems }) {
    const carouselContainer = useRef();
    const carouselLeftBtn = useRef();
    const carouselRightBtn = useRef();

    const onLeftBtnClicked = (e) => {
        e.preventDefault();

        carouselContainer.current.style.transform = "translateX(100vw)";
    };

    const onRightBtnClicked = (e) => {
        e.preventDefault();

        carouselContainer.current.style.transform = "translateX(-100vw)";
    };

    useEffect(() => {
        carouselLeftBtn.current.addEventListener("click", onLeftBtnClicked);
        carouselRightBtn.current.addEventListener("click", onRightBtnClicked);
    }, []);

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container" ref={carouselContainer} style={{ width: `${carouselItems.length * 100}vw` }}>
                {carouselItems.map((item, index) => {
                    return (
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + `/img/carousel/${item}`} alt="" />
                        </div>
                    );
                })}
            </div>

            <div className="carousel-controller">
                <button ref={carouselLeftBtn}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button ref={carouselRightBtn}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
