const Heading = ({title}) => {
  return (
    <div className="flex justify-center items-center gap-5">
        <div className="w-[50px] h-[3px] bg-lead"></div>
        <h2 className="text-[25px] font-bold text-lead">{title}</h2>
        <div className="w-[50px] h-[3px] bg-lead"></div>
      </div>
  )
}

export default Heading;