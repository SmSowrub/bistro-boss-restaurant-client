import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopulerMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CHEFRECOMMENDS from '../CHEFRECOMMENDS/CHEFRECOMMENDS';
import BistroBoss from '../BistroBoss/BistroBoss';

const Home = () => {
    return (
        <div>
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