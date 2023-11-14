import React, { useLayoutEffect } from 'react';
import "./Auth.scss";
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useValue } from '../../context/AppProvider';

const Auth = () => {
  const [state] = useValue();
  const navigate = useNavigate();

  useLayoutEffect(() => { 
    if(state.auth.token){
      navigate("/admin")
    }
  }, [])


  return (
    <div className='auth'>
      <div className='auth-container'>
        <nav className='auth__nav'>
          <ul className='auth__nav-list'>
            <li className='auth__nav-item'>
              <NavLink to="/auth/login" className={({isActive}) => 
                isActive ? "auth__nav-link auth__nav-link--active" : "auth__nav-link"}>Login</NavLink>
            </li>
            <li className='auth__nav-item'>
              <NavLink to="/auth/signup" className={({isActive}) => 
              isActive ? "auth__nav-link auth__nav-link--active" : "auth__nav-link"}>SignUp</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}

export default Auth