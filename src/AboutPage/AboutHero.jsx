import Surface from "../components/animationComponents/Surface";

const About = () => {
  return (
    <section className="px-[2rem] md:px-[3rem] lg:px-[5rem] mt-12 text-center">
      <Surface>
          <h2 className="text-lead text-[50px] font-bold mb-8 leading-[60px]">
              About
          </h2>
      </Surface>
      <Surface>
        <p className="text-xl text-bGrey font-semibold w-full max-w-[48.4375rem] mx-auto">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item.
        </p>
      </Surface>
    </section>
  )
}

export default About;