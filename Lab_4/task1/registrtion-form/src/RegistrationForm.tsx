import { useState } from "react";

function RegistrationForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<string>("");

    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [ageError, setAgeError] = useState<string>("");

    const [success, setSuccess] = useState<boolean>(false);

    function validateName(value: string): string {
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
    }

    function validateEmail(value: string): string {
        if (!value.trim()) return "Email is required";
        const regex = /[\s@]+@[\s@]+\.[\s@]+/;
        if (!regex.test(value)) return "Email format is invalid";
        return "";
    }

    function validateAge(value: string): string {
        if (!value.trim()) return "Age is required";
        const num = Number(value);
        if (Number.isNaN(num)) return "Age must be a number";
        if (num < 18) return "You must be 18 or older";
        return "";
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const nErr = validateName(name);
        const eErr = validateEmail(email);
        const aErr = validateAge(age);

        setNameError(nErr);
        setEmailError(eErr);
        setAgeError(aErr);

        if (nErr || eErr || aErr) {
            setSuccess(false);
            return;
        }

        setSuccess(true);
        setName("");
        setEmail("");
        setAge("");

        setNameError("");
        setEmailError("");
        setAgeError("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 14 }}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSuccess(false);
                            setName(value);
                            setNameError(validateName(value));
                        }}
                    />
                    {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                </div>

                <div style={{ marginBottom: 14 }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSuccess(false);
                            setEmail(value);
                            setEmailError(validateEmail(value));
                        }}
                    />
                    {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                </div>

                <div style={{ marginBottom: 14 }}>
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSuccess(false);
                            setAge(value);
                            setAgeError(validateAge(value));
                        }}
                    />
                    {ageError && <p style={{ color: "red" }}>{ageError}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>

            {success && <p style={{ color: "green" }}>Registration successful!</p>}
        </div>
    );
}

export default RegistrationForm;