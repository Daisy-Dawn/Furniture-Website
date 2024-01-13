//blog images
import { bar1,bar2,bar3,bar4,bar5,bar6,bar7,bar8,bar9,bar10,bar11,cabinet1,cabinet2,cabinet3,cabinet4,cabinet5,cabinet6,cabinet7,coffee1,coffee2,coffee3,coffee4,coffee5,coffee6,coffee7,kitchen1,kitchen2,kitchen3,kitchen4,kitchen5,kitchen6,kitchen7,kitchen8,office1,office2,office3,office4,office5,office6 } from "../assets";
//Blog data
const blogCardData = [
    {
        id: 1,
        category: "bar stool",
        banner: bar1,
        date: "10 Jan,2024",
        bannerDescription: "Bar Stool, Elegant Design",
        author: "Sophie Turner",
        title: "Elegant Bar Stool Designs",
        description: "Explore elegant bar stool designs that will elevate your dining experience."
    },
    {
        id: 2,
        category: "bar stool",
        banner: bar2,
        date: "12 Jan,2024",
        bannerDescription: "Bar Stool, Comfortable Seating",
        author: "John Doe",
        title: "Comfortable Bar Stool Seating",
        description: "Find the perfect balance between comfort and style with our range of bar stools."
    },
    {
        id: 3,
        category: "bar stool",
        banner: bar3,
        date: "15 Jan,2024",
        bannerDescription: "Bar Stool, Modern Design",
        author: "Emily Clark",
        title: "Modern Bar Stool Designs",
        description: "Discover modern bar stool designs that blend functionality and fashion."
    },
    {
        id: 4,
        category: "bar stool",
        banner: bar4,
        date: "18 Jan,2024",
        bannerDescription: "Bar Stool, Unique Features",
        author: "Alex Johnson",
        title: "Unique Features of Bar Stools",
        description: "Explore bar stools with unique features that set them apart from the crowd."
    },
    {
        id: 5,
        category: "bar stool",
        banner: bar5,
        date: "20 Jan,2024",
        bannerDescription: "Bar Stool, Versatile Usage",
        author: "Linda Brown",
        title: "Versatile Usage of Bar Stools",
        description: "Bar stools are versatile pieces that can be used in various settings, from bars to restaurants."
    },
    {
        id: 6,
        category: "bar stool",
        banner: bar6,
        date: "22 Jan,2024",
        bannerDescription: "Bar Stool, High-End Materials",
        author: "Mark Spencer",
        title: "High-End Materials for Bar Stools",
        description: "Upgrade your bar stool collection with high-end materials for a luxurious look."
    },
    {
        id: 7,
        category: "bar stool",
        banner: bar7,
        date: "25 Jan,2024",
        bannerDescription: "Bar Stool, Customizable Options",
        author: "Sarah Peterson",
        title: "Customizable Options for Bar Stools",
        description: "Choose from a variety of customizable options to create the perfect bar stool for your needs."
    },
    {
        id: 8,
        category: "bar stool",
        banner: bar8,
        date: "28 Jan,2024",
        bannerDescription: "Bar Stool, Durable Construction",
        author: "Oliver Smith",
        title: "Durable Construction for Bar Stools",
        description: "Invest in durable construction for your bar stools to ensure they last for years."
    },
    {
        id: 9,
        category: "bar stool",
        banner: bar9,
        date: "31 Jan,2024",
        bannerDescription: "Bar Stool, Unique Finishes",
        author: "Elizabeth Taylor",
        title: "Unique Finishes for Bar Stools",
        description: "Explore unique finishes for your bar stools to add a touch of personality to your space."
    },
    {
        id: 10,
        category: "bar stool",
        banner: bar10,
        date: "02 Feb,2024",
        bannerDescription: "Bar Stool, Stylish Accents",
        author: "James Smith",
        title: "Stylish Accents for Bar Stools",
        description: "Add a pop of color to your bar stool with our stylish accent colors."
    },
    {
        id: 11,
        category: "bar stool",
        banner: bar11,
        date: "05 Feb,2024",
        bannerDescription: "Bar Stool, Sleek Lines",
        author: "Jennifer Davis",
        title: "Sleek Lines for Bar Stools",
        description: "Experience the sleek lines of our bar stools for a modern, minimalist look."
    },
    {
        id: 12,
        category: "cabinet",
        banner: cabinet1,
        date: "07 Feb,2024",
        bannerDescription: "Cabinet, Modern Design",
        author: "John Doe",
        title: "Modern Design for Cabinets",
        description: "Explore modern designs for cabinets that blend seamlessly with your home decor."
    },
    {
        id: 13,
        category: "cabinet",
        banner: cabinet2,
        date: "09 Feb,2024",
        bannerDescription: "Cabinet, Eco-Friendly Materials",
        author: "Jane Smith",
        title: "Eco-Friendly Materials for Cabinets",
        description: "Choose eco-friendly materials for your cabinets to reduce environmental impact."
    },
    {
        id: 14,
        category: "cabinet",
        banner: cabinet3,
        date: "11 Feb,2024",
        bannerDescription: "Cabinet, Wooden Finish",
        author: "Robert Johnson",
        title: "Wooden Finish for Cabinets",
        description: "Enhance your kitchen with wooden finish cabinets that offer a rustic charm."
    },
    {
        id: 15,
        category: "cabinet",
        banner: cabinet4,
        date: "13 Feb,2024",
        bannerDescription: "Cabinet, Glass Front",
        author: "Emily Brown",
        title: "Glass Front for Cabinets",
        description: "Showcase your cookware with glass front cabinets that let light in."
    },
    {
        id: 16,
        category: "cabinet",
        banner: cabinet5,
        date: "15 Feb,2024",
        bannerDescription: "Cabinet, White Color",
        author: "Michael Wilson",
        title: "White Color for Cabinets",
        description: "Create a clean, modern look with white cabinets that complement any kitchen design."
    },
    {
        id: 17,
        category: "cabinet",
        banner: cabinet6,
        date: "17 Feb,2024",
        bannerDescription: "Cabinet, Black Color",
        author: "Patricia Taylor",
        title: "Black Color for Cabinets",
        description: "Add a touch of elegance to your kitchen with black cabinets."
    },
    {
        id: 18,
        category: "cabinet",
        banner: cabinet7,
        date: "19 Feb,2024",
        bannerDescription: "Cabinet, Stainless Steel",
        author: "Linda Thompson",
        title: "Stainless Steel for Cabinets",
        description: "Choose stainless steel cabinets for durability and easy maintenance."
    },
    {
        id: 19,
        category: "coffee table",
        banner: coffee1,
        date: "25 Feb,2024",
        bannerDescription: "Coffee Table, Modern Design",
        author: "John Doe",
        title: "Modern Coffee Tables for Your Home",
        description: "Discover the latest trends in modern coffee tables for your home."
    },
    {
        id: 20,
        category: "coffee table",
        banner: coffee2,
        date: "27 Feb,2024",
        bannerDescription: "Coffee Table, Rustic Style",
        author: "Jane Smith",
        title: "Rustic Coffee Tables for a Cozy Atmosphere",
        description: "Create a cozy atmosphere in your home with rustic coffee tables."
    },
    {
        id: 21,
        category: "coffee table",
        banner: coffee3,
        date: "29 Feb,2024",
        bannerDescription: "Coffee Table, Glass Top",
        author: "Robert Johnson",
        title: "Glass Top Coffee Tables for a Stylish Look",
        description: "Add a touch of elegance to your home with glass top coffee tables."
    },
    {
        id: 22,
        category: "coffee table",
        banner: coffee4,
        date: "02 Mar,2024",
        bannerDescription: "Coffee Table, Wooden",
        author: "Emily Brown",
        title: "Wooden Coffee Tables for a Warm Ambiance",
        description: "Warm up your home with wooden coffee tables that add a touch of nature."
    },
    {
        id: 23,
        category: "coffee table",
        banner: coffee5,
        date: "04 Mar,2024",
        bannerDescription: "Coffee Table, Round",
        author: "Michael Wilson",
        title: "Round Coffee Tables for a Unique Look",
        description: "Stand out with round coffee tables that add a unique touch to your space."
    },
    {
        id: 24,
        category: "coffee table",
        banner: coffee6,
        date: "06 Mar,2024",
        bannerDescription: "Coffee Table, Large Size",
        author: "Patricia Taylor",
        title: "Large Coffee Tables for a Spacious Living Room",
        description: "Expand your living room with large coffee tables that provide ample space."
    },
    {
        id: 25,
        category: "coffee table",
        banner: coffee7,
        date: "08 Mar,2024",
        bannerDescription: "Coffee Table, Small Size",
        author: "Linda Thompson",
        title: "Small Coffee Tables for Compact Spaces",
        description: "Perfect for compact spaces, small coffee tables add a touch of elegance."
    },
    {
        id: 26,
        category: "kitchen furniture",
        banner: kitchen1,
        date: "10 Mar,2024",
        bannerDescription: "Kitchen Cabinet, Modern Design",
        author: "John Doe",
        title: "Modern Kitchen Cabinets for Your Home",
        description: "Discover the latest trends in modern kitchen cabinets for your home."
    },
    {
        id: 27,
        category: "kitchen furniture",
        banner: kitchen2,
        date: "12 Mar,2024",
        bannerDescription: "Kitchen Island, Rustic Style",
        author: "Jane Smith",
        title: "Rustic Kitchen Islands for a Cozy Atmosphere",
        description: "Create a cozy atmosphere in your kitchen with rustic islands."
    },
    {
        id: 28,
        category: "kitchen furniture",
        banner: kitchen3,
        date: "14 Mar,2024",
        bannerDescription: "Kitchen Sink, Glass Top",
        author: "Robert Johnson",
        title: "Glass Top Kitchen Sinks for a Stylish Look",
        description: "Add a touch of elegance to your kitchen with glass top sinks."
    },
    {
        id: 29,
        category: "kitchen furniture",
        banner: kitchen4,
        date: "16 Mar,2024",
        bannerDescription: "Kitchen Table, Wooden",
        author: "Emily Brown",
        title: "Wooden Kitchen Tables for a Warm Ambiance",
        description: "Warm up your kitchen with wooden tables that add a touch of nature."
    },
    {
        id: 30,
        category: "kitchen furniture",
        banner: kitchen5,
        date: "18 Mar,2024",
        bannerDescription: "Kitchen Chairs, Round",
        author: "Michael Wilson",
        title: "Round Kitchen Chairs for a Unique Look",
        description: "Stand out with round kitchen chairs that add a unique touch to your space."
    },
    {
        id: 31,
        category: "kitchen furniture",
        banner: kitchen6,
        date: "20 Mar,2024",
        bannerDescription: "Kitchen Appliances, Large Size",
        author: "Patricia Taylor",
        title: "Large Kitchen Appliances for a Spacious Kitchen",
        description: "Expand your kitchen with large appliances that provide ample space."
    },
    {
        id: 32,
        category: "kitchen furniture",
        banner: kitchen7,
        date: "22 Mar,2024",
        bannerDescription: "Kitchen Utensils, Small Size",
        author: "Linda Thompson",
        title: "Small Kitchen Utensils for Compact Spaces",
        description: "Perfect for compact spaces, small kitchen utensils add a touch of elegance."
    },
    {
        id: 33,
        category: "kitchen furniture",
        banner: kitchen8,
        date: "24 Mar,2024",
        bannerDescription: "Kitchen Decor, Elegant",
        author: "James Anderson",
        title: "Elegant Kitchen Decors for a Sophisticated Look",
        description: "Add a touch of sophistication to your kitchen with elegant decor items."
    },
    {
        id: 34,
        category: "office chair",
        banner: office1,
        date: "26 Mar,2024",
        bannerDescription: "Executive Office Chair, Leather",
        author: "John Doe",
        title: "Leather Executive Office Chairs for a Professional Look",
        description: "Upgrade your workspace with leather executive office chairs."
    },
    {
        id: 35,
        category: "office chair",
        banner: office2,
        date: "28 Mar,2024",
        bannerDescription: "Task Chair, Adjustable",
        author: "Jane Smith",
        title: "Adjustable Task Chairs for Comfort and Productivity",
        description: "Boost your productivity with adjustable task chairs."
    },
    {
        id: 36,
        category: "office chair",
        banner: office3,
        date: "30 Mar,2024",
        bannerDescription: "Swivel Office Chair, Ergonomic",
        author: "Robert Johnson",
        title: "Ergonomic Swivel Office Chairs for Long Work Hours",
        description: "Stay comfortable while working long hours with ergonomic swivel office chairs."
    },
    {
        id: 37,
        category: "office chair",
        banner: office4,
        date: "02 Apr,2024",
        bannerDescription: "Computer Desk Chair, High Back",
        author: "Emily Brown",
        title: "High Back Computer Desk Chairs for Extra Support",
        description: "Get extra support for your back with high back computer desk chairs."
    },
    {
        id: 38,
        category: "office chair",
        banner: office5,
        date: "04 Apr,2024",
        bannerDescription: "Office Chair, Metal",
        author: "Michael Wilson",
        title: "Metal Office Chairs for Durability",
        description: "Choose durability with metal office chairs."
    },
    {
        id: 39,
        category: "office chair",
        banner: office6,
        date: "06 Apr,2024",
        bannerDescription: "Office Chair, Modern Design",
        author: "Patricia Taylor",
        title: "Modern Office Chairs for a Contemporary Look",
        description: "Add a touch of modern design to your workspace with our office chairs."
    }
]

export default blogCardData;
