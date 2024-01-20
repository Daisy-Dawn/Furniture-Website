import React from 'react'
import RecommendedBtn from './RecommendedBtn'

const Recommended = ({handleClick}) => {
  return (
    <div className='text-lead flex font-nunito mt-[1rem]  flex-col gap-5'>
        <h2 className='text-center lg:font-bold font-extrabold text-[20px] lg:text-[30px]'>Recommended</h2>
        <div className='flex flex-wrap  gap-3 lg:gap-6'>
        <RecommendedBtn onclickHandler={handleClick} value="" title="All" />
        <RecommendedBtn onclickHandler={handleClick} value="stool" title="Bar Stool" />
        <RecommendedBtn onclickHandler={handleClick} value="chair" title="Chair Seat" />
        <RecommendedBtn onclickHandler={handleClick} value="bedFrame" title="Bed Frame" />
        <RecommendedBtn onclickHandler={handleClick} value="cabinet" title="Home Cabinet" />
        <RecommendedBtn onclickHandler={handleClick} value="cupboard" title="Home Wardrobe" />
        <RecommendedBtn onclickHandler={handleClick} value="flowervase" title="Flower Vase" />
        <RecommendedBtn onclickHandler={handleClick} value="furnitureStyles" title="Modern Furniture Styles" />
        <RecommendedBtn onclickHandler={handleClick} value="kitchen" title="Kitchen Furniture" />
        <RecommendedBtn onclickHandler={handleClick} value="lights" title="Home Lights" />
        <RecommendedBtn onclickHandler={handleClick} value="sofa" title="Home Sofa" />
        <RecommendedBtn onclickHandler={handleClick} value="table" title="Home Table" />
        </div>
    </div>
  )
}

export default Recommended