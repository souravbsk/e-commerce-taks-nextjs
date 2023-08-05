import Image from 'next/image';
import React, { useState } from 'react';

const ProductImage = ({product}) => {
    const [productImage,setProductImage] = useState("");

    console.log(product);

    return (
        <>
        <div>
            <Image src={productImage ? productImage : product?.thumbnail} alt='thumbnail' width={325} height={325} className='w-full md:h-[500px]'></Image>
        </div>
        <div className='flex mt-6 items-center gap-6 justify-between flex-wrap'>
            {
                product?.images?.map((img,i) => <div onClick={() => setProductImage(img)} className='border-2 rounded-2xl' key={i}><Image src={img} alt='thumbnail' width={125} height={125} className='w-[125px] md:h-[125px]'></Image></div>)
            }
        </div>
        </>
    );
};

export default ProductImage;