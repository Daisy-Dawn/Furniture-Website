
import { useEffect, useState } from "react";


const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = () => {
            fetch("https://freefurnitura.000webhostapp.com/reactApiPhp/api/allProductList.php")
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setProducts(data);
                    console.log(data);
                })
                .catch(error => {
                    console.error(error)
                });
        }

        getProduct();
    }, [])


    return (
        // <>
        //     {/* for the table for admin */}
        // </>

        <div className="">
            {products.map((items, index) => (
                <div key={index}>
                    <div className="">{index + 1}</div>
                    <div className="">{items.name}</div>
                    {/* <div className="">{items.description}</div> */}
                    {/* <div className="">{items.price}</div> */}
                    <div className="">{items.category}</div>
                    <div className="">{items.author}</div>
                    <div className="">
                        {/* <img src={`http://localhost/reactApiPhp/images/${items.image}`} height={30} width={40} alt={items.name} /> */}
                        <img src={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${items.image}`} height={100} width={100} />
                    </div>
                </div>
            ))}
        </div>



    )
};
export default ProductTable;
