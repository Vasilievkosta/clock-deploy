import User from './pages/User';
import Admin from './pages/Admin';
import Master from './pages/Master';

export const publicRoutes = [
    {
        path: '/login',
        Component: Admin
    },
    {
        path: '/master',
        Component: Master
    },
    {
        path: '/',
        Component: User
    }
]