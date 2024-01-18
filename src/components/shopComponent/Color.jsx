import React from 'react'
import Input from './Input'

const Color = ({handleChange}) => {
  return (
    <div>
        <div>


<h2 className="text-lead text-[16px] lg:text-[20px] font-bold mt-[2rem] sm:mt-0 lg:mt-[2rem] mb-[1rem]">
  Color
</h2>

<div className={`flex cursor-pointer gap-3`}>
<label> 
            <input onChange={handleChange} value="" className="text-[13px] lg:text-[18px] mb-2 text-bGrey" type="radio" name="test2" />
            <span className=''></span>
            All </label>

  <Input color='black' name='test2' value='black' handleChange={handleChange} title="Black" />
  <Input color='red' name='test2' value='red' handleChange={handleChange} title="Red" />
  <Input color='green' name='test2' value='green' handleChange={handleChange} title="Green" />
  <Input color='blue' name='test2' value='blue' handleChange={handleChange} title="Blue" />
  <Input color='pink' name='test2' value='pink' handleChange={handleChange} title="Pink" />
  <Input color='white' name='test2' value='white' handleChange={handleChange} title="White" />
  <Input color='brown' name='test2' value='brown' handleChange={handleChange} title="Brown" />
  <Input color='grey' name='test2' value='grey' handleChange={handleChange} title="Grey" />
  <Input color='purple' name='test2' value='purple' handleChange={handleChange} title="Purple" />
  <Input color='transparent' name='test2' value='transparent' handleChange={handleChange} title="Transparent" />
</div>
</div>
    </div>
  )
}

export default Color