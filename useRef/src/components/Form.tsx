import { type FormEvent, useRef, useState } from "react";
import * as React from "react";

type FormData = {
    name: string;
    email: string;
    password: string;
};

function Form() {
    const [submitted, setSubmitted] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    const [isVisible, setIsVisible] = useState<boolean>(false);



    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Add null checks to be safe
        const nameValue = nameRef.current?.value || "";
        const emailValue = emailRef.current?.value || "";
        const passwordValue = passwordRef.current?.value || "";

        setSubmitted({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        });
    };

    const toggleVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent form submission
        setIsVisible(!isVisible);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" ref={nameRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
            <input type={isVisible? "password" : "text"} placeholder="Password" ref={passwordRef} />
            <button
                onClick={toggleVisibility}>
                {isVisible? "See" : "Unsee"}
            </button>
            <br/>

            <button type="submit">Submit</button>

            <section>
                <h2>
                    <strong>Name:</strong> {submitted.name}
                </h2>
                <h2>
                    <strong>Email:</strong> {submitted.email}
                </h2>
                <h2>
                    <strong>Password:</strong> {submitted.password}

                </h2>
            </section>
        </form>
    );
}

export default Form;