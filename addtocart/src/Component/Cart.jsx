import React, { useState } from 'react'


const Cart = ({cart,setCart}) => {

    const [price,setPrice] = useState(0);
  return (
    <div>
  
<div>
    {
          cart?.map((item) => ( 
           <div className='cart_box' key={item.id}>
            <div className='cart_img'>
                <img src={item.img}/>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
            <button>+</button>
            <button>-</button>
            <button>Remove</button>
            </div>
      ))
    }
    </div>

    </div>
  )
}

export default Cart
