import React, { useState } from 'react';
import MenuCover from '../../Meno/MenuCover/MenuCover';
import orderCover from '../../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseHooks from '../../../../Hooks/Usehooks';
import FoodCard from '../FoodCard/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import UseHooks from '../../../../Hooks/Usehooks';

const Order = () => {
    const categories =['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} =useParams()
    const initialIndex =categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = UseHooks()
    
    console.log(category);
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div className='mb-5'>
            <Helmet>
                <title className="text-xl font-bold font-[Cinzel] text-[#FFFFFF]">BISTRO BOSS | Order Food</title>
            </Helmet>
            <MenuCover img={orderCover} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'}></MenuCover>
            {/* uses react tab */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>


                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>


                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>

                {/* <TabPanel></TabPanel> */}
            </Tabs>
        </div>
    );
};

export default Order;