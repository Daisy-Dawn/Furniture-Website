import { Navigate } from "react-router-dom"



const PrivateRoutes = () => {

    // to get the token from the localStorage
    const token = localStorage.getItem('token');
    const googleVerified = localStorage.getItem('googleToken')

    // Redirect to the login page if the token for form or google auth is not present
    if (!token || !googleVerified) {
        return <Navigate to='/login' />
    } else {
        // Render the shop components if the user is authenticated
        return <Navigate to='/shop' />
    }

}

export default PrivateRoutes
