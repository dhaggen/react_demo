import React from 'react';
import './Footer.css';
import {RegisterTitle} from "../App/RegisterTitle";
import {NavLink} from "react-router-dom";

export interface FooterExternalLink {
    path: string,
    title: string,
    className: string,
};

export const Footer = (props:{externalLinks: Array<FooterExternalLink>, systemInfo: string}) => (
    <div className="footer" >
        <div className="footerContent">
            <div className="registerInfo">
                <RegisterTitle/>
            </div>
            <div className="registerLinks">
                <ul>
                    { props.externalLinks.map((link:FooterExternalLink, index) => (
                        <li className="footerExternalLink" key={index}>
                            <a href={link.path} target="_blank" className={link.className}><span className="dot" />{link.title}</a>
                        </li>
                    ))}
                    <li className="footerExternalLink" key={123}>
                        <NavLink to="/support/"><span className="dot" />Kontakt och Support</NavLink>
                    </li>
                </ul>
            </div>
            <div className="registerVersion">
                <span id="systemVersion">{props.systemInfo}</span>
            </div>
        </div>
        <div className="footerLogo">
        </div>
    </div>
);