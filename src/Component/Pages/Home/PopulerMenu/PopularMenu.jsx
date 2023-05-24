import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
          const popularItem =  data.filter(item=>item.category==='popular')
          setMenu(popularItem)
        })
    },[])
    return (
        <div>
            <SectionTitle
                subTitle='FROM OUR MENU'
                title='FROM OUR MENU'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 flex justify-center mb-10 mx-auto items-center">View Full Menu</button>
        </div>
    );
};

export default PopularMenu;