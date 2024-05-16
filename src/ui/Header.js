import React from 'react'


const Header = () => {
  return (
    <div className='bg-gray-900 text-white flex justify-between items-baseline px-4 py-2'>

      <h1 className='text-2xl '>TailWind</h1>

      <nav className='space-x-4'>
        <button>About</button>
        <button>Contact</button>
      </nav>



    </div>
  )
}

export default Header
