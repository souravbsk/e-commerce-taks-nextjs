import { Rating } from '@smastrom/react-rating';
import React from 'react';
import "@smastrom/react-rating/style.css";
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { remove } from '@/Store/CartSlice/CartSlice';

const CartProduct = ({product}) => {
  const { id, thumbnail, title, price, description, rating } = product || {};
  const dispatch = useDispatch();
  const handleRemoveProduct = (product) => {
    dispatch(remove(product));
  }

    return (
        <div className="flex border justify-between gap-5 rounded-lg flex-col md:flex-row overflow-hidden ">
        
        <div className="bg-[#F5F6F6] ">
          <Image
            src={thumbnail}
            className="md:w-[280PX] h-[180px]"
            width={325}
            height={280}
            alt="thumbnail"
          ></Image>
        </div>

        <div className="p-2 flex flex-col justify-between gap-2">
          
          <div className=" space-y-3  ">
          <div className="flex  gap-4 justify-between">
            <h2 className=" font-bold">{title}</h2>
            <p className="text-lg font-bold">
              <sup>$</sup>
              {price}
              <sup>.00</sup>
            </p>
          </div>
            <p>
              {description.length > 30 ? description.slice(0, 30) : description}
            </p>
            <div>
              <Rating
                className="text-[#003D2A]"
                readOnly
                style={{ maxWidth: 100 }}
                value={rating}
              />
            </div>
           
          </div>
        </div>
        <div className='py-5'>
            <button onClick={() => handleRemoveProduct(product)} className='btn text-red-500 text-xl bg-[#013D29]'><FaTrashAlt></FaTrashAlt></button>
        </div>
        
      </div>
    );
};

export default CartProduct;