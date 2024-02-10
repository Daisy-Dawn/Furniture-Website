import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout;