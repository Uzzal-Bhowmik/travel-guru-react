import React, { useState } from 'react';
import './DynamicBooking.css';
import { Link, useLoaderData } from 'react-router-dom';
import NavigationBar from '../Shared/Navigation/NavigationBar';
import { DatePicker } from 'react-rainbow-components';
import { FiCalendar } from 'react-icons/fi';


const DynamicBooking = () => {
    const dynamicDest = useLoaderData();
    const { dest, desc, bgImg } = dynamicDest;

    // react rainbow date-picker initializer
    let oneDayInMilliSecond = 86400 * 1000;
    const [fromDateValue, setFromDateValue] = useState(new Date());
    const [toDateValue, setToDateValue] = useState(new Date(Date.parse(new Date()) + (oneDayInMilliSecond)));

    return (
        <div className={`banner`} style={{ backgroundImage: `url(${bgImg}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))` }}>
            <NavigationBar></NavigationBar>

            <div className=' booking-info'>
                <div className='booking-info-inside' style={{ width: "85%" }}>

                    <div className='booking-text p-2 pt-4'>
                        <h1 className='dest-title'>{dest}</h1>
                        <p className="dest-desc">{desc}...</p>
                    </div>

                    <div className='booking-input'>
                        <div className='booking-input-fields'>
                            <div className='static-input'>
                                <label htmlFor="">Origin</label><br />
                                <input type="text" defaultValue={`Dhaka`} readOnly />
                            </div>

                            <div className='my-3 static-input'>
                                <label htmlFor="">Destination</label><br />
                                <input type="text" defaultValue={dest} readOnly />
                            </div>

                            <div className="calendar-input">
                                <div className="from">
                                    <label htmlFor="" style={{ marginBottom: "11px" }}>From</label><br />
                                    <div className="rainbow-m-around_small">
                                        <DatePicker
                                            required
                                            formatStyle="small"
                                            value={fromDateValue}
                                            onChange={setFromDateValue}
                                            icon={<FiCalendar />}
                                            minDate={fromDateValue}
                                        />
                                    </div>
                                </div>

                                <div className="to">
                                    <label htmlFor="" style={{ marginBottom: "11px" }}>To</label><br />

                                    <div className="rainbow-m-around_small">
                                        <DatePicker
                                            required
                                            formatStyle="small"
                                            value={toDateValue}
                                            onChange={setToDateValue}
                                            icon={<FiCalendar />}
                                            minDate={toDateValue}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Link to={`/hotels/${dest}`}>
                                <input type="submit" value="Submit" className='submit-btn' />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DynamicBooking;