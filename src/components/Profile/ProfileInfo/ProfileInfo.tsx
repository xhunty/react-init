import React from 'react'
import css from './ProfileInfo.module.css'

const ProfileInfo: React.FC = () => {
    return (
        <div className={css.profile_info}>
            <div className={css.page_logo}>
                <img className={css.page_logo_img} src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg"></img>
            </div>
            <div className={css.description_block}>ava + descr</div>
        </div>
    )
}
export default ProfileInfo;