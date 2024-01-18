import React from 'react'

const RecommendedBtn = ({title, onclickHandler, value}) => {
  return (
    <button value={value} onClick={onclickHandler} className='p-3 hover:bg-steam border-2 border-lead text-lead font-semibold rounded-[10px] bg-lynx'> {title} </button>
  )
}

export default RecommendedBtn