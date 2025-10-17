import UserInfo from "./components/UserInfo.tsx";
import Adminstrotor from "./components/Adminstrotor.tsx";
import {type Info, AdminInfoType} from './Type.ts';

function App(){

    const user:Info = {
        id:1,
        name:"Muhammad",
        email:"Muhammad@gmail.com"
    }

    const admin : AdminInfoType = {
        id:2,
        name:"Administrator",
        email: "Admin@gmai.com",
        role:"Admin",
        lastLogin: new Date()
    }

    return (
        <div>
            <UserInfo
                user = {user}
            />
            <Adminstrotor
                admin  = {admin}
            />
        </div>
    )
}

export default App;