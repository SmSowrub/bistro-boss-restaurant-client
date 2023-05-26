import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopulerMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CHEFRECOMMENDS from '../CHEFRECOMMENDS/CHEFRECOMMENDS';
import BistroBoss from '../BistroBoss/BistroBoss';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title className="text-xl font-bold font-[Cinzel] text-[#FFFFFF]">BISTRO BOSS | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CHEFRECOMMENDS></CHEFRECOMMENDS>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;