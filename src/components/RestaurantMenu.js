import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { MENU_ITEMS_TYPE } from '../utils/constants'
import { MENU_ITEMS_IMAGE } from '../utils/constants'
import {RESTAURANT_TYPE_KEY} from '../utils/constants'

const RestaurantMenu = () => {
  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId)

  console.log(resInfo)

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
    sla,
  } =
    resInfo?.cards
      ?.map((x) => x.card)
      ?.find((x) => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info ||
    []

  const menuItems =
    resInfo?.cards
      .find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      ?.filter((x) => x['@type'] === MENU_ITEMS_TYPE)
      ?.flatMap((x) => x.itemCards)
      .map((x) => x.card?.info) || []

  const itemsmenu = Array.from(
    new Set(menuItems.map((item) => item.id)),
  ).map((id) => menuItems.find((item) => item.id === id))

  console.log(itemsmenu)

  const ratingSymbol = avgRating < 4 ? '⭐' : '❇️'

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center">
      <div className="flex flex-col w-[65%] shadow-md bg-[#edede9] rounded-lg m-6 p-2 justify-between  ">
        <div className="menu ">
          <div className="resname flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-sm ">{cuisines?.join(',')}</p>
              <p className="text-sm ">{areaName} </p>
            </div>
            <div className="py-2 flex flex-col items-center ">
              <p className="p-1 text-sm">
                {avgRating} {ratingSymbol}
              </p>
              <p className="p-1 text-xs">{totalRatingsString}</p>
            </div>
          </div>
          <div className="py-2 my-2 text-md font-semibold">
            <p>
              {sla?.deliveryTime} MINS - {costForTwoMessage}{' '}
            </p>
          </div>
          <div className="py-2">
            <div className="pt-4  text-lg font-semibold">
              Recommended ({itemsmenu.length})
            </div>
            <div>
              <ul className=" ">
                {itemsmenu.map((items) => (
                  <>
                    <div
                      className="flex justify-between items-center mb-4 py-4 "
                      key={items.id}
                    >
                      <div>
                        <li className="text-lg">{items.name}</li>
                        <li className="text-md py-1">
                          Rs. {items.price / 100}
                        </li>
                      </div>
                      <div className="">
                        <img
                          className="w-28 h-28 rounded-lg"
                          src={`${MENU_ITEMS_IMAGE}${items.imageId}`}
                          alt={items.name}
                        />
                      </div>
                    </div>
                    <div className=" my-5 border-b-[1px] border-slate-400 bg-white"></div>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantMenu
