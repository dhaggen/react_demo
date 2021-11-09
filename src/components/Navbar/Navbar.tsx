import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    const linkItem = (name:string, label:string, path: string) => {
        return <li className={name + '-menu'}>
            <NavLink to={path} activeClassName="activeUrl" exact={true}>
                <h6 className="navigation-text">{label}</h6>
            </NavLink>
        </li>
    };

    return (
        <div className="navbar">
            <ul className="nav">
                    {linkItem("patient-search", "Sök Patient", "/patient/search/")}
                    {linkItem("reports", "Rapporter", "/reports/")}
            </ul>
        </div>
    );
};