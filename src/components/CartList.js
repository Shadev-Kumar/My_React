import React from 'react'
import { addItem } from '../utils/cartSlice'
import {
  DUMMY_IMAGE,
  MENU_ITEMS_IMAGE,
  NONVEG_LOGO,
  VEG_LOGO,
} from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const CartList = ({ items }) => {
  console.log(items)
  const dispatch = useDispatch()

  handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((cartitem, index) => (
        <React.Fragment key={cartitem.card.info.id}>
          <div className="flex justify-between ">
            <div className=" flex justify-center items-center">
              {cartitem.card.info.imageId ? (
                <img
                  className=" w-16 h-16 md:w-16 md:h-16 rounded-lg"
                  src={`${MENU_ITEMS_IMAGE}${cartitem.card.info.imageId}`}
                  onError={(e) => {
                    e.target.src = DUMMY_IMAGE
                  }}
                />
              ) : (
                <img
                  className=" w-20 h-20 md:w-28 md:h-28 rounded-lg"
                  src={DUMMY_IMAGE}
                  alt="Dummy Image"
                />
              )}

              <div className="flex flex-col justify-center ">
                <span className="py-1">
                  {cartitem.card?.info?.itemAttribute?.vegClassifier ===
                    'NONVEG' && (
                    <img
                      src={NONVEG_LOGO}
                      alt="Non-Veg Icon"
                      className="w-4 h-4"
                    />
                  )}
                  {cartitem.card?.info?.itemAttribute?.vegClassifier ===
                    'VEG' && (
                    <img src={VEG_LOGO} alt="Veg Icon" className="w-4 h-4" />
                  )}
                </span>
                <span className=" text-sm md:text-md font-semibold">
                  {cartitem.card?.info?.name}
                </span>
              </div>
            </div>
            <div className=" w-1/3 flex justify-between items-center">
              <div className=''>
                <button
                  className="bg-[#d6ccc2] p-2 rounded-md w-16 md:w-24 shadow-md text-base font-medium hover:shadow-lg hover:bg-orange-500 hover:font-semibold"
                  onClick={() => handleAddItem(cartitem)}
                >
                  ADD
                </button>
              </div>
              <div className=''>
                <span className="text-sm py-1 font-light">
                  Rs.{' '}
                  {cartitem?.card?.info?.price
                    ? cartitem?.card?.info?.price / 100
                    : cartitem?.card?.info?.defaultPrice / 100}
                </span>
              </div>
            </div>
          </div>
          <div
            className=" my-5 border-b-[1px] border-slate-400 bg-white"
            key={index}
          ></div>
        </React.Fragment>
      ))}
    </div>
  )
}
export default CartList
