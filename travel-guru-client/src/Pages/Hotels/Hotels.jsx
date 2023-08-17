import React from 'react';
import './Hotels.css';
import { useLoaderData, useLocation } from 'react-router-dom';
import DarkNavigationBar from '../Shared/Navigation/DarkNavigationBar';
import SingleHotel from '../SingleHotel/SingleHotel';
import hotelsMap from "../../assets/image 1.png"

const Hotels = () => {
    const hotels = useLoaderData();

    let path = useLocation().pathname.replace("/hotels/", "").replace("%20", " ");

    return (
        <div className='hotels-page'>
            <DarkNavigationBar></DarkNavigationBar>

            {/* hotels section */}
            <div className='hotels-section container'>
                {/* title */}
                <div className="hotels-section-title">
                    <p>252 stays Apr 13-17 3 guests</p>
                    <h4>
                        Stay in {path}
                    </h4>
                </div>

                {/* hotels */}
                <div className='row'>
                    <div className='col-md-7 mt-5'>
                        {
                            hotels.map(singleHotel => <SingleHotel
                                key={singleHotel.id}
                                singleHotel={singleHotel}
                            ></SingleHotel>
                            )
                        }
                    </div>

                    <div className='col-md-5'>
                        <img src={hotelsMap} alt="" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hotels;