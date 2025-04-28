import React, { useEffect, useRef } from "react";
import { useMenu } from "../contexts/MenuContext";

function Menu() {
    const { isMenuOpen, closeMenu } = useMenu();
    const menuRef = useRef(null);

    useEffect(() => {
        const body = document.body;

        if (isMenuOpen) {
            body.classList.add('is-menu-visible');
        } else {
            body.classList.remove('is-menu-visible');
        }

        return () => {
            body.classList.remove('is-menu-visible');
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        const handleEsc = (e) => {
            if (e.key === 'Escape') closeMenu();
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [closeMenu]);

    return (
        <nav ref={menuRef} id="menu">
            <h2>Menu</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="generic.html">About Me</a></li>
                <li><a href="generic.html">Portfolio</a></li>
                <li><a href="generic.html">Contract Me</a></li>
                <li><a href="elements.html">Elements</a></li>
            </ul>
            {/* <a className="close" href="#menu" onClick={(e) => {
                e.preventDefault();
                closeMenu();
            }}>Close</a> */}
        </nav>
    );
}

export default Menu;