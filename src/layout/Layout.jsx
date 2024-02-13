import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { CategoryProvider } from '../BlogPage/CategoryContext';


const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <Header />
        <div>
          <CategoryProvider>
            <Outlet />  
          </CategoryProvider>
        </div>
        <Footer />
    </>
  )
}

export default Layout;