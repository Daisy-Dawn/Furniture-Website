import React from 'react'

const RecommendedBtn = ({title, onclickHandler, value}) => {
  return (
    <button value={value} onClick={onclickHandler} className=''> {title} </button>
  )
}

export default RecommendedBtn