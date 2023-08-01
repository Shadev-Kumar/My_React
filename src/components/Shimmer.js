import { DUMMY_IMAGE } from '../utils/constants'

const Shimmer = () => {
  return (
    <>
      {/* xl: '1280px',
      '2xl': '1536px',
      '3xl': '1770px',
      '4xl': '2091px',
      '5xl': '2352px',
      '6xl': '2832px',
      '7xl': '3374px', */}

      <div className="flex flex-wrap justify-center xl:w-12/12 2xl:w-11/12 3xl:w-11/12 ">
        <div className="restaurants flex flex-wrap justify-center  mx-16  ">
          {Array(20)
            .fill('')
            .map((card, index) => (
              <div
                key={index}
                className=" h-auto w-64 sm:w-60 lg:w-52 xl:w-56 2xl:w-60 3xl:w-64 4xl:w-56 5xl:w-80 6xl:w-[21rem] 7xl:w-auto  p-4 m-4 shadow-lg  bg-[#edede9] flex flex-col rounded-md justify-between  "
              >
                <div className="h-32 bg-slate-300 m-4"></div>
                <h1 className="bg-slate-300 h-4 w-36 m-4"></h1>
                <h1 className="bg-slate-300 h-2 w-44 m-4"></h1>
                <h1 className="bg-slate-300 h-2  m-4"></h1>
                <h1 className="bg-slate-300 h-2  m-4"></h1>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Shimmer
