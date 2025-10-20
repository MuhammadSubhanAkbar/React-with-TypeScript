import {useRef, useState} from "react";

type formData= {
    name: string,
    email: string,
    password: string
}

function Form(){

    const [submitted, setSubmitted] = useState<formData>({
        name: "",
        email: "",
        password: "",
    });

    const nameRef     = useRef<HTMLInputElement>(null);
    const emailRef    = useRef<HTMLInputElement>(null);
    const passowrdRef = useRef<HTMLInputElement>(null);

    return (
        <form>
            <input
                type="text"
                placeholder="Name"
                ref={nameRef}
            />

            <input
                type="email"
                placeholder="Email"
                ref={emailRef}
            />

            <input
                type="password"
                placeholder="Password"
                ref={passowrdRef}
            />
        </form>
    )
}

export default Form;