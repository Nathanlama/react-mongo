import React from 'react'
import { movieSlice } from './movies/moviesSlice'
import AddForm from './users/AddForm';

const Home = () => {

  console.log(movieSlice.reducer);
  return (
    <div>
      <AddForm />
    </div>
  )
}

export default Home
