import { CategoryProvider } from '../BlogPage/CategoryContext';
import BlogDetails from '../BlogPage/BlogDetails'

const Blog = () => {
  return (
    <div>
      
      <CategoryProvider>
        <div>
          <BlogDetails />
        </div>
      </CategoryProvider>
    </div>
  )
}

export default Blog