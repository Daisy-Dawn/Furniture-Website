
import BlogCardGroup from "./BlogCardGroup";
import { CategoryProvider } from "./CategoryContext";
import SideBar from "./SideBar";

const BlogDetails = () => {
  return (
    <CategoryProvider>
      <section className="my-12 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-10 xl:px-[5rem] md:px-[2rem] px-[1rem] xl:py-[5rem] md:py-[3rem] py-[2rem]">
        <BlogCardGroup />
        <SideBar />
      </section>
    </CategoryProvider>
  )
}

export default BlogDetails;