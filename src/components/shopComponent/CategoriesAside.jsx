import React from 'react'
import Input from './Input'

const CategoriesAside = ({handleChange}) => {
  return (
    <div>
        <div>
      <h2 className="text-lead lg:text-[20px] text-[16px] font-bold mb-[1rem]">Categories</h2>
      <div className="flex flex-col">
      <label> 
            <input onChange={handleChange} value="" className="text-[13px] lg:text-[18px] mb-2 text-bGrey" type="radio" name="test" />
            <span className=''></span>
            All </label>

      <Input color="" name='test' value='chair' handleChange={handleChange} title="Chair" />
      <Input color="" name='test' value='cupboard' handleChange={handleChange} title="Cupboard" />
      <Input color="" name='test' value='table' handleChange={handleChange} title="Home Table" />
      <Input color="" name='test' value='bedFrame' handleChange={handleChange} title="Bed Frames" />
      <Input color="" name='test' value='stool' handleChange={handleChange} title="Bar Stool" />
      <Input color="" name='test' value='kitchen' handleChange={handleChange} title="Kitchen Furniture" />
      <Input color="" name='test' value='sofa' handleChange={handleChange} title="Sofa" />
      <Input color="" name='test' value='cabinet' handleChange={handleChange} title="Cabinet" />
      <Input color="" name='test' value='lights' handleChange={handleChange} title="Lights" />
      <Input color="" name='test' value='flowervase' handleChange={handleChange} title="Flower Vase" />
      <Input color="" name='test' value='furnitureStyles' handleChange={handleChange} title="Furniture Styles" />
      </div>
      </div>
    </div>
  )
}

export default CategoriesAside

