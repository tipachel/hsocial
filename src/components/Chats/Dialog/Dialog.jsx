import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css';

const Dialog = (props) => {
    let path = '/chats/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    );
};

export default Dialog;