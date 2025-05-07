import React, { useEffect } from "react";
import { BrowserRouter, Outlet } from 'react-router-dom';

import { MenuProvider } from "./contexts/MenuContext";
import AppRoutes from "./components/AppRoutes";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";







function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            document.body.classList.remove('is-preload');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isMobile) document.body.classList.add('is-touch');
    }, []);

    return (
        <BrowserRouter>
            <MenuProvider>
                <div id="wrapper">
                    {/* <!-- Header --> */}
                    <Header />
                    
                    <div id="main">
                        <AppRoutes />
                        <Outlet />
                    </div>

                    {/* <!-- Footer --> */}
                    <Footer />
                </div>
                {/* <!-- Menu --> */}
                <Menu />
            </MenuProvider>
        </BrowserRouter>

    )
}

export default App;