import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {LandingPage, About, Shop, Contact, Blog,  Cart, Wishlist,  ProductDetails, Signup, Login, NoPage} from '../pages/index';
import Layout from '../layout/Layout';
import ProductNotFound from '../components/ProductNotFound';

const Routers = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <LandingPage />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "shop/:id",
          element: <ProductDetails />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "wishlist",
          element: <Wishlist />
        },
        {
          path: "productNotFound",
          element: <ProductNotFound />
        },
        {
          path: "*",
          element: <NoPage />
        },
      ]
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return ( <RouterProvider router={router} />)
}

export default Routers;