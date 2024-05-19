import React from 'react'
import { products } from '../dummy/Data';


const personName = 'lios';
const Home = () => {
  return (
    <div className='p-4'>

      <div>
        {products.map((product) => {
          return <div key={product.id} className='space-y-2 cursor-pointer'>
            <h1 className='text-2xl'>{product.title}</h1>
            <img src={product.thumbnail} alt="" />

          </div>
        })}

      </div>




    </div>
  )
}

export default Home
