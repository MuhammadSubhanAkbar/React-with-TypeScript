import {type adminInfoType} from "../Type.ts";
import React from "react";

type AdminInfoProps = {
    admin: adminInfoType;
}

const Adminstrotor:React.FC<AdminInfoProps>= ({admin}) =>{
    return(
        <div>
            <h2>Admin Infor</h2>
            <p>ID: {admin.id}</p>
            <p>Name: {admin.name}</p>
            <p>Email: {admin.email}</p>
            <p>ID: {admin.role}</p>
            <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
        </div>
    )
}

export default Adminstrotor;