import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BlogHero from '../BlogPage/BlogHero'
import BlogCardGroup from "./BlogCardGroup";
import { CategoryContext } from "./CategoryContext";
import SideBar from "./SideBar";
import { Flex, Spin } from 'antd';

const BlogDetails = () => {
  const { 
    isLoading, 
    error} = useContext(CategoryContext); //global data from the context api
  const { id } = useParams();

  return (
    <>
      {
        isLoading ? 
          <div className='max-w-max mx-auto my-24'>
            <Flex align="center" gap="middle">
              <Spin tip="Loading" size="large" />
            </Flex>
          </div> : 
        error ? 
          <div className='max-w-max mx-auto my-24'>Error: {error.message}</div> :
        <>
          <BlogHero />
          <section className="my-10 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-10 xl:px-[5rem] md:px-[2rem] px-[1rem] xl:py-[5rem] md:py-[3rem] py-[2rem]">
            <BlogCardGroup blogId={id} />
            <SideBar />
          </section>
        </>
      }
    </>
  )
}

export default BlogDetails;