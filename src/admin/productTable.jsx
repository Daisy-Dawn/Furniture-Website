
import { useState } from "react";
import { useSelector } from "react-redux";
import { productsInCartSelector } from "../features/addToCartSlice";


const ProductTable = () => {
    const [products, setProducts] = useState([]);
    // const [error, setError] = useState("");
    const totalProductToBeBought = useSelector(
        productsInCartSelector
    );
    setProducts(totalProductToBeBought)


    // useEffect(() => {
    //     const totalProductToBeBought = JSON.stringify(localStorage.getItem('cartItems')) || [];
    //     setProducts(totalProductToBeBought)
    //     const getProduct = () => {
    //         fetch("http://localhost/reactApiPhp/api/allProductList.php")
    //             .then(response => {
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 setProducts(data);
    //                 console.log(data);
    //             })
    //             .catch(error => {
    //                 console.error(error)
    //             });
    //     }

    //     getProduct();
    // }, [])


    return (
        // <>
        //     {/* for the table for admin */}
        // </>
        <div>
            <h1>Items from localStorage</h1>
            <ul>
                {/* Render each item */}
                {products.map((item, index) => (
                    <li key={index}>Value at index {index}: {item}</li>
                ))}
            </ul>
        </div>

        // <div className="">

        //     {products.map((items, index) => (
        //         <div key={index}>
        //             <div className="">{index + 1}</div>
        //             <div className="">{items.name}</div>
        //             {/* <div className="">{items.description}</div> */}
        //             {/* <div className="">{items.price}</div> */}
        //             <div className="">{items.category}</div>
        //             <div className="">{items.author}</div>
        //             <div className="">
        //                 {/* <img src={`http://localhost/reactApiPhp/images/${items.image}`} height={30} width={40} alt={items.name} /> */}
        //                 <img src={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${items.image}`} height={100} width={100} />
        //             </div>
        //         </div>
        //     ))}
        // </div>



    )
};
export default ProductTable;
