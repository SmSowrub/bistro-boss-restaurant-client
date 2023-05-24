import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div>
            <div className="w-3/12 mx-auto text-center my-8">
                <p className="text-warning italic font-[Inter] border-b-2 pb-2 my-2 border-gray-400">--- {subTitle} ---</p>
                <h2 className="text-center border-b-2 font-[Inter] pb-2 border-gray-400 ">{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;