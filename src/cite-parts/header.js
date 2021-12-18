import React from 'react';

export default function Header(props) {
    return (
        <header className="header">
            <nav className={props.class5 ? props.class5 + ' header-nav' : 'header-nav'}>
                <div className="header-nav__item">
                    <a href="/" className="logo">Starboard</a>
                </div>
                <div className="header-nav__item">
                    <ul className="header-list">
                        <li className="header-list__item"><a class={props.class1} href="/features">Features</a></li>
                        <li className="header-list__item"><a class={props.class2} href="/blog">Blog</a></li>
                        <li className="header-list__item"><a class={props.class3}  href="/contact">Contact Us</a></li>
                        <li className="header-list__item"><a class={props.class4}  href="/sign">Sign in</a></li>
                    </ul>
                    <div className="header-nav__element">
                        <a href="#">Get a Demo</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}