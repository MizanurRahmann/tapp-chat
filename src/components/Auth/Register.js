import React, { useState } from 'react';
import './Auth.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //Registration logic
    const register = event => {

    }

    return (
        <div className="auth">
            <div className="auth_image">

            </div>
            <div className="auth_content">
                <form>
                    <h2>Start your Journey</h2>
                    {/* input div for username */}
                    <div className="input_div">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input"
                                placeholder="Username"
                                value={username}
                                onChange={event => { setUsername(event.target.value) }}
                            />
                        </div>
                    </div>

                    {/* input div for email */}
                    <div className="input_div">
                        <div className="i">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                    </div>

                    {/* input div for password */}
                    <div className="input_div">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                    </div>

                    {/* input div for confirm password */}
                    <div className="input_div">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <input
                                type="password"
                                className="input"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={event => setConfirmPassword(event.target.value)}
                            />
                        </div>
                    </div>

                    <input type="submit" className="btn__submit" value="Register" onClick={register} />

                    <div className="signup__link">
                        Already Have an account? Login here.
            </div>
                </form>
            </div>
        </div>
    )
}
export default Register
