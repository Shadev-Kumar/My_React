import { Component, useEffect } from 'react'
import User from './User'

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[50%] shadow-md bg-[#edede9] rounded-lg m-6 p-2  md:mx-[6.5rem] lg:mx-44 justify-between  ">
        <div>
          <h1 className="text-xl mt-1 text-justify">
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </h1>
          <User name={'Shadev Kumar'} location={'Bbsr'} />{' '}
        </div>
      </div>
    </div>
  )
}

export default About
