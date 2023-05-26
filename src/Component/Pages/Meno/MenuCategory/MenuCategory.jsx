import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import MenuCover from '../MenuCover/MenuCover';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            {
                title && <MenuCover title={title} img={img}></MenuCover>
            }
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 flex justify-center mb-10 mx-auto items-center">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuCategory;