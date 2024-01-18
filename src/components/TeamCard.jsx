import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";

const TeamCard = ({name, position, pic}) => {
  return (
    <div className='w-max h-[31.25rem] justify-self-center'>
        <div className='group relative w-[15.8125rem] rounded-[0.625rem] overflow-clip'>
            <img src={pic} className=' object-cover  transition-transform duration-300 transform scale-105 group-hover:scale-100' alt="team profile image" />
            <div className="rounded-tl-[0.625rem] rounded-bl-[0.625rem]  absolute  top-[50%] right-[-100%] transform translate-y-[-50%] group-hover:right-0  transition-all duration-300 delay-75 bg-steam backdrop-blur p-2 flex flex-col items-center gap-[1rem]">
                <div className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center  ">
                  <Link to="https://github.com/Daisy-Dawn/" target="_blank" rel="noopener noreferrer"> <FaGithub size={18} className="text-lead hover:fill-[#bd2c00] transition-colors duration-300" /> </Link>
                </div>
                <div className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center  ">
                  <Link to="https://www.linkedin.com/in/agbo-emmanuella7/" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn size={18} className="text-lead  hover:fill-[#0077B5] transition-colors duration-300" /> </Link>
                </div>
                <div className="w-[28px] h-[28px] rounded-full bg-steam flex justify-center items-center  ">
                  <Link to="https://wa.link/o81wxs" target="_blank" rel="noopener noreferrer"> <IoLogoWhatsapp size={18} className="text-lead  hover:fill-[#25D366] transition-colors duration-300" /> </Link>
                </div> 
            </div>
        </div>
        <div className='text-center mt-3'>
            <p className='text-xl text-lead font-semibold'>{name}</p>
            <p className='text-lg text-bGrey font-semibold'>{position}</p>
        </div>
    </div>
  )
}

export default TeamCard;