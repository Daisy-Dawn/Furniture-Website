import Carousel from '../LandingPage/Carousel'
import Highlight from '../LandingPage/Highlight'
import Categories from '../LandingPage/Categories'
import ProductsOfWeek from '../LandingPage/ProductsOfWeek'
import NewProducts from '../LandingPage/NewProducts'
import Highlight2 from '../LandingPage/Highlight2'
import MatchStyles from '../LandingPage/MatchStyles'
import LimitedOffers from '../LandingPage/LimitedOffers'
import Brands from '../LandingPage/Brands'
import RecentBlogs from '../LandingPage/RecentBlogs'


const LandingPage = () => {
  return (
    <div className='font-nunito bg-white'>
      <Carousel />
      <Highlight />
      <Categories />
      <NewProducts />
      <Highlight2 />
      <ProductsOfWeek />
      <MatchStyles />
      <LimitedOffers />
      <Brands />
      <RecentBlogs />
    </div>
  )
}

export default LandingPage;