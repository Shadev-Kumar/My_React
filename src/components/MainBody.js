import RestroCard, { withPromotedLabel } from './RestroCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { RES_API_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const MainBody = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([])
  const [searchistofRestaurants, setsearchlistRestaurants] = useState([])
  const [ratinglistofRestaurants, setratinglistofRestaurants] = useState([])

  const [ratingFilter, setratingFilter] = useState(false)
  const [searchText, setsearchText] = useState('')

  const [showNoResults, setShowNoResults] = useState(false)
  const [isDataFetched, setIsDataFetched] = useState(false)

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    try {
      const response = await fetch(RES_API_URL)
      const json = await response.json()
      const restaurantdata =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      setlistofRestaurants(restaurantdata)
      setsearchlistRestaurants(restaurantdata)
      setratinglistofRestaurants(restaurantdata)

      setIsDataFetched(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const filteredRestaurant = searchistofRestaurants?.filter((res) => {
      return (
        res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        res?.info?.cuisines?.some((cuisine) =>
          cuisine.toLowerCase().includes(searchText.toLowerCase()),
        )
      )
    })

    setlistofRestaurants(filteredRestaurant)
    setratinglistofRestaurants(filteredRestaurant)

    setShowNoResults(filteredRestaurant?.length === 0)
  }, [searchText, searchistofRestaurants])

  const applyFilter = () => {
    const filtereslist = ratinglistofRestaurants?.filter(
      (res) => res?.info?.avgRating > 4.2,
    )
    setlistofRestaurants(filtereslist)
    setratingFilter(true)
  }

  const undoFilter = () => {
    setlistofRestaurants(ratinglistofRestaurants)
    // fetchdata()
    setratingFilter(false)
  }

  const RestroCardPromoted = withPromotedLabel(RestroCard)

  const onlinestatus = useOnlineStatus()

  if (onlinestatus === false) return <h1>Oops!! You're Offline🤖</h1>

  return (
    <div className=" flex justify-center items-center">
      <div className="relative z-0 flex flex-col justify-center xl:w-11/12 2xl:w-10/12 3xl:w-9/12 4xl:w-8/12 6xl:w-7/12 7xl:w-9/12">
        <div className="filter-search flex mr-1  p-1 mt-4  md:p-2 sm:mx-10 md:mt-4 md:mx-[6.5rem] lg:mx-44   justify-between md:justify-center items-center ">
          <button
            className={` h-8 m-1 basis-1/4  sm:basis-1/4 md:basis-2/5 lg:basis-2/6 text-[10px] xsm:text-xs sm:text-sm md:text-base  md:px-4 md:py-2 lg:mr-[1.5rem] rounded-lg  transition ease-in-out delay-50 hover:scale-105 flex justify-center items-center ${
              ratingFilter ? 'bg-orange-500' : 'bg-[#d6ccc2]'
            }`}
            onClick={ratingFilter ? undoFilter : applyFilter}
          >
            <h3 className="hidden md:block">Restaurants Rating 4.0 + </h3>
            <h3 className="md:hidden">Rating 4.0 + </h3>
          </button>

          <div className=" basis-3/4 sm:basis-3/4 md:basis-3/5 lg:basis-4/6 ">
            <div className="px-1 relative flex justify-center items-center">
              <input
                type="text"
                className="h-8 bg-[#d6ccc2] w-[100%] px-4 py-2 rounded-3xl 	"
                placeholder="Search "
                value={searchText}
                onChange={(e) => {
                  setsearchText(e.target.value)
                }}
              />
              {searchText.length === 0 && (
                <i className="absolute top-2 right-3 md:top-2 md:right-4 text-gray-400 fas fa-search"></i>
              )}
              {searchText.length > 0 && (
                <i
                  className="absolute top-2 right-3 md:top-2 md:right-4 text-gray-400 fas fa-times cursor-pointer"
                  onClick={() => setsearchText('')}
                ></i>
              )}
            </div>
          </div>
        </div>
        {isDataFetched ? (
          <div className="restaurants flex flex-wrap justify-center  mx-16  ">
            {showNoResults && (
              <h2 className="text-2xl text-center mt-8">Item not found</h2>
            )}
            {listofRestaurants?.map((restaurant) => (
              <Link
                className="flex "
                key={restaurant?.info?.id}
                to={`/restaurants/${restaurant?.info?.id}`}
              >
                {restaurant?.info?.promoted ? (
                  <RestroCardPromoted resData={restaurant} />
                ) : (
                  <RestroCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  )
}

export default MainBody
