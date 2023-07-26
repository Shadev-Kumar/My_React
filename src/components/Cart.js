import { useSelector } from 'react-redux/es/hooks/useSelector'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { clearCart,removeItem } from '../utils/cartSlice'
import CustomAlert from './CustomAlert'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  //   console.log(cartItems)

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
   const handleRemoveItems = () =>{
    dispatch(removeItem())
   }

  return (
    <>
      {showCcustomAlert && (
        <CustomAlert
          message="Confirm Clear Cart"
          onClose={handleonClose}
          onCancel={handleonCancel}
        />
      )}
      <div className="flex justify-center">
        {cartItems.length === 0 ? (
          <div className='p-4 m-4'>
            <h1 className=""> Your Cart is Empty!</h1>
            <Link to="/">
              <div className='font-semibold bg-slate-300 my-2 p-2 hover:shadow-lg hover:bg-slate-400'> Search Restaurants Near You! </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[65%] shadow-md bg-[#edede9] rounded-lg m-6 p-2 justify-between  ">
            <div className="py-2 mb-4 flex justify-between  ">
              <span className="py-2">CART</span>
              <button
                className="mr-2 p-2 bg-[#d6ccc2] rounded-md w-16 md:w-24 shadow-md text-base font-medium hover:shadow-lg hover:bg-orange-500 hover:font-semibold "
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button
                className="mr-2 p-2 bg-[#d6ccc2] rounded-md w-16 md:w-24 shadow-md text-base font-medium hover:shadow-lg hover:bg-orange-500 hover:font-semibold "
                onClick={handleRemoveItems}
              >
                Remove Items
                {/* work on this */}
              </button>
            </div>
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
