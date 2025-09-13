import React from 'react'
import '../Style/navbar.css'

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <i style={{fontSize:25}} className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
} 

export default Navbar