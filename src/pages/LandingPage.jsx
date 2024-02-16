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

import { lazy, Suspense } from 'react'
import { Skeleton } from 'antd'

const LazyHighlight = lazy(() => import('../LandingPage/Highlight'))
const LazyCategories = lazy(() => import('../LandingPage/Categories'))
const LazyProductsOfWeek = lazy(() => import('../LandingPage/ProductsOfWeek'))
const LazyNewProducts = lazy(() => import('../LandingPage/NewProducts'))
const LazyHighlight2 = lazy(() => import('../LandingPage/Highlight2'))
const LazyMatchStyles = lazy(() => import('../LandingPage/MatchStyles'))
const LazyLimitedOffers = lazy(() => import('../LandingPage/LimitedOffers'))
const LazyBrands = lazy(() => import('../LandingPage/Brands'))
const LazyRecentBlogs = lazy(() => import('../LandingPage/RecentBlogs'))

const LandingPage = () => {
  return (
    <div className='font-nunito bg-white'>
      <Carousel />
      <Suspense fallback={<Skeleton active />}>
        <LazyHighlight />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyCategories />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyProductsOfWeek />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyNewProducts />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyHighlight2 />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyMatchStyles />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyLimitedOffers />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyBrands />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <LazyRecentBlogs />
      </Suspense>

      {/* <Highlight />
        <Categories />
        <ProductsOfWeek />
        <NewProducts />
        <Highlight2 />
        <MatchStyles />
        <LimitedOffers />
        <Brands />
        <RecentBlogs /> */}
    </div>
  )
}

export default LandingPage
