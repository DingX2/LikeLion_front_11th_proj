import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/NavBar.scss";

export default function NavBar() {
    const [isNavToggled, setIsNavToggled] = useState(false);

    return (
        <>
            <nav className="nav-wrapper wrapper">
                <ul className="nav-container container">
                    <li>
                        <Link to="/">ToothlessBlog</Link>
                    </li>

                    <li style={{ flexGrow: 2 }}></li>

                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/posts">Posts</Link>
                    </li>

                    <li className="nav-toggle-btn">
                        <button
                            onClick={() => {
                                setIsNavToggled(!isNavToggled);
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </li>
                </ul>
            </nav>

            {isNavToggled ? (
                <div className="nav-toggle-wrapper wrapper">
                    <ul className="nav-toggle-container container">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </div>
            ) : null}
        </>
    );
}
