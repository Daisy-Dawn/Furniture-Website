import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) =>{
    const [blogData, setBlogData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
 
    //Fetch blog data from api
    useEffect(()=>{
        fetch("https://freefurnitura.000webhostapp.com/reactApiPhp/api/blogList.php")
          .then(response =>{
            if(!response.ok){
                throw new Error("Network response was not okay");
            }
            setIsLoading(false);
            return response.json();
          })
          .then(data => setBlogData(data))
          .catch(error => {
            setIsLoading(false);
            setError(error);
            });
    },[]);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setSearchTerm(''); // Reset searchTerm when a category is selected
        setCurrentPage(1); //Reset the current page to 1
    };
 
    return (
        <CategoryContext.Provider value={{blogData, category, setCategory: handleCategoryChange, searchTerm, setSearchTerm, currentPage, setCurrentPage, isLoading, error }}>
            {children}
        </CategoryContext.Provider>
    )
 }

