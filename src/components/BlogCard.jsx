import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { Tooltip } from "antd";

const BlogCard = ({image, date, bannerDescription, author, title, description}) => {
    const [like, setLike] = useState(false); //state to manage like button
    const [noOfLikes, setNoOfLikes] = useState(0); // state to update no. of likes

    return (
        <article>
            <div>
                <img src={`https://freefurnitura.000webhostapp.com/reactApiPhp/images/${image}`} className="rounded-[0.625rem] object-cover w-full h-[22.25rem] max-w-[74.125rem]" alt="An image showing a furniture" />
                <div className="text-sm sm:text-base md:text-lg text-bGrey font-normal flex flex-wrap justify-between sm:justify-start items-center gap-3 md:gap-5 mt-4">
                    <p>{date}</p>
                    <p>{bannerDescription}</p>
                    <p>By {author}</p>
                    <div className="flex items-center gap-2">
                        <Tooltip title={like ? "unlike" : "like"}>
                            <FaHeart 
                            color={like ? "red" : ""}
                            className="transition-all duration-100 cursor-pointer text-base md:text-lg lg:text-2xl" 
                            onClick={()=> {
                                setLike(!like);
                                setNoOfLikes(prevNo => like ? prevNo - 1 : prevNo + 1);
                            }} 
                            />
                        </Tooltip>
                        <span>{noOfLikes }</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-lead my-6">{title}</h2>
                <p className="text-base md:text-lg text-bGrey font-normal w-full max-w-[74.125rem]">{description}</p>
            </div>
        </article>
    )
}

export default BlogCard;