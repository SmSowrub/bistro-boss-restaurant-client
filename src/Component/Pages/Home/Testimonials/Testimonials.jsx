import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Rating from 'react-rating';
import { FaRegStar, FaStar} from "react-icons/fa";
// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css'
import icons from '../../../../assets/icon/quote-left 1.png';


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="my-20">
            <div>
                <SectionTitle subTitle='What Our Clients Say' title='TESTIMONIALS'></SectionTitle>
            </div>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center mx-24 my-16">
                                {/* <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                /> */}
                                <Rating className='text-warning -mt-2 text-2xl me-2'
                                    placeholderRating={review.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                                <img src={icons} className='w-24 h-24 mt-3' alt="" />
                                <p className="py-8 text-[Dark]">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>

    );
};

export default Testimonials;