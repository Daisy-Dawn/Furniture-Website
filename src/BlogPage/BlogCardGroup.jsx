import { useEffect, useContext } from 'react';
import { CategoryContext } from "./CategoryContext";
import BlogCard from "../components/BlogCard";
import blogCardData from '../data/BlogList';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCardGroup = ({id}) => {
    const { category, searchTerm, currentPage: contextCurrentPage, setCurrentPage} = useContext(CategoryContext); //global data from the context api

    useEffect(() =>{
      if(id){
        const blogIndex = blogCardData.findIndex(blog => blog.id.toString() === blog.id);
        if(blogIndex >= 0){
          const pageNumber = Math.ceil((blogIndex + 1) / 3);
          setCurrentPage(pageNumber);
        }
      }
    }, [id, setCurrentPage]);

    const filteredBlogs = blogCardData.filter(blog =>{
      let displayBlog = true;
      // Check if a specific category is selected
      if (category) {
        displayBlog = blog.category === category;
      }
      // Check if there is an active search term
      if (searchTerm) {
        displayBlog = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return displayBlog;
    } );
    const containsBlogs = filteredBlogs.length > 0;
    const totalPages = Math.ceil(filteredBlogs.length / 3); //get the total of pages after dividing by 3
    const blogsForCurrentPage = filteredBlogs.slice((contextCurrentPage - 1) * 3, contextCurrentPage * 3); //get the 3 blogs that will be displayed per page using slice method
   
    return (
      <div className="col-span-2 flex flex-col gap-16">

      {containsBlogs ? (
            // Render the list of blogs if there are any
            blogsForCurrentPage.map((blog, index) => (
              <BlogCard
                key={index}
                banner={blog.banner}
                date={blog.date}
                bannerDescription={blog.bannerDescription}
                author={blog.author}
                title={blog.title}
                description={blog.description}
              />
            ))
          ) : (
            // Render a message if no blogs are found
            <div className="text-center">
              <p className="text-lg text-bGrey font-bold">
                No blogs found containing the search term "{searchTerm}".
              </p>
            </div>
          )}
        <div className='flex gap-12 justify-center'>
            <button className='group' onClick={() => setCurrentPage(prevPage => prevPage > 1 ? prevPage - 1 : 1)} disabled={contextCurrentPage === 1}><FaLongArrowAltLeft className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-2xl md:text-3xl' /></button>
            <p className='text-bGrey text-base font-bold'>{contextCurrentPage} of {totalPages} pages</p>
            <button className='group' onClick={() => setCurrentPage(prevPage => prevPage < totalPages ? prevPage + 1 : totalPages)} disabled={contextCurrentPage === totalPages}><FaLongArrowAltRight className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-xl sm:text-2xl md:text-3xl' /></button>
        </div>
      </div>
    );
}

export default BlogCardGroup;