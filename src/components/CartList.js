import React from 'react'
import { increaseItemCount, decrQuantity, removeItem } from '../utils/cartSlice'
import {
  DUMMY_IMAGE,
  MENU_ITEMS_IMAGE,
  NONVEG_LOGO,
  VEG_LOGO,
} from '../utils/constants'
import { useDispatch } from 'react-redux'

const CartList = ({ items }) => {
  // console.log(items)
  const dispatch = useDispatch()

  const totalPrice = items
    .reduce((total, cartitem) => {
      return cartitem?.price
        ? (total += (cartitem?.price / 100) * cartitem?.quantity)
        : (total += (cartitem?.defaultPrice / 100) * cartitem?.quantity)
    }, 0) 
    .toFixed(2)

  // console.log(`Total : Rs.${totalPrice}`)

  return (
    <div className="flex flex-col">
      {items.map((cartitem, index) => (
        <React.Fragment key={cartitem?.itemid}>
          <div className="flex justify-between ">
            <div className=" m-1/2 flex justify-center items-center">
              {cartitem?.imageId ? (
                <img
                  className="hidden md:block w-16 h-16 md:w-16 md:h-16 rounded-lg"
                  src={`${MENU_ITEMS_IMAGE}${cartitem?.imageId}`}
                  onError={(e) => {
                    e.target.src = DUMMY_IMAGE
                  }}
                />
              ) : (
                <img
                  className="hidden md:block w-20 h-20 md:w-28 md:h-28 rounded-lg"
                  src={DUMMY_IMAGE}
                  alt="Dummy Image"
                />
              )}

              <div className="flex flex-row p-1 mr-2 md:flex-col justify-center  ">
                <span className="py-1">
                  {cartitem?.vegClassifier === 'NONVEG' && (
                    <img
                      src={NONVEG_LOGO}
                      alt="Non-Veg Icon"
                      className=" min-w-fit h-[12px] md:w-4 md:h-4"
                    />
                  )}
                  {cartitem?.vegClassifier === 'VEG' && (
                    <img
                      src={VEG_LOGO}
                      alt="Veg Icon"
                      className="  min-w-fit	 h-[12px] md:w-4 md:h-4 "
                    />
                  )}
                </span>
                <span className="ml-2 md:ml-0 mr-6 md:mr-0 pl-2 md:pl-0 text-xs sm:text-sm  font-light">
                  {cartitem?.cname}
                </span>
              </div>
            </div>
            <div className=" w-1/2 md:w-1/3 flex justify-end lg:justify-between items-center">
              <div className=" flex justify-between items-center gap-2 text-sm  md:gap-3 py-1 px-1 border-2 border-[#d6ccc2]">
                <button
                  onClick={() =>
                    cartitem?.quantity >= 2
                      ? dispatch(decrQuantity(cartitem?.itemid))
                      : dispatch(removeItem(cartitem?.itemid))
                  }
                >
                  -
                </button>
                <div className="w-2 text-xs sm:text-sm flex justify-center items-center">
                  {cartitem?.quantity}
                </div>
                <button
                  onClick={() => dispatch(increaseItemCount(cartitem?.itemid))}
                >
                  +
                </button>
              </div>
              <div className="ml-4 sm:ml-8 md:ml-20">
                <span className="flex text-xs sm:text-sm py-1 font-light">
                  Rs.{''}
                  {cartitem?.price
                    ? ((cartitem?.price / 100) * cartitem?.quantity).toFixed(2)
                    : (
                        (cartitem?.defaultPrice / 100) *
                        cartitem?.quantity
                      ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className=" my-4 " key={index}></div>
        </React.Fragment>
      ))}
      <div className="flex justify-end text-md font-medium pt-4 border-t-[1px] border-slate-400">
        Total Price: Rs. {totalPrice}
      </div>
    </div>
  )
}
export default CartList
