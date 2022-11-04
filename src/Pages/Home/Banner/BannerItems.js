import React from 'react';

const BannerItems = ({slide}) => {
    const {image, prev, id, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img src={image} alt='' className="w-full" />
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-20 right-5 top-1/4">
            <h1 className='text-6xl font-bold text-white'>
                Affordable <br />
                Price For Car <br />
                Servicing
            </h1>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-20 right-5 top-2/4 w-1/3">
            <p className='text-white'>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-20 right-5 top-2/3">
            <button className="btn btn-warning mr-5">Warning</button>
            <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerItems;