import { Navigate } from "react-router-dom"



const PrivateRoutes = () => {

    // to get the token from the localStorage
    const token = localStorage.getItem('token');

    // Redirect to the login page if the token is not present
    if (!token) {
        return <Navigate to='/login' />
    } else {
        // Render the shop components if the user is authenticated
        return <Navigate to='/shop' />
    }

}

export default PrivateRoutes
