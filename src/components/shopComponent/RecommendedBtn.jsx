

const RecommendedBtn = ({title, onclickHandler, value}) => {
  return (
    <button value={value} onClick={onclickHandler} className='lg:p-3 p-2 hover:bg-steam lg:border-2 border-[1px] border-lead text-[10px] lg:text-[16px] text-lead font-semibold rounded-[10px] bg-lynx transition-all duration-300 transform hover:scale-105'> {title} </button>
  )
}

export default RecommendedBtn