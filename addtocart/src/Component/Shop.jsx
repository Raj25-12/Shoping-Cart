import React from 'react';
import List from '../List';
import Card from './Card';

const Shop = ({handleClick}) => {
  return (
    <section>
        {List.map((item)=>{
           return <Card item={item} key={item.id} handleClick={handleClick}/>
        })}
    </section>
  )
}

export default Shop
