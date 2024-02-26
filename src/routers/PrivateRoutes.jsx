import { Navigate, Outlet } from "react-router-dom"



const PrivateRoutes = () => {

    // to get the token from the localStorage
    const token = localStorage.getItem('token');
    const googleVerified = localStorage.getItem('googleToken')

    if (token || googleVerified) {
        // Redirect to the login page if the token for form or google auth is not present
        return <Outlet />
    } else if (!token || !googleVerified) {
        // Make this components accessible
        return <Navigate to='/login' />
    } else {
        return <Navigate to='/' />
    }

}

export default PrivateRoutes
