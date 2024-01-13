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

// import React from 'react'
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const Pagination = ({productsPerPage, totalProducts, currentPage, paginate}) => {
//     const pageNumbers = [];
//     const totalPages = Math.ceil(totalProducts / productsPerPage);

//     for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i);
//       }

//     const maxDisplayedPages = 2;
//     const startIndex = Math.max(currentPage - 1, 0);
//     const endIndex = Math.min(startIndex + maxDisplayedPages, totalPages);

//     const showBackwardArrow = currentPage > 1;
//     const showForwardArrow = currentPage < totalPages;

//   return (
//         <nav>
//             <ul className='flex gap-[1rem] text-lead font-semibold text-[16px]'>

//             {showBackwardArrow && (
//           <li>
//             <a onClick={() => paginate(currentPage - 1)} href="#page" className="page-link">
//               <IoIosArrowBack />
//             </a>
//           </li>
//         )}

//         {pageNumbers.slice(startIndex, endIndex).map((number) => (
//           <li key={number}>
//             <a
//               onClick={() => paginate(number)}
//               href="#"
//               className={number === currentPage ? 'page-link active' : 'page-link'}
//             >
//               {number}
//             </a>
//           </li>
//         ))}

//         {showForwardArrow && (
//           <li>
//             <a onClick={() => paginate(currentPage + 1)} href="#" className="page-link">
//               <IoIosArrowForward />
//             </a>
//           </li>
//         )}
//             </ul>

//         </nav>
//   )
// }

// export default Pagination