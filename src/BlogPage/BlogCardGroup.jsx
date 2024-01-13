import { useState, useContext } from 'react';
import { CategoryContext } from "./CategoryContext";
import BlogCard from "../components/BlogCard";
import blogCardData from '../data/BlogList';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCardGroup = () => {
    const { category, searchTerm} = useContext(CategoryContext); //global data from the context api
    const [currentPage, setCurrentPage] = useState(1); //state to hold current page
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
    const totalPages = Math.ceil(filteredBlogs.length / 3); //get the total of pages after dividing by 3
    const blogsForCurrentPage = filteredBlogs.slice((currentPage - 1) * 3, currentPage * 3); //get the 3 blogs that will be displayed per page using slice method
   
    return (
      <div className="col-span-2 flex flex-col gap-12">
        {blogsForCurrentPage.map((blog, index) => <BlogCard key={index} banner={blog.banner} date={blog.date} bannerDescription={blog.bannerDescription} author={blog.author} title={blog.title} description={blog.description} />)} 
        <div className='flex gap-12 justify-center'>
            <button className='group' onClick={() => setCurrentPage(prevPage => prevPage > 1 ? prevPage - 1 : 1)} disabled={currentPage === 1}><FaLongArrowAltLeft className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-2xl md:text-3xl' /></button>
            <button className='group' onClick={() => setCurrentPage(prevPage => prevPage < totalPages ? prevPage + 1 : totalPages)} disabled={currentPage === totalPages}><FaLongArrowAltRight className='group-disabled:text-bGrey group-disabled:opacity-50 group-disabled:cursor-not-allowed transition-all duration-300 text-xl sm:text-2xl md:text-3xl' /></button>
        </div>
      </div>
    );
}

export default BlogCardGroup;