import React from 'react'
import Input from './Input'

const Price = ({handleChangePrice, handleChange}) => {
  return (
    <div>
    <h2 className="text-lead text-[16px] lg:text-[20px] font-bold mt-[2rem] sm:mt-0 lg:mt-[2rem] mb-[1rem]">
  Price
</h2>
    {/* <label> 
            <input onChange={handleChange} value="" className="text-[13px] lg:text-[18px] mb-2 text-bGrey" type="radio" name="test2" />
            <span className=''></span>
            All </label> */}
    <Input name='test3' value="" handleChange={() => handleChangePrice('')}  title="All" />
    <Input name='test3' value={150} handleChange={() => handleChangePrice(150)}  title="$0 - $150" />
    <Input name='test3' value={300} handleChange={() => handleChangePrice(300)}  title="$150 - $300" />
    <Input name='test3' value={450} handleChange={() => handleChangePrice(450)}  title="$300 - $450" />
    <Input name='test3' value={600} handleChange={() => handleChangePrice(600)}  title="$450 - $600" />
    <Input name='test3' value={850} handleChange={() => handleChangePrice(850)}  title="$600 - $850" />
    <Input name='test3' value={1000} handleChange={() => handleChangePrice(1000)}  title="$850 - $1000" />
    <Input name='test3' value={1001} handleChange={() => handleChangePrice(1001)}  title="Over $1000" />

{/* <Slider
          defaultValue={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={800}
          keyboard
        />
        <div className="flex xl:flex-row flex-col justify-between gap-2 xl:gap-0  items-center">
          <p className="text-[16px] text-bGrey">Price ${sliderValue} - $800</p>
          <Button text="FILTER" onClick={handleFilterButtonClick} />
        </div> */}
        
    </div>
  )
}

export default Price