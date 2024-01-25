import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to='/profile'><img src='./img/profile.png' className={style.icon} /></NavLink>
            </div>
            <div>
                <NavLink to='/chats'><img src='./img/message.png' className={style.icon} /></NavLink>
            </div>
            <div>
                <NavLink to='/news'><img src='./img/news.png' className={style.icon} /></NavLink>
            </div>
            <div>
                <NavLink to='/music'><img src='./img/music.png' className={style.icon} /></NavLink>
            </div>
            <div>
                <NavLink to='/settings'><img src='./img/settings.png' className={style.icon} /></NavLink>
            </div>
        </nav>
    );
};

export default Navigation;