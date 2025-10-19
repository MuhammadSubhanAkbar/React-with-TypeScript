import UserInfo from "./components/UserInfo.tsx";
import {type Info} from './Type.ts';

function App(){

    const user:Info = {
        id:1,
        name:"Muhammad",
        email:"Muhammad@gmail.com"
    }



    return (
        <div>
            <UserInfo
                user = {user}
            />
        </div>
    )
}

export default App;