import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { CategoryProvider } from '../BlogPage/CategoryContext';
import { useEffect } from 'react';

const Layout = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/fusmdahpxudevzetzcexlknbs90w5pyx.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
        <ScrollToTop />
        <Header />
        <div>
          <CategoryProvider>
            <Outlet /> 
            {/* Tidio live chat button */}
            <div className="support-container">
                  </div> 
          </CategoryProvider>
        </div>
        <Footer />
    </>
  )
}

export default Layout;