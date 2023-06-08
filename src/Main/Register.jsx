import React, {useState} from "react";
import "./Login.css";
export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="container">
            <h2>Register</h2>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlfor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="John Snow"/>
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="abc@email.com"/>
                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(e) => setPassword(e.target.value)} type="password" id="pw" name="pw" placeholder="**********"/>
                <button type="submit">Register</button>
            </form>
            <button className="linkBtn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    );
}