import {useEffect, useState} from "react";
import axios from "axios";

interface toDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const MyContext = () =>{

    const [data, setData] =useState<toDo | null>(null);

    useEffect(() => {
        axios.get<toDo>("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => setData (response.data)
            )

    }, []);

    return (
        <div>
            {data &&(
                <div>
                    <h1>UserId: {data.userId}</h1>
                    <h1>ID: {data.id}</h1>
                    <h1>Title: {data.title}</h1>
                    <h1>Completed Status: {data.completed}</h1>
                </div>
            )}
        </div>
    )
}

export default MyContext