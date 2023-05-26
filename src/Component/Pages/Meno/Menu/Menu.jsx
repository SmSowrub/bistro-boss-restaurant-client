import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MenuCover from '../MenuCover/MenuCover';
import cover from '../../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../SectionTitle/SectionTitle';
import UseHooks from '../../../../Hooks/Usehooks';
import MenuCategory from '../MenuCategory/MenuCategory';

import Dessert from '../../../../assets/menu/dessert-bg.jpeg'
import Pizza from '../../../../assets/menu/pizza-bg.jpg'
import Salad from '../../../../assets/menu/salad-bg.jpg'
import Soup from '../../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] =UseHooks()
    const offer = menu.filter(item=>item.category === 'offered')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title className="text-xl font-bold font-[Cinzel] text-[#FFFFFF]">BISTRO BOSS | MENU</title>
            </Helmet>
            <MenuCover img={cover} title='OUR MENU' subTitle='Would you like to try a dish?'></MenuCover>
            <SectionTitle  subTitle="Don't miss" title="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offer}></MenuCategory>
            <MenuCategory title={'dessert'} img={Dessert} items={dessert}></MenuCategory>
            <MenuCategory title={'pizza' }img={Pizza} items={pizza}></MenuCategory>
            <MenuCategory title={'salad'} img={Salad} items={salad}></MenuCategory>
            <MenuCategory title={'soup' }img={Soup} items={soup}></MenuCategory>
           
        </div>
    );
};

export default Menu;