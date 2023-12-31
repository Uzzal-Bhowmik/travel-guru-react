import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperCustomNav = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-custom-nav-btns">

            <button onClick={() => swiper.slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ height: "17px", marginBottom: "2px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button onClick={() => swiper.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ height: "17px", marginBottom: "2px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    );
};