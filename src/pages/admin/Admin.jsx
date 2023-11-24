import "./Admin.scss"
import React, { useEffect, useState } from 'react';
import instanse from "../../services/api/index"
import { useValue } from "../../context/AppProvider";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import parse from 'html-react-parser'
import { CardSkeleton } from "../../utils";


const Admin = () => {

  const [state] = useValue()
  const user_id = localStorage.getItem("user_id")
  const [loading, setLoading] = useState(true);

  const [userAllPosts, setUserAllPosts] = useState([])
  const [userData, setUserData] = useState([])

  const [openLogoutModal, setOpenLogoutModal] = useState(false)

  const logoutFromProfile = () => {
    localStorage.removeItem("user_id")
    localStorage.removeItem("token")
    setTimeout(() =>{
      window.location.reload(true)
    }, 1500)
  }

  // USER ALL POSTS
  useEffect(() => {
    instanse(`/api/posts/`)
      .then(response => {
        console.log(response.data.data)
        setUserAllPosts(response.data.data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    instanse(`/api/users/${state.auth.user_id}`)
      .then(response => {
        setUserData(response.data.data)
        console.log(response.data.data)
      })
  }, [])


  return (
    <>
      <div className='main__user-wrapper'>
        <div className="about__user-container">
          <div className="main__user-info">
            <div>
              <span> Email:</span>
              <p> {userData.email}</p>
            </div>
            <div>
              <span> Firstname:</span>
              <p> {userData.firstname} </p>
            </div>
            <div>
              <span>  Lastname:</span>
              <p>{userData.lastname}</p>
            </div>
            <div>
              <span> Role:</span>
              <p> {userData.role}</p>
            </div>

          </div>
          <div className="user-profile">
            <p>{userData.fullname}</p>
            <div className="main__user-logo">
              <h3>{userData.firstname?.slice(0, 1)}</h3>
            </div>
            <button onClick={() => setOpenLogoutModal(true)} className="main__user-logout"><TbLogout2 /> Log Out</button>
          </div>
        </div>
        <div className="main__posts-container">
          {loading ? <CardSkeleton amount={8} /> : 
            userAllPosts.filter(myData => myData.author === user_id).map(userPost =>
              <div key={userPost._id} className="main__user-card">
                <h2>{parse(userPost.title.slice(0, 10))}...</h2>
                <img src={userPost.image} alt="iamge" />
                <p>{parse(userPost.description.slice(0, 200))}</p>
              </div>
            )
          }
        </div>


      </div>

      {/* LOG OUT POP-UP */}

      <div style={openLogoutModal ? { display: "block" } : { display: "none" }} className="logout__modal-wrapper">
        <div style={openLogoutModal ? { display: "flex" } : { display: "none" }} className="logout-card">
          <p>Do you want to logout ?</p>
          <button onClick={logoutFromProfile} className="logout-btn">LOG OUT</button>
          <button onClick={() => setOpenLogoutModal(false)} className="close__logout-modal"><IoMdClose /></button>
        </div>
      </div>
    </>
  )
}

export default Admin