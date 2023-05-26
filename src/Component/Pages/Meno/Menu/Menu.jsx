import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MenuCover from '../MenuCover/MenuCover';
import cover from '../../../../assets/menu/banner3.jpg'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import PopularMenu from '../../Home/PopulerMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title className="text-xl font-bold font-[Cinzel] text-[#FFFFFF]">BISTRO BOSS | MENU</title>
            </Helmet>
            <MenuCover img={cover} title='OUR MENU' subTitle='Would you like to try a dish?'></MenuCover>
            <PopularMenu ></PopularMenu>
            
            <MenuCover img={cover} title='DESSERTS' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCover>
            <PopularMenu ></PopularMenu>

            <MenuCover img={cover} title='PIZZA' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCover>
            <PopularMenu ></PopularMenu>
            
            <MenuCover img={cover} title='SALADS' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCover>
            <PopularMenu ></PopularMenu>
        </div>
    );
};

export default Menu;