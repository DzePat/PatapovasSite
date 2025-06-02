import { useAuth0 } from "@auth0/auth0-react";
import React, { useState} from 'react';
import menuIcon from "../../assets/menu.png";
import logoutIcon from "../../assets/logout.png";
import "./Dropdown.css";

const Dropdown = () => {
    const { logout,loginWithRedirect, isAuthenticated} = useAuth0();
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-trigger" onClick={() => {setOpen(!open)}}>
                <img src={menuIcon}></img>
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                {isAuthenticated ? (
                <ul>
                    <DropdownItem img = {logoutIcon} text = "Logout" onClick={() => logout()}/>
                </ul>
                ) : (
                <ul>
                    <DropdownItem img = {logoutIcon} text = "Login" onClick={() => loginWithRedirect()}/>
                </ul>
                )}
            </div>
        </div>
        )
}

function DropdownItem(props){
    return (
        <li className="dropdown-item" onClick={props.onClick}>
            <img src={props.img}></img>
            <a>{props.text}</a>
        </li>
    )
}



export default Dropdown;