import { createContext, useState } from "react";
import blogCardData from "../data/BlogList";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) =>{
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
 
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setSearchTerm(''); // Reset searchTerm when a category is selected
        setCurrentPage(1); //Reset the current page to 1
    };
 
    return (
        <CategoryContext.Provider value={{category, setCategory: handleCategoryChange, searchTerm, setSearchTerm, currentPage, setCurrentPage, blogCardData}}>
            {children}
        </CategoryContext.Provider>
    )
 }

