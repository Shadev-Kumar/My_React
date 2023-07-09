import RestroCard from './RestroCard'
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

  const fetchdata = async () => {
    const response = await fetch(RES_API_URL)

    const json = await response.json()
    console.log(json)
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

  const onlinestatus = useOnlineStatus()

  if (onlinestatus === false) return <h1>Oops!! You're Offline🤖</h1>

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" justify-center">
      <div className="flex p-2  mt-4 mb-0 justify-center">
        <button
          className="m-2 w-[20%] bg-[#d6ccc2] px-4 py-2 rounded-lg hover:bg-[#e3d5ca] active:bg-orange-500  transition ease-in-out delay-50 hover:scale-105 "
          onClick={ratingFilter ? undoFilter : applyFilter}
        >
          <h3>Restaurants Rating 4.0 + </h3>
        </button>

        <div className="m-2 w-[50%]">
          <div className="px-8 relative items-center">
            <input
              type="text"
              className=" bg-[#d6ccc2] w-[100%] px-4 py-2 rounded-3xl 	"
              placeholder="Search for restaurants and cuisines"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value)
              }}
            />
            {searchText.length === 0 && (
              <i className="absolute top-3 right-12  text-gray-400 fas fa-search"></i>
            )}
            {searchText.length > 0 && (
              <i
                className="absolute top-3 right-12 text-gray-400 fas fa-times cursor-pointer"
                onClick={() => setsearchText('')}
              ></i>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-16 ">
        {listofRestaurants.map((restaurant) => (
          <Link
            className="flex "
            key={restaurant.data.id}
            to={`/restaurants/${restaurant.data.id}`}
          >
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MainBody
