import React, { useState } from 'react'

import {
  DUMMY_IMAGE,
  MENU_ITEMS_IMAGE,
  NONVEG_LOGO,
  VEG_LOGO,
} from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const ItemList = ({ items }) => {
  // console.log(items)
  const dispatch = useDispatch()
  const [quantity] = useState(1)

  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  // console.log(resInfo)
  const { name, cuisines, areaName,id } = resInfo?.cards[0]?.card?.card?.info || {}
  // console.log(id)

  const handleAddItem = (item) => {
    dispatch(
      addItem({
        itemid: item?.card?.info?.id,
        cname: item?.card?.info?.name,
        quantity: quantity,
        price: item?.card?.info?.price,
        defaultPrice: item?.card?.info?.defaultPrice,
        vegClassifier: item?.card?.info?.itemAttribute?.vegClassifier,
        imageId: item?.card?.info?.imageId,
        name: name,
        cuisines: cuisines,
        areaName: areaName,
        resId: id,
      }),
    )
  }

  return (
    <div>
      {items.map((item, index) => (
        <React.Fragment key={item.card.info.id}>
          <div className="flex justify-between ">
            <div className="flex flex-col justify-center">
              <span className="py-1">
                {item.card?.info?.itemAttribute?.vegClassifier === 'NONVEG' && (
                  <img
                    src={NONVEG_LOGO}
                    alt="Non-Veg Icon"
                    className="w-4 h-4"
                  />
                )}
                {item.card?.info?.itemAttribute?.vegClassifier === 'VEG' && (
                  <img src={VEG_LOGO} alt="Veg Icon" className="w-4 h-4" />
                )}
              </span>
              <span className=" text-sm md:text-lg font-semibold">
                {item.card?.info?.name}
              </span>
              <span className="text-base py-1 font-light">
                Rs.{' '}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-xs font-light">
                {item.card?.info?.description}
              </p>
            </div>
            <div className=" flex flex-col items-center">
              {item.card.info.imageId ? (
                <img
                  className=" w-20 h-20 md:w-28 md:h-28 rounded-lg"
                  src={`${MENU_ITEMS_IMAGE}${item.card.info.imageId}`}
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
              <button
                className="bg-[#d6ccc2] p-2 rounded-md w-16 md:w-24 shadow-md text-base font-medium hover:shadow-lg hover:bg-orange-500 hover:font-semibold"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
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
export default ItemList
