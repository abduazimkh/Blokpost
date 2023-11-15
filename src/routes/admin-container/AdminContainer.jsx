import Sidebar from "../../layout/sidebar/Sidebar";
import { Outlet } from 'react-router-dom';
import "./AdminContainer.scss";

const AdminContainer = () => {
  return (
    <div className="admin-container">
      <Sidebar/>
      <div className="admin-container__content">
        <header className="admin-container__header">
          <h1>Create</h1>
        </header>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminContainer