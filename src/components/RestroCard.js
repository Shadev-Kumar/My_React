import { CDN_URL } from '../utils/constants'

const RestroCard = (props) => {
  const { resData } = props
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data

  const ratingSymbol = avgRating < 4 ? '⭐' : '❇️'

  return (
    <>
      <div className=" w-64 sm:w-60 lg:w-52 p-4 m-4 shadow-md bg-[#edede9] flex flex-col justify-between transition ease-in-out delay-50 hover:scale-105">
        <img
          className="rounded-md shadow-xl transition ease-in-out delay-50 hover:scale-105"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-xl font-semibold py-2">{name}</h3>
        <p className="py-1">{cuisines.join(', ')}</p>
        <p className="py-2">
          {avgRating}
          {ratingSymbol} • {deliveryTime} MINS
        </p>
        <p className="py-2">₹{costForTwo / 100} FOR TWO</p>
      </div>
    </>
  )
}

export default RestroCard
