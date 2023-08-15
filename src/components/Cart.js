import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { clearCart, increaseItemCount } from '../utils/cartSlice'
import CustomAlert from './CustomAlert'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartList from './CartList'

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items)
  console.log(cartItems)
  console.log(cartItems[0].resId)

  const [showCcustomAlert, setshowCcustomAlert] = useState(false)

  const dispatch = useDispatch()

  const handleClearCart = () => {
    setshowCcustomAlert(true)
  }
  const handleonClose = () => {
    setshowCcustomAlert(false)
    dispatch(clearCart())
  }
  const handleonCancel = () => {
    setshowCcustomAlert(false)
  }

  // const handleIncreaseItemCount = (id) => {
  //   dispatch(increaseItemCount({ id }))
  // }

  return (
    <>
      {showCcustomAlert && (
        <CustomAlert
          message="Confirm Clear Cart"
          onClose={handleonClose}
          onCancel={handleonCancel}
        />
      )}
      <div className="flex justify-center ">
        {cartItems.length === 0 ? (
          <div className="p-4 m-4">
            <h1 className=""> Your Cart is Empty!</h1>
            <Link to="/">
              <div className="font-semibold bg-slate-300 my-2 p-2 hover:shadow-lg hover:bg-slate-400">
                {' '}
                Search Restaurants Near You!{' '}
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col w-[95%] sm:w-[80%] md:w-[65%] shadow-md bg-[#edede9] rounded-lg m-2 md:m-6 p-1 md:p-2 justify-between  ">
            <div className="py-2 mb-4 flex justify-between  ">
              <div className="flex flex-col">
                <span className="mb-1 text-md font-semibold">
                  {cartItems[0]?.name}
                </span>
                <span className="mt-1 hidden text-sm  md:block">
                  {cartItems[0]?.cuisines?.join(',')}
                </span>
                <span className=" hidden text-sm md:block">
                  {cartItems[0]?.areaName}
                </span>
              </div>
              <button
                className=" mr-2 p-1  w-20 md:h-10 shadow-md text-sm font-medium rounded-md  bg-[#d6ccc2] hover:shadow-lg hover:bg-orange-500  "
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            <CartList items={cartItems} />
            <Link to={`/restaurants/${cartItems[0]?.resId}`}>
              <div className="font-semibold bg-slate-300 my-2 p-2 hover:shadow-lg hover:bg-slate-400">
                {' '}
                Add More items!{' '}
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
