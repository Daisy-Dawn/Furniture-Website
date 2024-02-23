import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import {
//   LandingPage, About, Shop, Contact, Blog, Cart, Wishlist, ProductDetails, Signup, Login, NoPage, ProductNotFound, BlogDetails,
//   CheckoutForm, ProductTable, BlogProductList, Products, ForgotPassword1, ForgotPassword2, ContinueFlutterwavePayment
// } from '../pages/index';

import { lazy, Suspense } from 'react'
import { Skeleton } from 'antd'

import Layout from '../layout/Layout'
import AdminLayout from '../AdminDashboard/AdminLayout'
import {
  Dashboard,
  Orders,
  ProductsDashboard,
  Categories,
  Customers,
  Reports,
  Coupons,
  Inbox,
  KnowledgeBase,
  ProductUpdate,
  PersonalSettings,
  GlobalSettings
} from '../AdminDashboard'
import { LandingPage } from '../pages'
import PrivateRoutes from './PrivateRoutes'

const LazyLandingPage = lazy(() => import('../pages/LandingPage'))
const LazyAbout = lazy(() => import('../pages/About'))
const LazyShop = lazy(() => import('../pages/Shop'))
const LazyBlog = lazy(() => import('../pages/Blog'))
const LazyContact = lazy(() => import('../pages/Contact'))
const LazyCart = lazy(() => import('../pages/Cart'))
const LazyWishlist = lazy(() => import('../pages/Wishlist'))
const LazyProductDetails = lazy(() => import('../pages/ProductDetails'))
const LazyCheckoutForm = lazy(() => import('../pages/CheckoutForm'))
const LazySignup = lazy(() => import('../pages/UserAuth/Signup'))
const LazyLogin = lazy(() => import('../pages/UserAuth/Login'))
const LazyNoPage = lazy(() => import('../pages/NoPage'))
const LazyProductNotFound = lazy(() => import('../components/ProductNotFound'))
const LazyBlogDetails = lazy(() => import('../BlogPage/BlogDetails'))
const LazyProductTable = lazy(() => import('../admin/productTable'))
const LazyBlogProductList = lazy(() => import('../admin/blogProductList'))
const LazyProducts = lazy(() => import('../admin/bedProductList'))
const LazyForgotPassword1 = lazy(() =>
  import('../pages/UserAuth/ForgotPassword1')
)
const LazyForgotPassword2 = lazy(() =>
  import('../pages/UserAuth/ForgotPassword2')
)
const LazyContinueFlutterwavePayment = lazy(() =>
  import('../payment/ContinueFlutterwavePayment')
)

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element:<LandingPage />
        },
        {
          path: 'about',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyAbout />
            </Suspense>
          )
        },
        {
          path: 'shop',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyShop />
            </Suspense>
          )
        },
        {
          path: 'bedframeform',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyProducts />
            </Suspense>
          )
        },
        {
          path: 'shop/:id',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyProductDetails />
            </Suspense>
          )
        },
        {
          path: 'blogForm',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyBlogProductList />
            </Suspense>
          )
        },
        {
          path: 'producttable',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyProductTable />
            </Suspense>
          )
        },
        {
          path: 'blog/:id',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyBlogDetails />
            </Suspense>
          )
        },
        {
          path: 'contact',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyContact />
            </Suspense>
          )
        },
        {
          path: 'blog',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyBlog />
            </Suspense>
          )
        },
        {
          path: 'cart',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyCart />
            </Suspense>
          )
        },
        {
          element: <PrivateRoutes />,
          children:[
            {
              path: 'cart/checkout',
              element: (
                <Suspense
                  fallback={
                    <Skeleton
                      paragraph={{ rows: 20 }}
                      className='h-screen w-screen'
                      active
                    />
                  }
                >
                  <LazyCheckoutForm />
                </Suspense>
              )
            },
          ]
        },
        {
          path: '/cart/checkout/continuepayment',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyContinueFlutterwavePayment />
            </Suspense>
          )
        },
        {
          path: 'wishlist',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyWishlist />
            </Suspense>
          )
        },
        {
          path: 'login/forgotpassword',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyForgotPassword1 />
            </Suspense>
          )
        },
        {
          path: 'login/resetPassword',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyForgotPassword2 />
            </Suspense>
          )
        },
        {
          path: 'productNotFound',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyProductNotFound />
            </Suspense>
          )
        },
        {
          path: '*',
          element: (
            <Suspense
              fallback={
                <Skeleton
                  paragraph={{ rows: 20 }}
                  className='h-screen w-screen'
                  active
                />
              }
            >
              <LazyNoPage />
            </Suspense>
          )
        }
      ]
    },
    //admin
    {
      path: 'admin',
      element: <AdminLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />
        },
        {
          path: 'orders',
          element: <Orders />
        },
        {
          path: 'productsdashboard',
          element: <ProductsDashboard />
        },
        {
          path: 'categories',
          element: <Categories />
        },
        {
          path: 'customers',
          element: <Customers />
        },
        {
          path: 'reports',
          element: <Reports />
        },
        {
          path: 'coupons',
          element: <Coupons />
        },
        {
          path: 'inbox',
          element: <Inbox />
        },
        {
          path: 'knowledgebase',
          element: <KnowledgeBase />
        },
        {
          path: 'productupdate',
          element: <ProductUpdate />
        },
        {
          path: 'personalsettings',
          element: <PersonalSettings />
        },
        {
          path: 'globalsettings',
          element: <GlobalSettings />
        }
      ]
    },
    {
      path: '/signup',
      element: (
        <Suspense
          fallback={
            <Skeleton
              paragraph={{ rows: 20 }}
              className='h-screen w-screen'
              active
            />
          }
        >
          <LazySignup />
        </Suspense>
      )
    },
    {
      path: '/login',
      element: (
        <Suspense
          fallback={
            <Skeleton
              paragraph={{ rows: 20 }}
              className='h-screen w-screen'
              active
            />
          }
        >
          <LazyLogin />
        </Suspense>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default Routers
