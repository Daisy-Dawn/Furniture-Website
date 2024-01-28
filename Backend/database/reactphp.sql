-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2024 at 12:47 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactphp`
--

-- --------------------------------------------------------

--
-- Table structure for table `bloglist`
--

CREATE TABLE `bloglist` (
  `id` int(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `bannerdescription` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bloglist`
--

INSERT INTO `bloglist` (`id`, `title`, `author`, `category`, `description`, `bannerdescription`, `image`, `time`) VALUES
(1, 'Elegant Bar Stool Designs ', ' Sophie Turner', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Elegant Design', 'bar1.jpeg', '2024-01-21 13:45:37'),
(2, 'Comfortable Bar Stool Seating', 'John Doe', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Comfortable Seating', 'bar2.jpeg', '2024-01-21 13:50:12'),
(3, 'Modern Bar Stool Designs', 'Emily Clark', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Modern Design', 'bar3.jpeg', '2024-01-21 13:51:36'),
(4, 'Unique Features of Bar Stools', 'Alex Johnson', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Unique Features', 'bar4.jpeg', '2024-01-21 13:53:11'),
(5, 'Versatile Usage of Bar Stools', 'Linda Brown', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Versatile Usage', 'bar6.jpeg', '2024-01-21 13:54:30'),
(6, 'High-End Materials for Bar Stools', 'Mark Spencer', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, High-End Materials', 'bar5.jpeg', '2024-01-21 13:56:42'),
(7, 'Customizable Options for Bar Stools', 'Sarah Peterson', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Customizable Options', 'bar7.jpeg', '2024-01-21 13:57:55'),
(8, 'Durable Construction for Bar Stools', 'Oliver Smith', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Durable Construction', 'bar8.jpeg', '2024-01-21 13:58:54'),
(9, 'Unique Finishes for Bar Stools', 'Elizabeth Taylor', 'bar stool', 'Discover our curated selection of bar stools, where elegance meets comfort and style. From the sophisticated designs that elevate your dining experience to the perfect blend of coziness and chic, our stools are crafted for every taste. Embrace modernity w', 'Bar Stool, Unique Finishes', 'bar9.jpeg', '2024-01-21 14:00:20'),
(10, 'Modern Design for Cabinets', 'John Doe', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Modern Design', 'cabinet1.jpeg', '2024-01-21 14:03:06'),
(11, 'Eco-Friendly Materials for Cabinets', 'Jane Smith', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Eco-Friendly Materials', 'cabinet2.jpeg', '2024-01-21 14:04:15'),
(12, 'Wooden Finish for Cabinets', 'Robert Johnson', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Wooden Finish', 'cabinet3.jpeg', '2024-01-21 14:06:19'),
(13, 'Glass Front for Cabinets', 'Emily Brown', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Glass Front', 'cabinet4.jpeg', '2024-01-21 14:07:43'),
(14, 'White Color for Cabinets', 'Michael Wilson', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, White Color', 'cabinet5.jpeg', '2024-01-21 14:09:48'),
(15, 'Black Color for Cabinets', 'Patricia Taylor', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Black Color', 'cabinet6.webp', '2024-01-21 14:10:41'),
(16, 'Stainless Steel for Cabinets', 'Linda Thompson', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Stainless Steel', 'cabinet7.jpeg', '2024-01-21 14:11:31'),
(17, 'Stainless Steel for Cabinets', 'Linda Thompson', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Stainless Steel', 'cabinet8.jpeg', '2024-01-21 14:12:53'),
(18, 'Stainless Steel for Cabinets', 'Linda Thompson', 'cabinet', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Cabinet, Stainless Steel', 'cabinet9.webp', '2024-01-21 14:16:02'),
(19, 'Stainless Steel for Cabinets', 'Linda Thompson', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Stainless Steel', 'cabinet10.jpeg', '2024-01-21 14:17:17'),
(20, 'Stainless Steel for Cabinets', 'Linda Thompson', 'cabinet', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Cabinet, Stainless Steel', 'cabinet11.jpeg', '2024-01-21 14:17:53'),
(21, 'Modern Coffee Tables for Your Home', 'John Doe', 'coffee table', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Coffee Table, Modern Design', 'coffee1.png', '2024-01-21 14:19:13'),
(22, 'Rustic Coffee Tables for a Cozy Atmosphere', 'Jane Smith', 'coffee table', 'Explore our exquisite range of cabinets, designed to enhance the functionality and aesthetics of your space. Our collection features modern designs that seamlessly integrate with your home decor, offering eco-friendly materials for the environmentally con', 'Coffee Table, Rustic Styl', 'coffee2.png', '2024-01-21 14:20:11'),
(23, 'Glass Top Coffee Tables for a Stylish Look', 'Robert Johnson', 'coffee table', 'Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops t', 'Coffee Table, Glass Top', 'coffee3.png', '2024-01-21 14:21:29'),
(24, 'Wooden Coffee Tables for a Warm Ambianc', 'Emily Brown', 'coffee table', 'Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops t', 'Coffee Table, Wooden', 'coffee4.png', '2024-01-21 14:22:40'),
(25, 'Round Coffee Tables for a Unique Look', 'Michael Wilson', 'coffee table', 'Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops t', 'Coffee Table, Round', 'coffee5.png', '2024-01-21 14:23:39'),
(26, 'Small Coffee Tables for Compact Spaces', 'Linda Thompson', 'coffee table', 'Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops t', 'Coffee Table, Small Size', 'coffee6.png', '2024-01-21 14:24:15'),
(27, 'Large Coffee Tables for a Spacious Living', 'Patricia Taylor', 'coffee table', 'Discover the latest trends in coffee tables, designed to complement your living space with style and practicality. Our collection ranges from modern designs with clean lines to rustic styles that bring warmth and coziness. Choose from elegant glass tops t', 'Coffee Table, Large Size', 'coffee7.png', '2024-01-21 14:26:04'),
(28, 'Modern Kitchen Cabinets for Your Home', 'John Doe', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Kitchen Cabinet, Modern Design', 'kitchen1.jpeg', '2024-01-21 14:30:35'),
(29, 'Rustic Kitchen Islands for a Cozy Atmospheree', 'Jane Smith', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Kitchen Island, Rustic Style', 'kitchen2.jpg', '2024-01-21 14:32:49'),
(30, 'Glass Top Kitchen Sinks for a Stylish Look', 'Robert Johnson', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Kitchen Sink, Glass Top', 'kitchen3.jpg', '2024-01-21 14:34:01'),
(31, 'Wooden Kitchen Tables for a Warm Ambiance', 'Emily Brown', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Kitchen Table, Wooden', 'kitchen4.jpg', '2024-01-21 14:35:13'),
(32, 'Round Kitchen Chairs for a Unique Look', 'Michael Wilson', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Kitchen Chairs, Round', 'kitchen5.webp', '2024-01-21 14:36:40'),
(33, 'Large Kitchen Appliances for a Spacious Kitchen', 'Patricia Taylor', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'itchen Appliances, Large Size', 'kitchen6.jpg', '2024-01-21 14:37:22'),
(34, 'Small Kitchen Utensils for Compact Spaces', 'Linda Thompson', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Kitchen Utensils, Small Size', 'kitchen7.jpg', '2024-01-21 14:38:10'),
(35, 'Elegant Kitchen Decors for a Sophisticated Look', 'James Thompson', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Kitchen Decor, Elegant', 'kitchen8.jpg', '2024-01-21 14:39:02'),
(36, 'Leather Executive Office Chairs for a Professional Look', 'John Doe', 'kitchen furniture', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Executive Office Chair, Leather', 'office1.jpeg', '2024-01-21 14:40:43'),
(37, 'Leather Executive Office Chairs for a Professional Look', 'John Doe', 'office chair', 'Elevate your kitchen with our diverse selection of furniture, tailored to combine practicality with aesthetic appeal. Our range includes modern kitchen cabinets that offer sleek storage solutions, rustic islands that create a cozy atmosphere, and glass-to', 'Executive Office Chair, Leather', 'office1.jpeg', '2024-01-21 14:41:54'),
(38, '        description: \"Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chair', 'Jane Smith', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Task Chair, Adjustable', 'office2.jpeg', '2024-01-21 14:43:48'),
(39, 'Ergonomic Swivel Office Chairs for Long Work Hours', 'Robert Johnson', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Swivel Office Chair, Ergonomic', 'office3.webp', '2024-01-21 14:44:54'),
(40, 'High Back Computer Desk Chairs for Extra Support', 'Emily Brown', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Computer Desk Chair, High Back', 'office4.jpeg', '2024-01-21 14:45:53'),
(41, 'Metal Office Chairs for Durability', 'Michael Wilson', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Office Chair, Metal', 'office5.webp', '2024-01-21 14:47:03'),
(42, 'Modern Office Chairs for a Contemporary Look', 'Patricia Taylor', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Office Chair, Modern Design', 'office6.webp', '2024-01-21 14:47:56'),
(43, 'Modern Office Chairs for a Contemporary Look', 'Patricia Taylor', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Office Chair, Modern Design', 'office7.jpeg', '2024-01-21 14:48:48'),
(44, 'Modern Office Chairs for a Contemporary Look', 'Patricia Taylor', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Office Chair, Modern Design', 'office7.jpeg', '2024-01-21 14:49:19'),
(45, 'Modern Office Chairs for a Contemporary Look', 'Patricia Taylor', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Office Chair, Modern Design', 'office8.jpeg', '2024-01-21 14:49:44'),
(46, 'Modern Office Chairs for a Contemporary Look', 'Patricia Taylor', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Office Chair, Modern Design', 'office9.jpeg', '2024-01-21 14:50:22'),
(47, 'Modern Office Chairs for a Contemporary Look', 'Patricia Taylor', 'office chair', 'Enhance your workspace with our selection of office chairs, designed for comfort, style, and ergonomics. Our chairs cater to a variety of professional needs, from executive leather chairs that exude authority to adjustable task chairs that promote product', 'Office Chair, Modern Design', 'office10.jpeg', '2024-01-21 14:50:39');

-- --------------------------------------------------------

--
-- Table structure for table `carbinetlist`
--

CREATE TABLE `carbinetlist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `formerprice` varchar(255) NOT NULL,
  `feature` varchar(255) NOT NULL,
  `peopleratings` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productdetails` longtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carbinetlist`
--

INSERT INTO `carbinetlist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'ChicCraft Cabinet: Crafted for Chic Interiors', '650.00', '3 ', 'cabinet', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet1.jpg', 'Modern Home Cabinet', 'brown', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:12:46'),
(2, 'TimelessTrove Cabinet: Classic Storage Elegance', '670.00', '3 ', 'cabinet', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet2.jpg', 'Modern Home Cabinet', 'brown', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:13:30'),
(3, 'UrbanUtility Cabinet: City Living, Smart Storage', '670.00', '3 ', 'limitedOffer', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet3.jpg', 'Modern Home Cabinet', 'brown', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:14:33'),
(4, 'PristinePantry Cabinet: Pure and Organized', '670.00', '3 ', 'limitedOffer', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet4.jpg', 'Modern Home Cabinet', 'white', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:15:39'),
(5, 'VelvetVista Cabinet: Soft Touch, Stylish Storage', '670.00', '3 ', 'cabinet', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet5.jpg', 'Modern Home Cabinet', 'brown', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:17:30'),
(6, 'PlushPantry Cabinet: Plush Storage for Dreams', '675.00', '3 ', 'cabinet', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet6.jpg', 'Modern Home Cabinet', 'white', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:18:15'),
(7, 'CloudCloset Cabinet: Cloud-Like Storage Comfort', '670.00', '3 ', 'cabinet', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet7.webp', 'Modern Home Cabinet', 'white', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:19:10'),
(8, 'ChicCraft Cabinet: Crafted for Chic Interiors', '670.00', '3 ', 'cabinet', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'cabinet8.jpg', 'Modern Home Cabinet', 'white', '665.00', 'shop', '200', 'Home Cabinet', 'A commode cabinet is a free-standing toilet cabinet that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode cabinet. Bedside commode cabinets can be placed next to a bed for close access.', '2024-01-21 15:20:26');

-- --------------------------------------------------------

--
-- Table structure for table `chairlist`
--

CREATE TABLE `chairlist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `formerprice` varchar(255) NOT NULL,
  `feature` varchar(255) NOT NULL,
  `peopleratings` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productdetails` longtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chairlist`
--

INSERT INTO `chairlist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'EleganceEra Chair: Timeless Seating Style', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair1.jpeg', 'Modern Chairs', 'black', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:44:31'),
(2, 'SleekSit Chair: Contemporary Comfort for Any Spac', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair2.jpeg', 'Modern Chairs', 'brown', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:46:32'),
(3, 'HarmonyHaven Chair: Sit in Balance and Style', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair3.png', 'Modern Chairs', 'black', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:47:14'),
(4, 'UrbanUtopia Chair: City Living, Comfortably', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair4.png', 'Modern Chairs', 'grey', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:47:45'),
(5, 'CosmoCraze Chair: Beyond Ordinary Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair6.jpeg', 'Modern Chairs', 'white', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:48:52'),
(6, 'AstralArc Chair: Reach for Celestial Comfort', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair7.jpg', 'Modern Chairs', 'black', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:49:39'),
(7, 'VelvetVogue Chair: Soft and Stylish Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair8.jpeg', 'Modern Chairs', 'Green ', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:50:13'),
(8, 'PlushPerch Chair: Plush Comfort for Your Rest', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair9.jpeg', 'Modern Chairs', 'black', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:50:51'),
(9, 'CrispCurl Chair: Fresh Design, Fresh Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair10.jpeg', 'Modern Chairs', 'Green', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:55:22'),
(10, 'HavenHug Chair: Embrace Comfort with Every Sit', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair11.jpeg', 'Modern Chairs', 'Green', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 17:57:20'),
(11, 'SculptedSit Chair: Artistic Seating Solutions', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair12.jpeg', 'Modern Chairs', 'pink', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:00:36'),
(12, 'EleganceEra Chair: Timeless Seating Style', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair13.jpeg', 'Modern Chairs', 'brown', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:02:15'),
(13, 'BellaBounce Chair: Bouncy and Beautiful Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair14.jpeg', 'Modern Chairs', 'brown', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:03:27'),
(14, 'UrbanUtopia Chair: City Dreams, Cozy Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair16.jpeg', 'Modern Chairs', 'white', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:05:24'),
(15, 'VividVerve Chair: Vibrant Seating Choices', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair17.jpeg', 'Modern Chairs', 'Green', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:07:13'),
(16, 'PillowPlush Chair: Soft and Plush Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair19.jpeg', 'Modern Chairs', 'black', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:08:25'),
(17, 'UrbanUtopia Chair: City Dreams, Country Comfort', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair20.jpeg', 'Modern Chairs', 'white', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:08:56'),
(18, 'CottonCurl Chair: Calm Seating, Soft Cotton Style', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair21.jpeg', 'Modern Chairs', 'purple', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:09:42'),
(19, 'MysticMingle Chair: Mingle with Magic in Your Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair22.jpeg', 'Modern Chairs', 'Green', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:10:22'),
(20, 'LullabyLounge Chair: Lounge in Style with a Lullaby', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair23.jpeg', 'Modern Chairs', 'Green', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:10:52'),
(21, 'CloudCushion Chair: Cushioned Comfort Like a Cloud', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair24.jpeg', 'Modern Chairs', 'grey', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:11:47'),
(22, 'EpicEase Chair: Elegance in Every Seating Momen', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair25.jpeg', 'Modern Chairs', 'brown', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:12:39'),
(23, 'TranquilTwirl Chair: Dance into Comfortable Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair26.jpeg', 'Modern Chairs', 'brown', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:13:08'),
(24, 'ChicCharm Chair: Add a Touch of Chic to Your Seating', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair27.jpeg', 'Modern Chairs', 'black', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:14:29'),
(25, 'TimelessTilt Chair: Classic Comfort with a Modern Twis', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair28.jpeg', 'Modern Chairs', 'pink', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:15:35'),
(26, 'PristinePerch Chair: Pure Comfort for Every Moment', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair29.jpeg', 'Modern Chairs', 'brown', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:16:17'),
(27, 'EssenceEase Chair: Essence of Relaxation in Every Seat', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair30.jpeg', 'Modern Chairs', 'white', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:17:00'),
(28, 'NirvanaNest Chair: Your Perfect Nest for Relaxation', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'chair31.jpeg', 'Modern Chairs', 'white', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:17:42'),
(29, 'EtherealEase Chair: Dreamy Comfort in Every Seat', '350.00', '5', 'chair', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'highlight1.png', 'Modern Chairs', 'grey', '400.00', 'shop', '200', 'Chair Seat', 'A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access.', '2024-01-21 18:18:32');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` longtext NOT NULL,
  `datestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `subject`, `phone`, `message`, `datestamp`) VALUES
(1, 'HackHarik Tech', 'emmanuelbigboss26@gmail.com', 'to complain', '+2348134385826', 'i have an issue about my money', '2024-01-18 23:19:25');

-- --------------------------------------------------------

--
-- Table structure for table `cupboardlist`
--

CREATE TABLE `cupboardlist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `formerprice` varchar(255) NOT NULL,
  `feature` varchar(255) NOT NULL,
  `peopleratings` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productdetails` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cupboardlist`
--

INSERT INTO `cupboardlist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'SleekCloset: Modern Wardrobe Chic', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard1.jpeg', 'Modern Home Wardrobe', 'white', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '0000-00-00 00:00:00'),
(2, 'HarmonyHang: Balanced Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard2.jpeg', 'Modern Home Wardrobe', 'grey', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 18:43:24'),
(3, 'ChicWard: Trendy Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard3.jpeg', 'Modern Home Wardrobe', 'white', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 18:44:13'),
(4, 'SMetroThread: Stylish Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard4.jpeg', 'Modern Home Wardrobe', 'brown', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 18:45:37'),
(5, 'PureRack: Neat and Pure Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard5.jpeg', 'Modern Home Wardrobe', 'grey', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 18:46:35'),
(6, 'EssenceArmoire: Timeless Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard6.jpeg', 'Modern Home Wardrobe', 'white', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 18:47:20'),
(7, 'PlushPegs: Dreamy Wardrobe Setup', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard7.jpeg', 'Modern Home Wardrobe', 'black', '575.00', 'productOfWeek', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 18:59:57'),
(8, 'EpicEase: Elegant Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard8.jpeg', 'Modern Home Wardrobe', 'black', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 19:03:09'),
(9, 'CloudCloset: Cloud-Like Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard9.jpeg', 'Modern Home Wardrobe', 'brown', '575.00', 'newProducts', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 19:04:49'),
(10, 'CrispCloak: Fresh and Neat Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard10.jpeg', 'Modern Home Wardrobe', 'black', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 19:06:01'),
(11, 'ZephyrZone: Breathe Easy Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard11.jpeg', 'Modern Home Wardrobe', 'black', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 19:06:35'),
(12, 'SculptRack: Artistic Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard12.jpeg', 'Modern Home Wardrobe', 'brown', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 19:07:19'),
(13, 'BellaBins: Beautiful Bin Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard13.jpeg', 'Modern Home Wardrobe', 'black', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 19:07:54'),
(14, 'UrbanUp: City Living, Organized Wardrobe', '540.00', '3', ' cupboard', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n       ', 'cupboard14.jpeg', 'Modern Home Wardrobe', 'black', '575.00', 'shop', '200', 'Wall Wardrobe', 'A commode Wardrobe is a free-standing toilet Wardrobe that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode Wardrobe. Bedside commode Wardrobes can be p', '2024-01-21 19:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `flowervaselist`
--

CREATE TABLE `flowervaselist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `formerprice` varchar(255) NOT NULL,
  `feature` varchar(255) NOT NULL,
  `peopleratings` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productdetails` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flowervaselist`
--

INSERT INTO `flowervaselist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'BloomBase: Elegant Flower Vase', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower1.jpeg', 'Modern flower vase for Homes', 'transparent', '285.00', 'productOfWeek', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:26:23'),
(2, 'ChicCrest: Trendy Flower Vase', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower2.jpeg', 'Modern flower vase for Homes', 'white', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:29:05'),
(3, 'PlushPetal: Dreamy Flower Vase', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower3.png', 'Modern flower vase for Homes', 'white', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:29:53'),
(4, 'MetroPetals Flower Vase: Stylish Floral Hub', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower4.jpeg', 'Modern flower vase for Homes', 'transparent', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:30:26'),
(5, 'TimelessTwirl Flower Vase: Classic Elegancee', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower5.jpg', 'Modern flower vase for Homes', 'brown', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:30:54'),
(6, 'LuxeLily Flower Vase: Luxurious Lily Display', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower6.jpeg', 'Modern flower vase for Homes', 'white', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:31:19'),
(7, 'SoftStem Flower Vase: Soft Touch Floral Elegance', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower7.jpeg', 'Modern flower vase for Homes', 'black', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:31:39'),
(8, 'EpicElegance Flower Vase: Elegant Vase Design', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower8.jpeg', 'Modern flower vase for Homes', 'transparent', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:32:05'),
(9, 'CrispCraze Flower Vase: Fresh and Neat Arrangement', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower9.jpeg', 'Modern flower vase for Homes', 'brown', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:32:36'),
(10, 'BellaBouquet Flower Vase: Beautiful Bouquet Display', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower11.jpeg', 'Modern flower vase for Homes', 'Green', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:33:51'),
(11, 'VividVase Flower Vase: Vibrant Floral Solution', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower12.jpeg', 'Modern flower vase for Homes', 'brown', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:34:30'),
(12, 'PurePedestal Flower Vase: Functional Vase Setup', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower13.jpeg', 'Modern flower vase for Homes', 'black', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:35:06'),
(13, 'VelvetVase Flower Vase: Stylish Vase Journey', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower14.jpeg', 'Modern flower vase for Homes', 'transparent', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:35:39'),
(14, 'PillowPosy Flower Vase: Cozy Vase Spaces', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower15.jpeg', 'Modern flower vase for Homes', 'black', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:36:11'),
(15, 'UrbanZen Flower Vase: City Dreams, Zen Blooms', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower16.jpeg', 'Modern flower vase for Homes', 'white', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:36:45'),
(16, 'CottonBlossom Flower Vase: Calm Cotton Blooms', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower17.jpeg', 'Modern flower vase for Homes', 'white', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:37:12'),
(17, 'CraftedCanvas Flower Vase: Crafted Floral Display', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower18.jpeg', 'Modern flower vase for Homes', 'transparent', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:37:39'),
(18, 'GroveGardenia Flower Vase: Nature Bloom', '250.00', '4', 'flowervase', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\r\n      ', 'flower19.jpeg', 'Modern flower vase for Homes', 'transparent', '285.00', 'shop', '350', 'Flower vase', 'A commode flower vase is a free-standing toilet flower vase that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode flower vase. Bedside commode flower va', '2024-01-21 19:38:04');

-- --------------------------------------------------------

--
-- Table structure for table `funitures`
--

CREATE TABLE `funitures` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(224) NOT NULL,
  `formerprice` varchar(244) NOT NULL,
  `feature` varchar(244) NOT NULL,
  `peopleratings` varchar(244) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productdetails` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `funitures`
--

INSERT INTO `funitures` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'ModernBlend Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles2.jpg', 'Modern Home Interiors', 'white', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:29:15'),
(2, 'UrbanVogue Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles3.jpeg', 'Modern Home Interiors', 'white', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:32:22'),
(3, 'RusticCharm Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles4.jpeg', 'Modern Home Interiors', 'brown', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:34:46'),
(4, 'RusticCharm Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles5.jpeg', 'Modern Home Interiors', 'black', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:35:19'),
(5, 'MinimalistMood Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles6.jpeg', 'Modern Home Interiors', 'brown', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:36:07'),
(6, 'EclecticMix Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles7.jpeg', 'Modern Home Interiors', 'white', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:36:52'),
(7, 'IndustrialEdge Furniture Styles\"', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles8.jpeg', 'Modern Home Interiors', 'grey', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:37:23'),
(8, 'ModernBlend Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles9.jpeg', 'Modern Home Interiors', 'Green', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:37:59'),
(9, 'CozyHaven Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles10.jpeg', 'Modern Home Interiors', 'Green', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:38:22'),
(10, 'BohoChic Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles11.jpeg', 'Modern Home Interiors', 'grey', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:39:02'),
(11, 'ScandinavianSimplicity Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles12.jpeg', 'Modern Home Interiors', 'bu', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:39:51'),
(12, 'ScandinavianSimplicity Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles12.jpeg', 'Modern Home Interiors', 'blue', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:40:06'),
(13, 'MidCenturyModern Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles13.jpeg', 'Modern Home Interiors', 'white', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:41:02'),
(14, 'TransitionalTrends Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles14.jpeg', 'Modern Home Interiors', 'black', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:42:06'),
(15, 'FarmhouseFusion Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles15.jpeg', 'Modern Home Interiors', 'black', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:43:13'),
(16, 'GlamGrove Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles16.jpeg', 'Modern Home Interiors', 'white', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:44:15'),
(17, 'AsianZen Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles17.jpeg', 'Modern Home Interiors', 'white', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:45:10'),
(18, 'ArtDecoAesthetic Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'furniturestyles18.jpeg', 'Modern Home Interiors', 'brown', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:46:03'),
(19, 'MediterraneanMood Furniture Styles', '790.00', '5', 'furnitureStyles', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'highlight2.png', 'Modern Home Interiors', 'brown', '850.00', 'shop', '520', 'Furniture Styles', 'A commode furniture styles is a free-standing toilet furniture styles that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode furniture styles. Bedside co', '2024-01-21 20:46:34');

-- --------------------------------------------------------

--
-- Table structure for table `googleauth`
--

CREATE TABLE `googleauth` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `googleauth`
--

INSERT INTO `googleauth` (`id`, `name`, `email`, `picture`) VALUES
(4, 'Nweke Manuel', 'emmanuelbigboss26@gmail.com', 'https://lh3.googleusercontent.com/a/ACg8ocLsGFiMb91tMicJPO37gh154BLLose--mnuBgzm6mgU-oU=s96-c');

-- --------------------------------------------------------

--
-- Table structure for table `kitchenlist`
--

CREATE TABLE `kitchenlist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `formerprice` varchar(255) NOT NULL,
  `feature` varchar(255) NOT NULL,
  `peopleratings` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productdetails` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kitchenlist`
--

INSERT INTO `kitchenlist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'ModernMix Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen1.jpeg', 'Modern Kitchen Furniture', 'brown', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:00:19'),
(2, 'ClassicCuisine Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen2.jpg', 'Modern Kitchen Furniture', 'white', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:01:06'),
(3, 'UrbanEats Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen3.jpg', 'Modern Kitchen Furniture', 'black', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:01:24'),
(4, 'RusticRevive Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen4.jpg', 'Modern Kitchen Furniture', 'white', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:01:49'),
(5, 'EclecticEase Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen5.webp', 'Modern Kitchen Furniture', 'brown', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:02:32'),
(6, 'CozyCook Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen6.jpg', 'Modern Kitchen Furniture', 'brown', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:02:56'),
(7, 'BohoBite Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen7.jpg', 'Modern Kitchen Furniture', 'white', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:03:16'),
(8, 'ScandiStyle Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen8.jpg', 'Modern Kitchen Furniture', 'black', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:03:50'),
(9, 'GlamGourmet Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen9.webp', 'Modern Kitchen Furniture', 'white', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:04:42'),
(10, 'AsianAppetite Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen10.jpg', 'Modern Kitchen Furniture', 'white', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:05:11'),
(11, 'FarmhouseFlavor Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen11.jpg', 'Modern Kitchen Furniture', 'brown', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:05:33'),
(12, 'TransitionalTaste Kitchen Furniture', '750.00', '3', 'kitchen', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'kitchen12.jpg', 'Modern Kitchen Furniture', 'brown', '820.00', 'shop', '400', 'Kitchen Furniture', 'A commode kitchen furniture is a free-standing toilet kitchen furniture that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode kitchen furniture. Bedside', '2024-01-21 21:06:00');

-- --------------------------------------------------------

--
-- Table structure for table `lightlist`
--

CREATE TABLE `lightlist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(244) NOT NULL,
  `formerprice` varchar(244) NOT NULL,
  `feature` varchar(244) NOT NULL,
  `peopleratings` varchar(244) NOT NULL,
  `productname` varchar(244) NOT NULL,
  `productdetails` varchar(244) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lightlist`
--

INSERT INTO `lightlist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'ModernGlow Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights1.jpeg', 'Classical Hanging Lights', 'brown', '320.00', 'highlights', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:17:17'),
(2, 'ClassicRadiance Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights2.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:18:32'),
(3, 'UrbanLumina Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights3.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:19:05'),
(4, 'RusticAura Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights4.jpeg', 'Classical Hanging Lights', 'white', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:19:41'),
(5, 'IndustrialGleam Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights5.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:20:22'),
(6, 'MinimalistGlow Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights6.jpeg', 'Classical Hanging Lights', 'brown', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:20:44'),
(7, 'EclecticPendant Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights7.jpeg', 'Classical Hanging Lights', 'black', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:21:30'),
(8, 'CozyLuminance Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights8.jpeg', 'Classical Hanging Lights', 'black', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:21:49'),
(9, 'BohoBeam Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights9.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:22:18'),
(10, 'ScandiShine Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights10.jpeg', 'Classical Hanging Lights', 'black', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:23:21'),
(11, 'MidCenturyGlow Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights11.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:24:04'),
(12, 'TransitionalTwinkle Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights12.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:24:34'),
(13, 'VintageVibes Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights13.jpeg', 'Classical Hanging Lights', 'grey', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:25:03'),
(14, 'CitySpectra Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights14.jpeg', 'Classical Hanging Lights', 'black', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:26:13'),
(15, 'CoastalGlow Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights15.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:26:40'),
(16, 'NatureNook Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights16.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:27:41'),
(17, 'LuxeLanterns Hanging Lights', '287.00', '5', 'lights', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'lights17.jpeg', 'Classical Hanging Lights', 'transparent', '320.00', 'shop', '540', 'Hanging Lights', 'A commode lights is a free-standing toilet lights that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode lights. Bedside commode lightss can b', '2024-01-21 21:28:08');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `formerprice` varchar(255) NOT NULL,
  `feature` varchar(255) NOT NULL,
  `peopleratings` varchar(255) NOT NULL,
  `productname` varchar(200) NOT NULL,
  `productdetails` mediumtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(5, 'ElevateDream Frame: Rise in Style', '630.00', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since.', 'bed6.jpeg', 'Modern Bed Frames', 'Green', '800.00', 'newProducts', '200', 'Bed Frames', '         A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access\r\n', '2024-01-21 11:50:01'),
(6, 'SerenitySculpt Frame: Artistry in Res ', '350.00', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since.', 'bed3.jpeg', 'Modern Bed Frames', 'brown', '800.00', 'shop', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access', '2024-01-21 11:55:20'),
(7, 'HarmonyHaven Frame: Your Balance in Design', '500.00', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since', 'bed.jpg', 'Modern Bed Frames', 'grey', '800.00', 'shop', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access', '2024-01-21 12:00:38'),
(8, 'StellarStructure Frame: Sleep with Stellar Support', '750.00', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'bed2.jpg', 'Modern Bed Frames', 'white', '800.00', 'shop', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access.', '2024-01-21 12:30:53'),
(9, 'UrbanUtopia Frame: City Living, Restful Design', '650.00', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'bed4.jpeg', 'Modern Bed Frames', 'grey', '800.00', 'shop', '200 ', 'Bed Frames ', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access.', '2024-01-21 12:33:16'),
(10, 'ZenZone Frame: Zen-Inspired Elegance', '1050.00', '3 ', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'bed5.jpeg', 'Modern Bed Frames', 'brown', '800.00', 'shop', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access.', '2024-01-21 12:35:16'),
(11, 'PillowPleasure Frame: Supportive Bliss', '630.00', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'bed8.jpeg', 'Modern Bed Frames', 'grey', '800.00', 'newProducts', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access.', '2024-01-21 12:38:05'),
(12, 'CosmoCraft Frame: Beyond Ordinary Design', '150.00', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'bed9.jpeg', 'Modern Bed Frames', 'black', '800.00', 'shop', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access', '2024-01-21 12:40:52'),
(13, 'TranquilTide Frame: Waves of Serenity', '150', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'bed10.jpeg', 'Modern Bed Frames', 'grey', '800.00', 'shop', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access', '2024-01-21 12:43:04'),
(14, 'LuxeLull Frame: Luxurious and Lulling Design', '150', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'bed11.jpeg', 'Modern Bed Frames', 'white', '800.00', 'newProducts', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access.', '2024-01-21 12:44:59'),
(15, 'EssenceEase Frame: Essence of Serene Style', '150', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'bed12.jpeg', 'Modern Bed Frames', 'grey', '800.00', 'newProducts', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access.', '2024-01-21 12:47:06'),
(16, 'AstralArc Frame: Curves of Comfort', '150', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'bed13.jpeg', 'Modern Bed Frames', 'red', '800.00', 'newProducts', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access.', '2024-01-21 12:48:21'),
(17, 'SilkSiesta Frame: Silky Smooth Design', '150', '3', 'bedFrame', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since', 'bed14.jpeg', 'Modern Bed Frames', 'black', '800.00', 'shop', '200', 'Bed Frames', 'A commode bed frame is a free-standing toilet bed frame that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode bed frame. Bedside commode bed frames can be placed next to a bed for close access', '2024-01-21 12:49:35');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `username`, `email`, `password`, `token`, `timestamp`) VALUES
(1, 'Manuel', 'emmanuelbigboss26@gmail.com', '$2y$10$LfQfBZ0aBZTqfwdUeFUOVedVNgatiro54HDw5dkDozvPwgDkpOJ6y', 'fdf901537d3fcaba4af2cf0911bbd0e549c0d7ae160b76fd25d33dc315949aec', '2024-01-18 22:59:05');

-- --------------------------------------------------------

--
-- Table structure for table `sofalist`
--

CREATE TABLE `sofalist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(222) NOT NULL,
  `formerprice` varchar(222) NOT NULL,
  `feature` varchar(222) NOT NULL,
  `peopleratings` varchar(222) NOT NULL,
  `productname` varchar(222) NOT NULL,
  `productdetails` varchar(222) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sofalist`
--

INSERT INTO `sofalist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'ModernLounging Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa1.jpeg', 'Modern Home Sofa', 'grey', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:50:04'),
(2, 'ClassicComfort Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa2.jpg', 'Modern Home Sofa', 'black', '420.00', 'limitedOffer', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:51:18'),
(3, 'UrbanEase Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa3.jpeg', 'Modern Home Sofa', 'black', '420.00', 'newProducts', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:52:24'),
(4, 'RusticRespite Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa4.jpeg', 'Modern Home Sofa', 'white', '420.00', 'newProducts', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:53:19'),
(5, 'MinimalistMingle Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa5.jpeg', 'Modern Home Sofa', 'white', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:54:23'),
(6, 'EclecticCouch Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa6.jpeg', 'Modern Home Sofa', 'white', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:54:43'),
(7, 'IndustrialIncline Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa6.jpeg', 'Modern Home Sofa', 'grey', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:55:05'),
(8, 'IndustrialIncline Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa7.jpeg', 'Modern Home Sofa', 'grey', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:55:51'),
(9, 'CozyHaven Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa8.jpeg', 'Modern Home Sofa', 'white', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:56:23'),
(10, 'BohoBreeze Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa9.jpeg', 'Modern Home Sofa', 'black', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:56:49'),
(11, 'ScandiStyle Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa10.jpeg', 'Modern Home Sofa', 'white', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:57:29'),
(12, 'MidCenturyNest Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa11.jpeg', 'Modern Home Sofa', 'blue', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:58:10'),
(13, 'TransitionalTrend Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa12.jpeg', 'Modern Home Sofa', 'white', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 22:59:31'),
(14, 'FarmhouseFinesse Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa13.jpeg', 'Modern Home Sofa', 'Green', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:00:34'),
(15, 'GlamGather Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa14.jpeg', 'Modern Home Sofa', 'blue', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:01:08'),
(16, 'AsianAscent Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa15.jpeg', 'Modern Home Sofa', 'Green ', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:01:42'),
(17, 'AsianAscent Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa16.jpeg', 'Modern Home Sofa', 'blue', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:02:34'),
(18, 'CityChic Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa17.jpeg', 'Modern Home Sofa', 'brown', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:03:26'),
(19, 'CoastalCalm Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa18.jpeg', 'Modern Home Sofa', 'grey', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:04:04'),
(20, 'SimplicitySeat Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa19.jpeg', 'Modern Home Sofa', 'grey', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:04:48'),
(21, 'EtherealEmbrace Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa20.jpeg', 'Modern Home Sofa', 'Green', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:05:22'),
(22, 'CelestialChaise Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa21.jpeg', 'Modern Home Sofa', 'blue', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:06:04'),
(23, 'LuxeLounge Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa22.jpeg', 'Modern Home Sofa', 'grey', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:06:35'),
(24, 'NatureNap Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofa23.jpeg', 'Modern Home Sofa', 'white', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:07:02'),
(25, 'RegalRest Sofa', '400.00', '3', 'sofa', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'sofaHighlight.jpg', 'Modern Home Sofa', 'white', '420.00', 'shop', '200', 'Sofa Seat', 'A commode sofa is a free-standing toilet sofa that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode sofa. Bedside commo', '2024-01-21 23:07:38');

-- --------------------------------------------------------

--
-- Table structure for table `stoollist`
--

CREATE TABLE `stoollist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `formerprice` varchar(255) NOT NULL,
  `feature` varchar(255) NOT NULL,
  `peopleratings` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productdetails` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stoollist`
--

INSERT INTO `stoollist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'Elevate Bar Stool: Modern Comfort', '145.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool1.jpeg', 'Bar Stool', 'brown', '170.00', 'shop', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 21:50:25'),
(2, 'SwivelStyle: Trendy Seating', '100.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool2.jpeg', 'Bar Stool', 'grey', '170.00', 'shop', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 21:53:14'),
(3, 'ZenithZest: Elegant Perch', '60.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool3.jpeg', 'Bar Stool', 'grey', '85.00', 'newProducts', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 21:54:40'),
(4, 'ChicClimb: Sleek Seating', '145.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool4.jpeg', 'Bar Stool', 'black', '170.00', 'shop', '260', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 21:56:04'),
(5, 'UrbanSway: City Chic Stool', '170.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool5.jpeg', 'Bar Stool', 'brown', '170.00', 'shop', '230', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 21:57:50'),
(6, 'rendyTurn: Modern Twist', '80.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool6.jpeg', 'Bar Stool', 'brown', '170.00', 'shop', '230', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 21:59:34'),
(7, 'ApexAscent: Stylish Elevation', '80.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool7.jpeg', 'Bar Stool', 'brown', '170.00', 'shop', '300', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 22:00:29'),
(8, 'SleekSpin: Contemporary Spin', '154.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool8.jpeg', 'Bar Stool', 'brown', '170.00', 'shop', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 22:01:40'),
(9, 'PinnaclePivot: Perfect Pivot', '154.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool9.jpeg', 'Bar Stool', 'brown', '170.00', 'shop', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 22:02:47'),
(10, 'MetroRise: Urban Comfort', '154.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool10.jpeg', 'Bar Stool', 'black', '170.00', 'shop', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 22:03:50'),
(11, 'GravityGlide: Effortless Elegance', '154.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool11.jpeg', 'Bar Stool', 'white', '170.00', 'shop', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 22:04:42'),
(12, 'AuraAscend: Refined Comfort', '154.00', '3', 'stool', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'stool12.jpeg', 'Bar Stool', 'Green', '170.00', 'shop', '200', 'Stools', 'A commode stool is a free-standing toilet stool that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode stool. Bedside commode stools can be placed next t', '2024-01-21 22:05:46');

-- --------------------------------------------------------

--
-- Table structure for table `subscribe`
--

CREATE TABLE `subscribe` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscribe`
--

INSERT INTO `subscribe` (`id`, `email`) VALUES
(1, 'emmanuel@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tablelist`
--

CREATE TABLE `tablelist` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ratings` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `color` varchar(222) NOT NULL,
  `formerprice` varchar(222) NOT NULL,
  `feature` varchar(222) NOT NULL,
  `peopleratings` varchar(222) NOT NULL,
  `productname` varchar(222) NOT NULL,
  `productdetails` varchar(222) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tablelist`
--

INSERT INTO `tablelist` (`id`, `name`, `price`, `ratings`, `category`, `description`, `image`, `tag`, `color`, `formerprice`, `feature`, `peopleratings`, `productname`, `productdetails`, `timestamp`) VALUES
(1, 'ModernFeast Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table1.jpeg', 'Classic Dining Table', 'black', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:22:44'),
(2, 'ClassicGather Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table2.jpeg', 'Classic Dining Table', 'black', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:23:58'),
(3, 'UrbanDine Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table2.jpeg', 'Classic Dining Table', 'grey', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:24:30'),
(4, 'UrbanDine Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table2.jpeg', 'Classic Dining Table', 'grey', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:24:30'),
(5, 'RusticBanquet Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table4.jpeg', 'Classic Dining Table', 'grey', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:25:52'),
(6, 'MinimalistMeal Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table5.jpeg', 'Classic Dining Table', 'grey', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:26:32'),
(7, 'EclecticEats Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table6.jpeg', 'Classic Dining Table', 'grey', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:27:35'),
(8, 'IndustrialDine Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table7.jpeg', 'Classic Dining Table', 'white', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:28:08'),
(9, 'CozyCuisine Dining Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'table7.jpeg', 'Classic Dining Table', 'black', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:28:47'),
(10, 'ModernSip coffee Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee1.jpg', 'Classic Dining Table', 'brown', '420.00', 'shop', '325', 'Dining Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:29:14'),
(11, '  ClassicCup Coffee Table', '370.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee2.jpg', 'Modern Coffee Table', 'brown', '420.00', 'productOfWeek', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:30:46'),
(12, ' UrbanAroma Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee2.jpg', 'Modern Coffee Table', 'brown', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:31:49'),
(13, ' UrbanAroma Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee3.jpg', 'Modern Coffee Table', 'brown', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:32:37'),
(14, 'RusticRoast Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee4.jpg', 'Modern Coffee Table', 'black', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:33:23'),
(15, 'MinimalistMug Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee5.jpg', 'Modern Coffee Table', 'white', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:34:32'),
(16, 'EclecticEspresso Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee6.jpg', 'Modern Coffee Table', 'black', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:35:13'),
(17, 'CozyCaffeine Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee7.jpg', 'Modern Coffee Table', 'white', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:36:02'),
(18, 'BohoBrew Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee8.jpeg', 'Modern Coffee Table', 'white', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:36:27'),
(19, 'ScandiSavor Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee9.jpeg', 'Modern Coffee Table', 'black', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:37:08'),
(20, 'MidCenturyMug Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee10.jpeg', 'Modern Coffee Table', 'white', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:37:39'),
(21, 'FarmhouseFlavor Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee11.jpeg', 'Modern Coffee Table', 'black', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:38:28'),
(22, 'GlamGather Coffee Table', '800.00', '4', 'table', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.', 'coffee12.jpeg', 'Modern Coffee Table', 'black', '420.00', 'shop', '325', 'Coffee Table', 'A commode dining table is a free-standing toilet dining table that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode din', '2024-01-21 22:38:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bloglist`
--
ALTER TABLE `bloglist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carbinetlist`
--
ALTER TABLE `carbinetlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chairlist`
--
ALTER TABLE `chairlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cupboardlist`
--
ALTER TABLE `cupboardlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flowervaselist`
--
ALTER TABLE `flowervaselist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `funitures`
--
ALTER TABLE `funitures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `googleauth`
--
ALTER TABLE `googleauth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kitchenlist`
--
ALTER TABLE `kitchenlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lightlist`
--
ALTER TABLE `lightlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sofalist`
--
ALTER TABLE `sofalist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stoollist`
--
ALTER TABLE `stoollist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribe`
--
ALTER TABLE `subscribe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tablelist`
--
ALTER TABLE `tablelist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bloglist`
--
ALTER TABLE `bloglist`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `carbinetlist`
--
ALTER TABLE `carbinetlist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `chairlist`
--
ALTER TABLE `chairlist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cupboardlist`
--
ALTER TABLE `cupboardlist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `flowervaselist`
--
ALTER TABLE `flowervaselist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `funitures`
--
ALTER TABLE `funitures`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `googleauth`
--
ALTER TABLE `googleauth`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kitchenlist`
--
ALTER TABLE `kitchenlist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `lightlist`
--
ALTER TABLE `lightlist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sofalist`
--
ALTER TABLE `sofalist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `stoollist`
--
ALTER TABLE `stoollist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `subscribe`
--
ALTER TABLE `subscribe`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tablelist`
--
ALTER TABLE `tablelist`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
