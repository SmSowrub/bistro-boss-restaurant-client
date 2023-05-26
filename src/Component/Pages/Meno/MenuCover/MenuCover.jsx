import React from 'react';
import { Parallax, Background } from 'react-parallax';

const MenuCover = ({img, title, subTitle}) => {
    return (
        <div>
           
            {/* <button className="btn btn-outline border-0 border-b-4 mt-4 flex justify-center mb-10 mx-auto items-center"> ORDER YOUR FAVOURITE FOOD</button> */}
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-[500px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold mb-5 font-[Cinzel] text-[#FFFFFF]">{title}</h1>
                            <p className="mb-5 font-[Cinzel] text-[#FFFFFF]">{subTitle}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default MenuCover;