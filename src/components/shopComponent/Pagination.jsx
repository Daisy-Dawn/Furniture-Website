import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts /productsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
        <nav>
            <ul className='flex gap-[1rem] items-center text-lead font-semibold text-[16px]'>
                <span className='cursor-pointer '> <IoIosArrowBack  /> </span>

                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#page"> {number} </a>
                    </li>
                ))}
                <span className='cursor-pointer '> <IoIosArrowForward /> </span>
            </ul>
        </nav>
  )
}

export default Pagination