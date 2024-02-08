import HighlightComp from '../components/HighlightComp'
import ScrollSurface from '../components/animationComponents/ScrollSurface'
import ProductList from '../data/ProductsList'

const Highlight = () => {

  const highlighProducts = ProductList.filter(product => product.feature === 'highlights')
  return (
    <ScrollSurface>
      <div className='flex xl:flex-row flex-col xl:px-[5rem] md:px-[2rem] px-[1rem] items-center  xl:py-[5rem] md:py-[3rem] py-[2rem] gap-0 md:gap-5'>
      {highlighProducts.map(product => (
        <HighlightComp id={product.id} key={product.id} image={product.image} heading={product.name} paragraph={product.description} button="Shop Now" />
      ))}
      </div>
    </ScrollSurface>
  )
}

export default Highlight