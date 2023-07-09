import { CDN_URL } from '../utils/constants';

const RestroCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data;

  const ratingSymbol = avgRating < 4 ? '⭐' : '❇️';

  return (
    <>
      <div className="  w-52 p-4 m-4 shadow-md bg-[#edede9] hover:bg-[#e3d5ca]">
        <img
          className="rounded-md shadow-xl"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className='text-xl font-semibold py-2'>{name}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>{avgRating}{ratingSymbol} • {deliveryTime} MINS</p>
        <p>₹{costForTwo / 100} FOR TWO</p>
      </div>
    </>
  );
};

export default RestroCard;
