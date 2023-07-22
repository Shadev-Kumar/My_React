import React from 'react'

import {
  DUMMY_IMAGE,
  MENU_ITEMS_IMAGE,
  NONVEG_LOGO,
  VEG_LOGO,
} from '../utils/constants'

const ItemList = ({ items }) => {
  // console.log(items)
  return (
    <div>
      {items.map((item,index) => (
        <React.Fragment key={item.card.info.id}>
          <div className="flex justify-between " >
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
              <p className="text-xs font-thin">
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
              <button className="bg-[#d6ccc2] p-2 rounded-md w-16 md:w-24 shadow-md text-base font-medium hover:shadow-lg hover:bg-orange-500 hover:font-semibold">
                ADD
              </button>
            </div>
          </div>
          <div className=" my-5 border-b-[1px] border-slate-400 bg-white" key={index}></div>
          </React.Fragment>
      ))}
    </div>
  )
}
export default ItemList
