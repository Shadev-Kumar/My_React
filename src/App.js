import React, { Suspense, lazy, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import MainBody from './components/MainBody'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
// import Grocery from './components/Grocery'
import userContext from './utils/userContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/Cart'

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {
  const [userName, setuserName] = useState()

  //Authentication
  useEffect(() => {
    //api call for useName and password
    const data = {
      name: 'Shadev Kumar',
    }
    setuserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div className="font-sans subpixel-antialiased tracking-wide  leading-5 flex justify-center flex-col">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
        element: <RestaurantMenu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>loading screen...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
