import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    return auth.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
