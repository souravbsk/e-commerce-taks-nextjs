import React from 'react';
import banner from "@/assets/Home/banner.png"
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='bg-[#FBF0E4] pt-8 flex flex-col md:flex-row items-end justify-between'>
           <div className='p-4 md:p-14 flex-1'>
           <h1 className='text-2xl md:text-5xl text-[#003A26] font-bold'>Grab Upto 50% Off On Selected Headphone</h1>
           <button className='btn bg-[#003A26] text-white font-semibold px-8 py-4 mt-6'>Buy Now</button>
           </div> 
           <div className='flex-1'>
            <Image src={banner} alt='banner' className='w-full lg:w-[460px]' placeholder='blur'></Image>
            </div> 
</div>
    );
};

export default Banner;