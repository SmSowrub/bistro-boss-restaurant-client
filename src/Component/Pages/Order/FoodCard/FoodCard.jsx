import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 mr-10 mt-10 px-4 bg-slate-900 text-white rounded">{price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;