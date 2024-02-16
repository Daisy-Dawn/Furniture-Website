import { ourShop } from "../assets/index";
import Surface from "../components/animationComponents/Surface";

const OurShop = () => {
  return (
    <section className="mx-[2rem] md:mx-[3rem] lg:mx-[5rem] my-12 gap-12 sm:gap-14 md:gap-16 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
        <Surface>
          <div className=" relative w-full sm:max-w-[40rem] md:max-w-[49.0625rem] p-3 before:absolute before:w-[25%] before:h-[35%] before:border-l-[0.1875rem] before:border-l-solid before:border-l-[#644321] before:border-b-[0.1875rem] before-b-solid before:border-b-[#644321] before:bottom-0 before:left-0 transform  after:absolute after:w-[25%] after:h-[35%] after:border-r-[0.1875rem] after:border-r-solid after:border-r-[#644321] after:border-t-[0.1875rem] after:border-t-solid after:border-t-[#644321] after:top-0 after:right-0  ">
              <img src={ourShop} className="rounded-[0.625rem] skeleton object-cover" alt="shop image" />
          </div>
        </Surface>
        <div className="w-full max-w-[41.5625rem]">
          <Surface>
            <h2 className="mb-6 text-lead text-[25px] font-bold">Our shop</h2>
            <p className="mb-6 text-bGrey text-base">Furniture consists of large objects such as tables, chairs, or beds that are used in a room for sitting or lying on or for putting things on or in. Each piece of furniture in their home suited the style of the house. Synonyms: household goods, furnishings, fittings, house fittings More Synonyms of furniture. </p>
            <p className="text-bGrey text-base">Furniture design is a specialized field that combines utility and style. Furniture is considered by many interior designers to be one of the most significant parts of any interior space. It adds not only functionality and utility to a space, but also style and personality. </p>
          </Surface>
        </div>
    </section>
  )
}

export default OurShop;