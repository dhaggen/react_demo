import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {LoginProvider} from "../LoginDialog/LoginProvider";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./Footer";
import {Header} from "./Header";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ContentRoutes} from "../Routes/ContentRoutes";
import './Typography.css';
import { Global, css } from '@emotion/core'
import {AdminHeader} from "./AdminHeader";


const theme = createMuiTheme({
    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
    transitions: {
        // So we have `transition: none;` everywhere
        create: () => 'none',
    },
    "palette": {
        "common": {"black": "#FFF", "white": "#fff"},
        "background": {"paper": "#ECFAD8", "default": "#fff"},
        "primary": {
            "light": "#c6e59b",
            "main": "#9ad24d",
            "dark": "rgba(29, 105, 3, 1)",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "rgba(136, 214, 238, 1)",
            "main": "rgba(57, 124, 147, 1)",
            "dark": "rgba(30, 97, 112, 1)",
            "contrastText": "#fff"
        },
        "error": {"light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff"},
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    },
    typography: {
        useNextVariants: true,
    },
});

export const Kateterablation = (props:any) => {
    const environment = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : process.env.NODE_ENV;

    return (
    <MuiThemeProvider theme={theme}>
        <LoginProvider>
            <BrowserRouter>
                <Global
                    styles={css`
                        body {
                            font-family: 'Rubik', sans-serif !important;
                            overflow-y:scroll;
                        }
                      `}
                />
                <div id="pageTop" className="KateterablationApp">
                    <AdminHeader/>
                    <Header />
                    <ContentRoutes/>
                    <Footer externalLinks={[
                        {path: 'https://www.ucr.uu.se', title: 'Katebleramera.se', className: ''}
                    ]} systemInfo={`${props.name} Version ${props.version}-${environment}`} />
                </div>
            </BrowserRouter>
        </LoginProvider>
    </MuiThemeProvider>
    );
};