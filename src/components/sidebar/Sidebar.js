import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PortraitIcon from "@mui/icons-material/Portrait";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../style/themeReducer";



const Sidebar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value)
  

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">lamaadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration: "none"}}>   
            <li>
             <PermIdentityIcon className="icon" />
             <span>Users</span>
           </li>
          </Link>
          <Link to="/products" style={{textDecoration: "none"}}>   
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          </Link>
       
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <Link to="/users/new" style={{textDecoration: "none"}}>
          <li>
            <PortraitIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        
        <div onClick={theme ? () => dispatch(changeTheme()) : null} className="colorOption"></div>

        <div  onClick={theme ? null : () => dispatch(changeTheme())} className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
