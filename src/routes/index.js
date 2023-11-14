import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Article from '../pages/article/Article'
import Admin from '../pages/admin/Admin';
import Auth from '../pages/auth/Auth';

import Create from "./sub-routes/create/Create";
import Articles from "./sub-routes/articles/Articles";
import Users from "./sub-routes/users/Users";
import Login from './sub-routes/login/Login';
import SignUp from './sub-routes/signup/SignUp';
import Private from './private/Private';


const RouteController = () => {
   return ( 
        <Routes>
            <Route path="" element={<Home/>} />
            <Route path="article/:id" element={<Article/>} />
            <Route path="auth" element={<Auth/>}>
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<SignUp/>} />
            </Route>
             <Route path="admin" element={<Private/>}>
                <Route path='' element={<Admin/>} />
                <Route path='create' element={<Create/>} />
                <Route path='articles' element={<Articles/>} />
                <Route path='users' element={<Users/>} />
            </Route>
        </Routes>
    )
}

export default RouteController;