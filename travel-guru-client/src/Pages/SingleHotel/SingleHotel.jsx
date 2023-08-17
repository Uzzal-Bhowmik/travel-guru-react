import React from 'react';
import './SingleHotel.css';
import { BsFillStarFill } from "react-icons/bs";

const SingleHotel = ({ singleHotel }) => {

    const { img, title, desc, guests, bedrooms, beds, baths, rating, price } = singleHotel;

    return (
        <div className='single-hotel'>
            <div>
                <img src={img} alt="" />
            </div>

            <div style={{ width: "316px" }}>

                <h5>{title}</h5>

                <div className='d-flex specs mt-2 mb-3'>
                    <p className='me-2'>{guests} guests</p>
                    <p className='me-2'>{bedrooms} bedrooms</p>
                    <p className='me-2'>{beds} beds</p>
                    <p>{baths} baths</p>
                </div>

                <p style={{ width: "327px", lineHeight: "30px" }}>{desc}</p>

                <div className='d-flex align-items-center justify-content-between mt-3'>

                    <div className='d-flex align-items-center'>
                        <BsFillStarFill className='text-warning'></BsFillStarFill>
                        <span className='ms-1 fw-bold'>{rating}</span>
                    </div>
                    <p>
                        <span style={{ fontSize: "18px", fontWeight: "600" }}>{price}/</span>
                        <span>night</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SingleHotel;