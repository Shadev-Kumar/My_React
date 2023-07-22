import { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  // console.log(data)

  const [collapsed,setCollapsed]= useState(true);

  const handleClick = () => {
    setCollapsed(!collapsed);
    setshowIndex()
  }

  return (
    <div className="pt-4 mb-3  bg-[#edede9]  text-lg font-semibold">
      <div className="">
        <div
          className="title pb-4 flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className=" selection:bg-green-300 text-lg font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="mx-4">
            {showItems ? (
              <span class="material-symbols-outlined text-black ">
                expand_less
              </span>
            ) : (
              <span class="material-symbols-outlined text-black">
                expand_more
              </span>
            )}
          </span>
        </div>
        {!collapsed && showItems  && <ItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantCategory
