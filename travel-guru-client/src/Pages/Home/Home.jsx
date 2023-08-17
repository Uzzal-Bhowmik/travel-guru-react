import React, { useEffect, useState } from 'react';
import './Home.css';
import NavigationBar from '../Shared/Navigation/NavigationBar';
// swiper js
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperCustomNav } from '../../components/SwiperCustomNav';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const destinations = useLoaderData();

    const [selectedDestId, setSelectedDestId] = useState("1");
    const [selectedDestData, setSelectedDestData] = useState({});

    useEffect(() => {
        // toggling destination isActive data
        destinations.forEach(element => {
            element.id === selectedDestId ? element.isActive = true : element.isActive = false;
        });

        // finding clicked destination card
        const selectedDest = destinations.find(dst => dst.id === selectedDestId)
        setSelectedDestData(selectedDest)
    }, [selectedDestId])



    return (
        <div className={`banner`} style={{ backgroundImage: `url(${selectedDestData.bgImg}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))` }}>
            <NavigationBar></NavigationBar>

            <div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={50}
                    modules={[Navigation, Pagination, A11y]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <h1 className='dest-title'>{selectedDestData?.dest}</h1>
                        <p className="dest-desc">{selectedDestData?.desc?.slice(0, 145)}...</p>

                        <Link className='text-decoration-none' to={`/booking/${selectedDestId}`}>
                            <button className='nav-button booking-btn mt-3'>Booking
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} className='right-arrow' stroke="currentColor" style={{ width: "30px", height: "16px", marginBottom: "1px" }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </Link>

                    </SwiperSlide>

                    {
                        destinations.map(dst =>
                            <SwiperSlide
                                key={dst.id}
                                className={`dest-card ${dst.isActive ? 'active-card' : ''}`}
                                style={{
                                    backgroundImage: `url(${dst.cardImg}), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))`,
                                }}
                                onClick={() => setSelectedDestId(dst.id)}
                            >
                                <h3 className='card-text'>{dst.dest}</h3>
                            </SwiperSlide>
                        )
                    }


                    <div className='text-center mt-4'>
                        <SwiperCustomNav />
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;