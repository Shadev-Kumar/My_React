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

  const ratingSymbol =
    avgRating < 4 ? (
      <span className="material-symbols-outlined text-yellow-400 pb-1">star</span>
    ) : (
      <span className="material-symbols-outlined text-green-400 pb-1">star</span>
    )

  return (
    <>
      <div className=" h-auto w-64 sm:w-60 lg:w-52 p-4 m-4 shadow-lg hover:shadow-md bg-[#edede9] flex flex-col rounded-md justify-between  transition ease-in-out delay-50 hover:scale-105 ">
        <img
          className=" rounded-md shadow-xl transition ease-in-out delay-50 hover:scale-105"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-xl font-semibold py-2 ">{name}</h3>
        <p className="py-1">{cuisines.join(', ')}</p>
        <p className="py-2 flex items-center  whitespace-break-spaces">
          {avgRating}
          {ratingSymbol} • {deliveryTime} MINS
        </p>
        <p className="py-2">₹{costForTwo / 100} FOR TWO</p>
      </div>
    </>
  )
}

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div className="relative flex ">
        <RestroCard {...props} />
        <label className="absolute top-5 left-5 m-2 p-1 text-sm text-white font-medium rounded-md backdrop-blur-lg	">
          PROMOTED
        </label>
      </div>
    )
  }
}

export default RestroCard
