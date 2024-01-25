import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <img src="./img/content-image.avif" className={style.image} />
            <span className={style.avatar_container}>
                <img src="./img/ava.jpeg" className={style.avatar} />
            </span>
            <div className={style.username}>
                Kit Finik
            </div>
        </div> 
    );
};

export default ProfileInfo;