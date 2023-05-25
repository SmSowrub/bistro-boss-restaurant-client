import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import card1 from '../../../../assets/menu/pizza-bg.jpg'
import card2 from '../../../../assets/menu/salad-bg.jpg'
import card3 from '../../../../assets/menu/soup-bg.jpg'

const CHEFRECOMMENDS = () => {
    return (
        <div>
            <SectionTitle subTitle='Should Try' title='CHEFRE COMMENDS'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={card1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizza</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={card2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={card3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Soup</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-outline text-[#BB8506] border-0 border-b-4 mt-4">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CHEFRECOMMENDS;