import React from "react"
import styles from './styles'

const UserInfoBanner = ({
    user
}) => {
    return (
        <div className="mainUserInfoBanner">
            <img className="circularSquare" src="https://image.shutterstock.com/image-vector/smartphone-iphone-style-black-color-260nw-530681137.jpg" alt="..."/>
            <div className="userInfo">
                <h1>{user.name}</h1>
                <p>Total Hours: {user.total_hours}</p>
            </div>
        </div>
    )
}

export default UserInfoBanner;
