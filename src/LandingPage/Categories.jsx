import {
  bedIcon,
  chairIcon,
  cupboardIcon,
  lampIcon,
  sofaIcon,
  tableIcon,
  stoolIcon,
  kitchenCabinetIcon, cabinetIcon, flowerVaseIcon, furnitureStylesIcon,
} from "../assets";
import DelayedSurface from "../components/animationComponents/DelayedSurface";
import ScrollSurface from "../components/animationComponents/ScrollSurface";

const Categories = () => {
  const categories = [
    {
      name: 'Chair',
      image: chairIcon,
    },
    {
      name: 'Bed',
      image: bedIcon,
    },
    {
      name: 'Sofa',
      image: sofaIcon,
    },
    {
      name: 'Table',
      image: tableIcon,
    },
    {
      name: 'Cupboard',
      image: cupboardIcon,
    },
    {
      name: 'Lamp',
      image: lampIcon,
    },
    {
      name: 'Stool',
      image: stoolIcon,
    },
    {
      name: 'Kitchen Cabinet',
      image: kitchenCabinetIcon,
    },
    {
      name: 'Cabinet',
      image: cabinetIcon,
    },
    {
      name: 'Flower Vase',
      image: flowerVaseIcon,
    },
    {
      name: 'Furniture Style',
      image: furnitureStylesIcon,
    },

  ]
  

  return (
    <ScrollSurface>
      <div className="flex flex-col xl:mx-[5rem] md:mx-[2rem] mx-[1rem] py-[0rem] xl:gap-[5rem] gap-[2rem] justify-center">
          <div className="flex justify-center items-center gap-5">
            <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
            <h2 className="md:text-[25px] text-[20px] font-bold text-lead"> Categories</h2>
            <div className="md:w-[50px] w-[40px] md:h-[3px] h-[2px] bg-lead"></div>
          </div>
        <div className="grid lg:grid-cols-6 grid-cols-3  justify-between items-center">
          {categories.map((category, index) => (
            <DelayedSurface key={index} index={index}>
              <div className="flex justify-center lg:gap-5 gap-0 items-center flex-col ">
                <div className="flex items-center justify-center py-[1.5rem] px-[1.5rem] rounded-[0.625rem]">
                  <img className="lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] object-contain" src={category.image} alt="" />
                </div>
                <p className="font-semibold text-bGrey text-center lg:text-left text-[17px]"> {category.name} </p>
              </div> 
            </DelayedSurface>
          ))}
        </div>
      </div>
    </ScrollSurface>
  );
};

export default Categories;
