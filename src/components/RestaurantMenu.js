import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { MENU_ITEMS_TYPE } from '../utils/constants'
import RestaurantCategory from './RestaurantCategory'
import { useState } from 'react'

const RestaurantMenu = () => {
  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId)
  // console.log(resInfo)

  const [showIndex, setshowIndex] = useState(0)

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info || {}

  const menuCategory = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (x) => x.card?.card?.['@type'] === MENU_ITEMS_TYPE,
  ) || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (x) => x.card?.card?.['@type'] === MENU_ITEMS_TYPE,
  ) 

  // console.log(menuCategory)

  const ratingSymbol =
    avgRating < 4 ? (
      <span className="material-symbols-outlined text-yellow-400 pb-1">
        star
      </span>
    ) : (
      <span className="material-symbols-outlined text-green-400 pb-1">
        star
      </span>
    )

    // resInfo === null ? (
    //   <Shimmer />
    // ) : 

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[65%] shadow-md bg-[#edede9] rounded-lg m-6 p-2 justify-between  ">
        <div className="resname flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm ">{cuisines?.join(',')}</p>
            <p className="text-sm ">{areaName} </p>
          </div>
          <div className="py-2 flex flex-col items-center ">
            <p className=" text-base flex  items-center whitespace-break-spaces">
              {avgRating}
              {ratingSymbol}
            </p>
            <p className="p-1 text-xs">{totalRatingsString}</p>
          </div>
        </div>
        <div className="py-2 my-2 text-md font-semibold">
          <p>
            {sla?.deliveryTime} MINS - {costForTwoMessage}{' '}
          </p>
        </div>
        <div className="py-[1px] bg-[#d6ccc2]">
          {menuCategory?.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setshowIndex={() => setshowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RestaurantMenu
