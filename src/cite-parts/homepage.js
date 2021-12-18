import React from 'react';
import Header from './header.js';

export default function Homepage() {
    return (
        <div>
            <Header class1="inactive" class2="inactive" class3="inactive" class4="inactive" class5="header-nav2" />
            <section className="offer">
                <div className="offer-background">
                    <img src="./assets/img/offer-background.webp" alt="" />
                </div>
                <div className="offer-block">
                    <div className="offer-block__item">
                        <div className="offer-block__header">
                            <h1 className="offer-title">Reimagine the Modern Corporate Services Practice</h1>
                            <p className="offer-text">Everything you need for corporate governanc entity management and stakeholder engagement</p>
                        </div>
                        <div className="offer-block__body">
                            <form action="#" method="POST">
                                <input type="text" placeholder='Enter your work email…'/>
                                <input type="submit" value="Get a demo"/>
                            </form>
                            <p>Need to start urgently? Get on our Priority List</p>
                        </div>
                    </div>
                    <div className="offer-block__item">
                        <img src="./assets/img/offer-statics.webp" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}