import React from 'react'
import Header from '../ui/Header'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <h1>This is Home</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nulla neque architecto vitae, animi voluptates hic sunt qui iure ullam voluptas placeat omnis eos, aut atque voluptatum tempore temporibus officia vel quae cumque quos. Facere atque accusantium accusamus possimus repellat ipsum sunt alias ipsam nam officia, modi nemo esse voluptates.</p>
      <NavLink to='/' className='bg-orange-500'>Go to Child1</NavLink>
      <NavLink to='/child2' className='bg-cyan-400'>Go to Child2</NavLink>
      <Outlet />
    </div>
  )
}

export default Home
