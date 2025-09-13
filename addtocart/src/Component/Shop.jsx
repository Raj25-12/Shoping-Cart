import React from 'react';
import List from '../List';
import Card from './Card';
import '../Style/card.css';

const Shop = ({handleClick}) => {
  return (
    <section>
        {
            List.map((item)=>(
                <Card item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Shop