import Heading from "../components/Heading";
import TestimonialCard from "../components/TestimonialCard";
import { commentPic1, commentPic2 } from '../assets';
import ScrollSurface from "../components/animationComponents/ScrollSurface";


const testimonials = [
    {
        name: "Michella Anna",
        title: "The results given are very satisfying",
        comment: `“I love the unique and stylish furniture designs available on this website. They offer a refreshing change from the bland and generic options available at most furniture stores..”`,
        job: "Product Manager",
        pic: commentPic1
    },
    {
        name: "Lissa Embards",
        title: "The service provided is very good and friendly",
        comment: `“I love the unique and stylish furniture designs available on this website. They offer a refreshing change from the bland and generic options available at most furniture stores..”`,
        job: "Housewife",
        pic: commentPic2
    }
]
const Testimonial = () => {
  return (
    <ScrollSurface>
        <section className="mx-[2rem] md:mx-[3rem] lg:mx-[5rem] my-12 flex flex-col gap-20">
            <Heading title="Our Customers Are Saying" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {testimonials.map((testimonial, index) => <TestimonialCard key={index} name={testimonial.name} title={testimonial.title} opinion={testimonial.comment} job={testimonial.job} pic={testimonial.pic} />)}
            </div>
        </section>
    </ScrollSurface>
  )
}

export default Testimonial;