//blog images
import { blog1, blog2, blog3, bar1,bar2,bar3,bar4,bar5,bar6,bar7,bar8,bar9,cabinet_1,cabinet_2,cabinet_3,cabinet_4,
    cabinet_5,cabinet_6,cabinet_7,cabinet_8,cabinet_9,cabinet_10,cabinet_11,coffee1_blog,coffee2_blog,coffee3_blog,
    coffee4_blog,coffee5_blog,coffee6_blog,coffee7_blog,kitchen_1,kitchen_2,kitchen_3,kitchen_4,kitchen_5,kitchen_6,kitchen_7,kitchen_8,office1,office2,office3,office4,office5,office6,office7,office8,office9,office10 } from "../assets";
//Blog data
const BlogList = [
    {
        id: 1,
        category: "bar stool",
        banner: bar1,
        date: "10 Jan,2024",
        bannerDescription: "Bar Stool, Elegant Design",
        author: "Sophie Turner",
        title: "Elegant Bar Stool Designs",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 2,
        category: "bar stool",
        banner: bar2,
        date: "12 Jan,2024",
        bannerDescription: "Bar Stool, Comfortable Seating",
        author: "John Doe",
        title: "Comfortable Bar Stool Seating",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 3,
        category: "bar stool",
        banner: bar3,
        date: "15 Jan,2024",
        bannerDescription: "Bar Stool, Modern Design",
        author: "Emily Clark",
        title: "Modern Bar Stool Designs",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 4,
        category: "bar stool",
        banner: bar4,
        date: "18 Jan,2024",
        bannerDescription: "Bar Stool, Unique Features",
        author: "Alex Johnson",
        title: "Unique Features of Bar Stools",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 5,
        category: "bar stool",
        banner: bar5,
        date: "20 Jan,2024",
        bannerDescription: "Bar Stool, Versatile Usage",
        author: "Linda Brown",
        title: "Versatile Usage of Bar Stools",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 6,
        category: "bar stool",
        banner: bar6,
        date: "22 Jan,2024",
        bannerDescription: "Bar Stool, High-End Materials",
        author: "Mark Spencer",
        title: "High-End Materials for Bar Stools",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 7,
        category: "bar stool",
        banner: bar7,
        date: "25 Jan,2024",
        bannerDescription: "Bar Stool, Customizable Options",
        author: "Sarah Peterson",
        title: "Customizable Options for Bar Stools",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 8,
        category: "bar stool",
        banner: bar8,
        date: "28 Jan,2024",
        bannerDescription: "Bar Stool, Durable Construction",
        author: "Oliver Smith",
        title: "Durable Construction for Bar Stools",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 9,
        category: "bar stool",
        banner: bar9,
        date: "31 Jan,2024",
        bannerDescription: "Bar Stool, Unique Finishes",
        author: "Elizabeth Taylor",
        title: "Unique Finishes for Bar Stools",
        description: "Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity with stools that epitomize functionality and sleek fashion. Unique features set our collection apart, offering versatile options for bars, restaurants, or home settings. Indulge in luxury with high-end materials and customizable choices to suit your individual needs. Invest in durable, long-lasting construction with finishes that add character and stylish accents for a vibrant touch. Experience minimalist modernity with our sleek, clean-lined bar stools."
    },
    {
        id: 10,
        category: "cabinet",
        banner: cabinet_1,
        date: "07 Feb,2024",
        bannerDescription: "Cabinet, Modern Design",
        author: "John Doe",
        title: "Modern Design for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 11,
        category: "cabinet",
        banner: cabinet_2,
        date: "09 Feb,2024",
        bannerDescription: "Cabinet, Eco-Friendly Materials",
        author: "Jane Smith",
        title: "Eco-Friendly Materials for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 12,
        category: "cabinet",
        banner: cabinet_3,
        date: "11 Feb,2024",
        bannerDescription: "Cabinet, Wooden Finish",
        author: "Robert Johnson",
        title: "Wooden Finish for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 13,
        category: "cabinet",
        banner: cabinet_4,
        date: "13 Feb,2024",
        bannerDescription: "Cabinet, Glass Front",
        author: "Emily Brown",
        title: "Glass Front for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 14,
        category: "cabinet",
        banner: cabinet_5,
        date: "15 Feb,2024",
        bannerDescription: "Cabinet, White Color",
        author: "Michael Wilson",
        title: "White Color for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 15,
        category: "cabinet",
        banner: cabinet_6,
        date: "17 Feb,2024",
        bannerDescription: "Cabinet, Black Color",
        author: "Patricia Taylor",
        title: "Black Color for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 16,
        category: "cabinet",
        banner: cabinet_7,
        date: "19 Feb,2024",
        bannerDescription: "Cabinet, Stainless Steel",
        author: "Linda Thompson",
        title: "Stainless Steel for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 17,
        category: "cabinet",
        banner: cabinet_8,
        date: "19 Feb,2024",
        bannerDescription: "Cabinet, Stainless Steel",
        author: "Linda Thompson",
        title: "Stainless Steel for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 18,
        category: "cabinet",
        banner: cabinet_9,
        date: "19 Feb,2024",
        bannerDescription: "Cabinet, Stainless Steel",
        author: "Linda Thompson",
        title: "Stainless Steel for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 19,
        category: "cabinet",
        banner: cabinet_10,
        date: "19 Feb,2024",
        bannerDescription: "Cabinet, Stainless Steel",
        author: "Linda Thompson",
        title: "Stainless Steel for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 20,
        category: "cabinet",
        banner: cabinet_11,
        date: "19 Feb,2024",
        bannerDescription: "Cabinet, Stainless Steel",
        author: "Linda Thompson",
        title: "Stainless Steel for Cabinets",
        description: "Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally conscious. Experience the rustic charm of wooden finishes or the sleek appeal of glass fronts that illuminate your interiors. Opt for the timeless elegance of white or the bold sophistication of black to make a statement in your kitchen. Stainless steel options provide durability and ease of maintenance. Each cabinet is crafted with attention to detail, ensuring a perfect blend of form and function for your storage needs."
    },
    {
        id: 21,
        category: "coffee table",
        banner: coffee1_blog,
        date: "25 Feb,2024",
        bannerDescription: "Coffee Table, Modern Design",
        author: "John Doe",
        title: "Modern Coffee Tables for Your Home",
        description: "Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops that add a touch of sophistication, or opt for the natural beauty of wooden tables to create a welcoming ambiance. Our round coffee tables offer a unique look, while large options provide ample space for gatherings. For smaller areas, our compact coffee tables are perfect, ensuring functionality without compromising on style. Each piece is thoughtfully crafted to enhance your home with a blend of comfort and contemporary flair."
    },
    {
        id: 22,
        category: "coffee table",
        banner: coffee2_blog,
        date: "27 Feb,2024",
        bannerDescription: "Coffee Table, Rustic Style",
        author: "Jane Smith",
        title: "Rustic Coffee Tables for a Cozy Atmosphere",
        description: "Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops that add a touch of sophistication, or opt for the natural beauty of wooden tables to create a welcoming ambiance. Our round coffee tables offer a unique look, while large options provide ample space for gatherings. For smaller areas, our compact coffee tables are perfect, ensuring functionality without compromising on style. Each piece is thoughtfully crafted to enhance your home with a blend of comfort and contemporary flair."
    },
    {
        id: 23,
        category: "coffee table",
        banner: coffee3_blog,
        date: "29 Feb,2024",
        bannerDescription: "Coffee Table, Glass Top",
        author: "Robert Johnson",
        title: "Glass Top Coffee Tables for a Stylish Look",
        description: "Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops that add a touch of sophistication, or opt for the natural beauty of wooden tables to create a welcoming ambiance. Our round coffee tables offer a unique look, while large options provide ample space for gatherings. For smaller areas, our compact coffee tables are perfect, ensuring functionality without compromising on style. Each piece is thoughtfully crafted to enhance your home with a blend of comfort and contemporary flair."
    },
    {
        id: 24,
        category: "coffee table",
        banner: coffee4_blog,
        date: "02 Mar,2024",
        bannerDescription: "Coffee Table, Wooden",
        author: "Emily Brown",
        title: "Wooden Coffee Tables for a Warm Ambiance",
        description: "Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops that add a touch of sophistication, or opt for the natural beauty of wooden tables to create a welcoming ambiance. Our round coffee tables offer a unique look, while large options provide ample space for gatherings. For smaller areas, our compact coffee tables are perfect, ensuring functionality without compromising on style. Each piece is thoughtfully crafted to enhance your home with a blend of comfort and contemporary flair."
    },
    {
        id: 25,
        category: "coffee table",
        banner: coffee5_blog,
        date: "04 Mar,2024",
        bannerDescription: "Coffee Table, Round",
        author: "Michael Wilson",
        title: "Round Coffee Tables for a Unique Look",
        description: "Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops that add a touch of sophistication, or opt for the natural beauty of wooden tables to create a welcoming ambiance. Our round coffee tables offer a unique look, while large options provide ample space for gatherings. For smaller areas, our compact coffee tables are perfect, ensuring functionality without compromising on style. Each piece is thoughtfully crafted to enhance your home with a blend of comfort and contemporary flair."
    },
    {
        id: 26,
        category: "coffee table",
        banner: coffee6_blog,
        date: "06 Mar,2024",
        bannerDescription: "Coffee Table, Large Size",
        author: "Patricia Taylor",
        title: "Large Coffee Tables for a Spacious Living Room",
        description: "Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops that add a touch of sophistication, or opt for the natural beauty of wooden tables to create a welcoming ambiance. Our round coffee tables offer a unique look, while large options provide ample space for gatherings. For smaller areas, our compact coffee tables are perfect, ensuring functionality without compromising on style. Each piece is thoughtfully crafted to enhance your home with a blend of comfort and contemporary flair."
    },
    {
        id: 27,
        category: "coffee table",
        banner: coffee7_blog,
        date: "08 Mar,2024",
        bannerDescription: "Coffee Table, Small Size",
        author: "Linda Thompson",
        title: "Small Coffee Tables for Compact Spaces",
        description: "Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops that add a touch of sophistication, or opt for the natural beauty of wooden tables to create a welcoming ambiance. Our round coffee tables offer a unique look, while large options provide ample space for gatherings. For smaller areas, our compact coffee tables are perfect, ensuring functionality without compromising on style. Each piece is thoughtfully crafted to enhance your home with a blend of comfort and contemporary flair."
    },
    {
        id: 28,
        category: "kitchen furniture",
        banner: kitchen_1,
        date: "10 Mar,2024",
        bannerDescription: "Kitchen Cabinet, Modern Design",
        author: "John Doe",
        title: "Modern Kitchen Cabinets for Your Home",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 29,
        category: "kitchen furniture",
        banner: kitchen_2,
        date: "12 Mar,2024",
        bannerDescription: "Kitchen Island, Rustic Style",
        author: "Jane Smith",
        title: "Rustic Kitchen Islands for a Cozy Atmosphere",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 30,
        category: "kitchen furniture",
        banner: kitchen_3,
        date: "14 Mar,2024",
        bannerDescription: "Kitchen Sink, Glass Top",
        author: "Robert Johnson",
        title: "Glass Top Kitchen Sinks for a Stylish Look",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 31,
        category: "kitchen furniture",
        banner: kitchen_4,
        date: "16 Mar,2024",
        bannerDescription: "Kitchen Table, Wooden",
        author: "Emily Brown",
        title: "Wooden Kitchen Tables for a Warm Ambiance",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 32,
        category: "kitchen furniture",
        banner: kitchen_5,
        date: "18 Mar,2024",
        bannerDescription: "Kitchen Chairs, Round",
        author: "Michael Wilson",
        title: "Round Kitchen Chairs for a Unique Look",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 33,
        category: "kitchen furniture",
        banner: kitchen_6,
        date: "20 Mar,2024",
        bannerDescription: "Kitchen Appliances, Large Size",
        author: "Patricia Taylor",
        title: "Large Kitchen Appliances for a Spacious Kitchen",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 34,
        category: "kitchen furniture",
        banner: kitchen_7,
        date: "22 Mar,2024",
        bannerDescription: "Kitchen Utensils, Small Size",
        author: "Linda Thompson",
        title: "Small Kitchen Utensils for Compact Spaces",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 35,
        category: "kitchen furniture",
        banner: kitchen_8,
        date: "24 Mar,2024",
        bannerDescription: "Kitchen Decor, Elegant",
        author: "James Anderson",
        title: "Elegant Kitchen Decors for a Sophisticated Look",
        description: "Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-top sinks that add elegance. Wooden tables bring warmth, while round chairs introduce a unique touch. Large appliances maximize functionality in spacious kitchens, and small utensils are perfect for compact spaces. Elegant decor pieces provide the finishing touches for a sophisticated look. Each item is designed with meticulous attention to detail, ensuring your kitchen is not only beautiful but also a hub of efficiency and comfort."
    },
    {
        id: 36,
        category: "office chair",
        banner: office1,
        date: "26 Mar,2024",
        bannerDescription: "Executive Office Chair, Leather",
        author: "John Doe",
        title: "Leather Executive Office Chairs for a Professional Look",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 37,
        category: "office chair",
        banner: office2,
        date: "28 Mar,2024",
        bannerDescription: "Task Chair, Adjustable",
        author: "Jane Smith",
        title: "Adjustable Task Chairs for Comfort and Productivity",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 38,
        category: "office chair",
        banner: office3,
        date: "30 Mar,2024",
        bannerDescription: "Swivel Office Chair, Ergonomic",
        author: "Robert Johnson",
        title: "Ergonomic Swivel Office Chairs for Long Work Hours",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 39,
        category: "office chair",
        banner: office4,
        date: "02 Apr,2024",
        bannerDescription: "Computer Desk Chair, High Back",
        author: "Emily Brown",
        title: "High Back Computer Desk Chairs for Extra Support",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 40,
        category: "office chair",
        banner: office5,
        date: "04 Apr,2024",
        bannerDescription: "Office Chair, Metal",
        author: "Michael Wilson",
        title: "Metal Office Chairs for Durability",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 41,
        category: "office chair",
        banner: office6,
        date: "06 Apr,2024",
        bannerDescription: "Office Chair, Modern Design",
        author: "Patricia Taylor",
        title: "Modern Office Chairs for a Contemporary Look",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 42,
        category: "office chair",
        banner: office6,
        date: "06 Apr,2024",
        bannerDescription: "Office Chair, Modern Design",
        author: "Patricia Taylor",
        title: "Modern Office Chairs for a Contemporary Look",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 43,
        category: "office chair",
        banner: office6,
        date: "06 Apr,2024",
        bannerDescription: "Office Chair, Modern Design",
        author: "Patricia Taylor",
        title: "Modern Office Chairs for a Contemporary Look",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 44,
        category: "office chair",
        banner: office6,
        date: "06 Apr,2024",
        bannerDescription: "Office Chair, Modern Design",
        author: "Patricia Taylor",
        title: "Modern Office Chairs for a Contemporary Look",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    },
    {
        id: 45,
        category: "office chair",
        banner: office6,
        date: "06 Apr,2024",
        bannerDescription: "Office Chair, Modern Design",
        author: "Patricia Taylor",
        title: "Modern Office Chairs for a Contemporary Look",
        description: "Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote productivity. Experience the support of high-back designs for extended work hours and the flexibility of swivel chairs for dynamic movement. Our modern designs incorporate sleek lines for a contemporary office look, while durable metal options offer long-lasting use. Each chair is crafted to provide optimal support and comfort, helping you maintain focus and efficiency throughout the workday. Transform your office with chairs that combine form and function for the ultimate working environment."
    }
]

export default BlogList;
