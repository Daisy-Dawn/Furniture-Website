import React from 'react'
import Input from './Input'

const Price = ({handleChangePrice, handleChange}) => {
  return (
    <div className='text-lead font-nunito'>
    <h2 className="text-lead text-[16px] lg:text-[20px] font-bold mt-[2rem] sm:mt-0 lg:mt-[0rem] mb-[1rem]">
  Price
</h2>
    <div className='flex flex-col gap-2'>
    <Input name='test3' value="" handleChange={() => handleChangePrice('')}  title="All" />
    <Input name='test3' value={150} handleChange={() => handleChangePrice(150)}  title="$0 - $150" />
    <Input name='test3' value={300} handleChange={() => handleChangePrice(300)}  title="$150 - $300" />
    <Input name='test3' value={450} handleChange={() => handleChangePrice(450)}  title="$300 - $450" />
    <Input name='test3' value={600} handleChange={() => handleChangePrice(600)}  title="$450 - $600" />
    <Input name='test3' value={850} handleChange={() => handleChangePrice(850)}  title="$600 - $850" />
    <Input name='test3' value={1000} handleChange={() => handleChangePrice(1000)}  title="$850 - $1000" />
    <Input name='test3' value={1001} handleChange={() => handleChangePrice(1001)}  title="Over $1000" />
    </div>

    </div>
  )
}

export default Price