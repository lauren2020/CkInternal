import React from "react"
import UserInfoBanner from './UserInfoBanner'

const AdminHome = ({
    user
}) => {
    return (
        <>
            <UserInfoBanner {...{
                user
            }}></UserInfoBanner>
        </>
    )
}

export default AdminHome;
