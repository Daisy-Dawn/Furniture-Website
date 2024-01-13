import { createContext, useState } from "react";
import blogCardData from "../data/BlogList";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) =>{
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
 
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setSearchTerm(''); // Reset searchTerm when a category is selected
    };
 
    return (
        <CategoryContext.Provider value={{category, setCategory: handleCategoryChange, searchTerm, setSearchTerm, blogCardData}}>
            {children}
        </CategoryContext.Provider>
    )
 }

