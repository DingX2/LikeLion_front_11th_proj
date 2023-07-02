import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../styles/Carousel.scss";

export default function Carousel({ carouselItems }) {
    const containerRef = useRef();
    const leftBtnRef = useRef();
    const rightBtnRef = useRef();
    let currentCarousel = 0;

    const onLeftBtnClick = (e) => {
        e.preventDefault();
        currentCarousel = currentCarousel == 0 ? carouselItems.length - 1 : currentCarousel - 1;
        containerRef.current.style.transform = `translateX(${-100 * currentCarousel}vw)`;
    };

    const onRightBtnClick = (e) => {
        e.preventDefault();
        currentCarousel = currentCarousel == carouselItems.length - 1 ? 0 : currentCarousel + 1;
        containerRef.current.style.transform = `translateX(${-100 * currentCarousel}vw)`;
    };

    const CarouselAnimation = () => {
        setInterval(() => {
            currentCarousel = currentCarousel == carouselItems.length - 1 ? 0 : currentCarousel + 1;
            containerRef.current.style.transform = `translateX(${-100 * currentCarousel}vw)`;
        }, 5000);
    };

    useEffect(() => {
        leftBtnRef.current.addEventListener("click", onLeftBtnClick);
        rightBtnRef.current.addEventListener("click", onRightBtnClick);
        CarouselAnimation();

        return () => {
            leftBtnRef.current.removeEventListener("click", onLeftBtnClick);
            rightBtnRef.current.removeEventListener("click", onRightBtnClick);
        };
    }, []);

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container" ref={containerRef} style={{ width: `${carouselItems.length * 100}vw` }}>
                {carouselItems.map((item, index) => {
                    return (
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + `/img/carousel/${item}`} alt="" />
                        </div>
                    );
                })}
            </div>

            <div className="carousel-controller">
                <button ref={leftBtnRef}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <button ref={rightBtnRef}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
