import React,{ Suspense, lazy }  from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import MainBody from './components/MainBody'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
// import Grocery from './components/Grocery'


const Grocery = lazy(()=>import('./components/Grocery'))

const AppLayout = () => {
  return (
    <div className="font-sans subpixel-antialiased tracking-wide text-left leading-5 ">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainBody />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element:<RestaurantMenu/>
      },
      {
        path: '/grocery',
        element:<Suspense fallback={<h1>loading screen...</h1>}><Grocery/></Suspense>
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
