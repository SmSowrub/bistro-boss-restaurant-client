import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Category1 from '../../../../assets/home/slide1.jpg';
import Category2 from '../../../../assets/home/slide2.jpg';
import Category3 from '../../../../assets/home/slide3.jpg';
import Category4 from '../../../../assets/home/slide4.jpg';
import Category5 from '../../../../assets/home/slide5.jpg';
import SectionTitle from "../../../SectionTitle/SectionTitle";
// import Category6 from '../../../../assets/home/featured.jpg';
// import Category7 from '../../../../assets/menu/pizza-bg.jpg';
// import Category8 from '../../../../assets/reservation/category-pizza.jpg';

const Category = () => {
    return (
        // <Swiper
        //     slidesPerView={4}
        //     spaceBetween={10}
        //     centeredSlides={true}
        //     Pagination={{
        //         clickable: true,
        //     }}
        //     modules={[Pagination]}
        //     className="mySwiper"
        // >
        //     <SwiperSlide>
        //        <img src= {Category1} alt="" />
        //         <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF]"'>PIZZA</h2>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <img src= {Category2} alt="" />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <img src= {Category3} alt="" />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <img src= {Category4} alt="" />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <img src= {Category5} alt="" />
        //     </SwiperSlide>
        //     {/* <SwiperSlide>
        //     <img src= {Category6} alt="" />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <img src= {Category7} alt="" />
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <img src= {Category8} alt="" />
        //     </SwiperSlide> */}
        // </Swiper>
        <div>

            <SectionTitle
                subTitle={'From 11:00am to 10:00pm'}
                title={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src={Category1} alt="" />
                    <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF] text-center'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category2} alt="" />
                    <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF] text-center'>PIZZA</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category3} alt="" />
                    <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF] text-center'>shop</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category4} alt="" />
                    <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF] text-center'>PIZZA</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category5} alt="" />
                    <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF] text-center'>Cake</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category2} alt="" />
                    <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF] text-center'>barger</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category1} alt="" />
                    <h2 className='text-4xl uppercase -mt-16 font-[Cinzel] text-[#FFFFFF] text-center'>PIZZA</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;