import React from 'react'

const RecommendedBtn = ({title, onclickHandler, value}) => {
  return (
    <button value={value} onClick={onclickHandler} className='lg:p-3 p-2 hover:bg-steam lg:border-2 border-[1px] border-lead text-[10px] lg:text-[16px] text-lead font-semibold rounded-[10px] bg-lynx'> {title} </button>
  )
}

export default RecommendedBtn