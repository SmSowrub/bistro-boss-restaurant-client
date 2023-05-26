import React, { useState } from 'react';
import MenuCover from '../../Meno/MenuCover/MenuCover';
import orderCover from '../../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseHooks from '../../../../Hooks/Usehooks';
import FoodCard from '../FoodCard/FoodCard';
// import UseHooks from '../../../../Hooks/Usehooks';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = UseHooks()
    const offer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div className='mb-5'>
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <TabPanel>
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </TabPanel>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <TabPanel>
                        {
                            pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </TabPanel>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <TabPanel>
                        {
                            soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </TabPanel>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <TabPanel>
                        {
                            dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </TabPanel>
                </div>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;