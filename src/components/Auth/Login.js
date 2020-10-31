import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/util';
import { useHistory } from 'react-router-dom'
import '../../styles/css/Auth.css';
import imageLink from '../../styles/res/image/inbox.svg';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // LOGIN FUNCTION LOGIC
    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                history.push('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // FORM VALIDATION LOGIC
    const checkForm = () => {
        if(!email || !password){
            setError('You have to fill all fields.');
            return false;
        }
        return true;
    }


    return (
        <div className="auth">
            <div className="auth_image">
                <img src={imageLink} width="100%" alt="Join with us"/>
            </div>
            <div className="auth_content">
                <form>
                    <h2>Log in</h2>
                    {/* input div for email */}
                    <div className="input_div">
                        <div className="i">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="inputDiv">
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
                        <div className="inputDiv">
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    <small className="textError">{error}</small>
                    <input type="submit" className="btn__submit" value="Login" onClick={login} />
                    <div className="signup__link">
                        Don't have any account? <Link to="/register">Register here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
