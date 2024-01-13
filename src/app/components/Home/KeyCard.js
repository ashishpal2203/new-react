import React from 'react';
import Image from 'next/image'

const KeyCard = ({ image,btnText }) => {
    return (
        <div className='keyCard w-60'>
            <Image className='w-full'
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
            />
            <button className='text-lime-50 border rounded-[20px] w-full py-2 mt-5'>{btnText}</button>
        </div>
    );
};

export default KeyCard;