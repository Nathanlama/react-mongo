import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {}
]);
const App = () => {

  return <RouterProvider router={router} />
}

export default App



