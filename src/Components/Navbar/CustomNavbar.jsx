import React from 'react';
import './CustomNav.css'

export default function CustomNavbar() {
    return (
            <div>
                <nav class="main-nav">
                    <div>
                        <ul class="no-bullets">
                            <li class="navitem current">
                                <a class="nav-link active" aria-current="page" href=".">Home</a>
                            </li>
                            <li class="navitem">
                                <a class="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
}

