import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { MENU_ITEMS_TYPE } from '../utils/constants'
import { MENU_ITEMS_IMAGE } from '../utils/constants'

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
  } = resInfo?.cards[0]?.card?.card?.info || {}

  const menuItems = resInfo?.cards
    .find((x) => x.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
    ?.filter((x) => x['@type'] === MENU_ITEMS_TYPE)
    ?.map((x) => x.itemCards)
    .flat()
    ?.filter(
      (item, index, self) =>
        self.findIndex((i) => i.card.info.id === item.card.info.id) === index,
    )

  console.log(menuItems)
  const itemCards = menuItems

  console.log(itemCards)

  const ratingSymbol = avgRating < 4 ? '⭐' : '❇️'

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center">
      <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[65%] shadow-md bg-[#edede9] rounded-lg m-6 p-2 justify-between  ">
        <div className="menu ">
          <div className="resname flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-sm ">{cuisines.join(',')}</p>
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
              {sla.deliveryTime} MINS - {costForTwoMessage}{' '}
            </p>
          </div>
          <div className="py-2">
            <div className="pt-4  text-lg font-semibold">
              Recommended 
            </div>
            <div>
              <ul className=" ">
                {itemCards.map((items) => (
                  <>
                    <div
                      className="flex justify-between items-center mb-4 py-4 "
                      key={items?.card?.info?.id}
                    >
                      <div>
                        <li className=" text-base md:text-lg">{items.card?.info?.name}</li>
                        <li className="text-md py-1">
                          Rs. {items?.card?.info?.price / 100}
                        </li>
                      </div>
                      <div className=" flex flex-col items-center">
                        <img
                          className=" w-20 h-20 md:w-28 md:h-28 rounded-lg"
                          src={`${MENU_ITEMS_IMAGE}${items?.card?.info?.imageId}`}
                          alt={items?.card?.info?.name}
                        />
                        <button className='bg-[#d6ccc2] p-2 rounded-md w-16 md:w-24 shadow-md text-base font-medium hover:shadow-lg hover:bg-orange-500 hover:font-semibold'>ADD</button>
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
