import type {Info} from "../Type.ts";
import React from "react";
// Define the props type
type UserInfoProps = {
    user: Info;
}

// Use the props in the component
const UserInfo: React.FC<UserInfoProps> = ({user }) => {
    return (
        <div>
-            <h2>User Info</h2>
            <p>ID:{user.id}</p>
            <p>Name:{user.name}</p>
            <p>ID:{user.email}</p>
=        </div>
    )
}

export default UserInfo;