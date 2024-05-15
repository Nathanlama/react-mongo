import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center bg-gray-900 text-white'>
      <div >
        <dotlottie-player src="https://lottie.host/dd12cb85-1b97-4a04-8a4d-1fc55d7f42b4/iL1ae2kQE7.json"
          background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className='dis-info'>
        <h1 className='text-2xl'>Hi, I am Nathan</h1>
        <p className='text-pink-600 my-2 italic tracking-wider'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae libero minima qui? Minus aperiam, consequuntur recusandae doloremque voluptate dicta, a iure voluptatum assumenda, eaque numquam in nobis libero dolorum!</p>

      </div>
    </div>

  )
}

export default Display
