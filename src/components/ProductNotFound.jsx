import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ProductNotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>ProductNotFound</h1>
        <Link to='#' onClick={() => navigate('/shop')}> Go back to shopping? </Link>

    </div>
  )
}

export default ProductNotFound