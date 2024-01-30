
const CartHero = ({title}) => {
  return (
    <section className="px-[2rem] md:px-[3rem] lg:px-[5rem] mt-12 text-center">
        <h2 className="text-lead text-4xl sm:text-5xl md:text-[3.125rem] font-bold mb-8 leading-[60px]">
            {title} 
        </h2>
      </section>
  )
}

export default CartHero;