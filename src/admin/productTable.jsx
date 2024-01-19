// import { useEffect, useState } from "react";


const ProductTable = () => {
    // const [products, setProducts] = useState();

    // useEffect(() => {
    //     async function getProduct() {
    //         const promise = "http://localhost/reactApiPhp/api/productsList.php";
    //         promise.then(function (product) {
    //             setProducts(product)
    //             console.log(product);
    //         }, function (error) {
    //             console.log(error);
    //         });

    //     }
    //     getProduct();
    // }, [])


    return (
        <div className="flex flex-col justify-center  min-h-screen xl:mx-[4rem] 2xl:mx-[8rem] lg:mx-[2rem] mx-[1rem] mb-[5rem]  font-nunito">
            {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">Title</th>
                                        <th scope="col" className="px-6 py-4">Pricing</th>
                                        <th scope="col" className="px-6 py-4">Ratings</th>
                                        <th scope="col" className="px-6 py-4">Category</th>
                                        <th scope="col" className="px-6 py-4">Image</th>
                                        <th scope="col" className="px-6 py-4">Description</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4">DateTime</th>
                                        <th scope="col" className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                        <td className="whitespace-nowrap px-6 py-4">clothing</td>
                                        <td className="whitespace-nowrap px-6 py-4">image</td>
                                        <td className="whitespace-nowrap px-6 py-4">description</td>
                                        <td className="whitespace-nowrap px-6 py-4">in Stock</td>
                                        <td className="whitespace-nowrap px-6 py-4">2024</td>
                                        <td> <button
                                            type="button"
                                            style={{
                                                backgroundColor: "red",
                                                color: "black",
                                                padding: "5px",
                                                marginTop: "10px",

                                            }}
                                        >
                                            DELETE
                                        </button> </td>
                                    </tr>
                                    {/* <tr className="border-b dark:border-neutral-500">
                                        {products.map((items, index) => (
                                            <div key={index}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.title}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.price}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.ratings}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.category}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.image}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.discription}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.status == 1 ? "In Stock" : "Out of Stock"}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{items.timestamp}</td>
                                                <td> <button
                                                    type="button"
                                                    style={{
                                                        backgroundColor: "red",
                                                        color: "black",
                                                        padding: "5px",
                                                        marginTop: "10px",

                                                    }}
                                                >
                                                    DELETE
                                                </button> </td>

                                            </div>
                                        ))}


                                    </tr> */}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductTable;