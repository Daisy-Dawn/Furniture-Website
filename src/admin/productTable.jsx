
import { useEffect, useState } from "react";


const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = () => {
            fetch("https://freefurnitura.000webhostapp.com/reactApiPhp/api/stoolList.php")
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

                    <div className="">{items.price}</div>
                    <div className="">{items.category}</div>
                    <div className="">
                        <img src={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${items.image}`} height={30} width={40} alt={items.name} />
                        {/* <img src={`https://freefurnitura.000webhostapp.com/reactApiPhp/${items.image}`} height={30} width={40} /> */}
                    </div>
                </div>
            ))}
        </div>



    )
};
export default ProductTable;
