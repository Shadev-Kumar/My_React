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

  useEffect(() => {
    fetchdata()
  }, [])

  // console.log(listofRestaurants)

  const fetchdata = async () => {
    const response = await fetch(RES_API_URL)

    const json = await response.json()
    // console.log(json)
    const restaurantdata = json?.data?.cards[2]?.data?.data?.cards
    setlistofRestaurants(restaurantdata)
    setsearchlistRestaurants(restaurantdata)
    setratinglistofRestaurants(restaurantdata)
  }

  useEffect(() => {
    const filteredRestaurant = searchistofRestaurants.filter((res) => {
      return (
        res.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
        res.data.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchText.toLowerCase()),
        )
      )
    })

    setlistofRestaurants(filteredRestaurant)
    setratinglistofRestaurants(filteredRestaurant)
  }, [searchText])

  const applyFilter = () => {
    const filtereslist = ratinglistofRestaurants.filter(
      (res) => res.data.avgRating > 4,
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

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" justify-center ">
      <div className="flex mr-1  p-1 mt-4  md:p-2 sm:mx-10 md:mt-4 md:mx-[6.5rem] lg:mx-44 justify-between md:justify-center items-center">
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
      <div className="flex flex-wrap justify-center  mx-16 ">
        {listofRestaurants.map((restaurant) => (
          <Link
            className="flex "
            key={restaurant.data.id}
            to={`/restaurants/${restaurant.data.id}`}
          >
            {restaurant.data.promoted ? (
              <RestroCardPromoted resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MainBody
