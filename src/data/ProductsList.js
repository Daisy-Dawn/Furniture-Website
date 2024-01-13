import {highlight1, chair6, lights, chair1, bed1, sofa3, sofa4, kitchen1, furnitureStyles3, bed3, desk,  chair7,
highlight2, sofa1, sofa5, flower1, flower2, sofa2, chair3, bed, chair4,
} from '../assets'


const ProductList = [
    {
        id: 1,
        image: highlight1,
        price: "$100.00",
        name: "Comfortable Chair",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "highlights"
    },
    {
        id: 2,
        image: lights,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "lights",
        feature: "highlights"
    },
    {
        id: 3,
        image: chair3,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts"
    },
    {
        id: 4,
        image: bed1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "bedFrame",
        feature: "newProducts"
    },
    {
        id: 5,
        image: sofa3,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "newProducts"
    },
    {
        id: 6,
        image: chair1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts"
    },
    {
        id: 7,
        image: sofa4,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "newProducts"
    },
    {
        id: 8,
        image: kitchen1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "kitchen",
        feature: "newProducts"
    },
    {
        id: 9,
        image: furnitureStyles3,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "furnitureStyles",
        feature: "newProducts"
    },
    {
        id: 10,
        image: desk,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts"
    },
    {
        id: 11,
        image: chair7,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts"
    },
    {
        id: 12,
        image: bed3,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "bedFrame",
        feature: "newProducts"
    },
    {
        id: 13,
        image: bed,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts"
    },
    {
        id: 14,
        image: chair4,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "bedFrame",
        feature: "newProducts"
    },
    {
        id: 15,
        image: chair6,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "furnitureStyles",
        feature: "furnitureStyles"
    },
    {
        id: 16,
        image: sofa1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "productOfWeek"
    },
    {
        id: 17,
        image: sofa5,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "productOfWeek"
    },
    {
        id: 18,
        image: flower1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "flowervase",
        feature: "productOfWeek"
    },
    {
        id: 19,
        image: flower2,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "flowerVase",
        feature: "productOfWeek"
    },
    {
        id: 20,
        image: highlight2,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "highlights2"
    },
    {
        id: 21,
        image: sofa2,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "limitedOffer"
    },
    
    
]

export default ProductList;
