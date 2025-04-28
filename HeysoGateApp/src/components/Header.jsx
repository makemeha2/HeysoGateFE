import React from "react";
import { useMenu } from "../contexts/MenuContext";

function Header() {
    const { toggleMenu } = useMenu();

    return (
        <header id="header">
            <div className="inner">
                {/* <!-- Logo --> */}
                <a href="/" className="logo">
                    <span className="symbol"><img src="images/logo.svg" alt="" /></span>
                    <span className="title">Heyso</span>
                </a>

                {/* <!-- Nav --> */}
                <nav>
                    <ul>
                        <li>
                            <a href="#menu" onClick={(e) => {
                                console.log('#menu clicked');
                                e.preventDefault();
                                toggleMenu();
                            }}>Menu</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;