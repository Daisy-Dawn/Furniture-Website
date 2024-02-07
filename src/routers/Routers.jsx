import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  LandingPage, About, Shop, Contact, Blog, Cart, Wishlist, ProductDetails, Signup, Login, NoPage, ProductNotFound, BlogDetails,
  CheckoutForm, ProductTable, BlogProductList, Products, ForgotPassword1, ForgotPassword2, ContinueFlutterwavePayment
} from '../pages/index';


import Layout from '../layout/Layout';
import AdminLayout from '../AdminDashboard/AdminLayout';
import {Dashboard, Orders, ProductsDashboard, Categories, Customers, Reports, Coupons, Inbox, KnowledgeBase,
ProductUpdate, PersonalSettings, GlobalSettings} from '../AdminDashboard'

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
          path: "bedframeform",
          element: <Products />,
        },
        {
          path: "shop/:id",
          element: <ProductDetails />
        },
        {
          path: "blogForm",
          element: <BlogProductList />
        },
        {
          path: "producttable",
          element: <ProductTable />
        },
        {
          path: "blog/:id",
          element: <BlogDetails />
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
          path: "cart/checkout",
          element: <CheckoutForm />
        },
        {
          path: "/cart/checkout/continuepayment",
          element: <ContinueFlutterwavePayment />
        },
        {
          path: "wishlist",
          element: <Wishlist />
        },
        {
          path: "login/forgotpassword",
          element: <ForgotPassword1 />
        },
        {
          path: "login/resetPassword",
          element: <ForgotPassword2 />
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
    //admin
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />
        },
        {
          path: "orders",
          element: <Orders />
        },
        {
          path: "productsdashboard",
          element: <ProductsDashboard />
        },
        {
          path: "categories",
          element: <Categories />
        },
        {
          path: "customers",
          element: <Customers />
        },
        {
          path: "reports",
          element: <Reports />
        },
        {
          path: "coupons",
          element: <Coupons />
        },
        {
          path: "inbox",
          element: <Inbox />
        },
        {
          path: "knowledgebase",
          element: <KnowledgeBase />
        },
        {
          path: "productupdate",
          element: <ProductUpdate />
        },
        {
          path: "personalsettings",
          element: <PersonalSettings />
        },
        {
          path: "globalsettings",
          element: <GlobalSettings />
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

  return (<RouterProvider router={router} />)
}

export default Routers;