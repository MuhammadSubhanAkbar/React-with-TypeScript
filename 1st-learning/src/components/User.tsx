
interface UserShape  {
    name: string,
    age: number ,
    isStudent: boolean
}

function User({name, age, isStudent}: UserShape ) {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{isStudent}</h2>
        </div>
    )
}

export default User