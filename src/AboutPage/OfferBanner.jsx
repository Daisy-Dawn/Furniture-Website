import { aboutArrow } from "../assets";
import Button from '../components/Button';
import ScrollSurface from "../components/animationComponents/ScrollSurface";



const OfferBanner = () => {
  return (
        <section className="bg-aboutBanner bg-cover bg-no-repeat bg-center flex justify-center items-center md:justify-start relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-aboutBanner2">
            <ScrollSurface>
                <div className="ml-7 py-7 w-max flex flex-col items-center relative z-10">
                    <h2 className="text-white text-3xl sm:text-[2rem] md:text-[3.125rem] font-bold mb-2 leading-[3.75rem]">
                        UP TO 40% OFF
                    </h2>
                    <div className="w-max mb-8">
                        <h2 className="relative z-10 text-[25px] font-bold text-lead"> Modern furniture</h2>
                        <div className=" w-full h-[6px] bg-white transform -translate-y-3"></div>
                    </div>
                    <Button text="Shop Now" />
                    <div className="animate-pulse w-full max-w-[9.3666875rem] transform -translate-x-16 -translate-y-4">
                        <img src={aboutArrow} alt="arrow svg" />
                    </div>
                </div>
            </ScrollSurface>
        </section>
  )
}

export default OfferBanner;