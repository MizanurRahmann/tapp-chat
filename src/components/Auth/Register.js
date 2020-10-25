import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, fdb } from '../../firebase/util';
import md5 from 'md5';
import '../../styles/css/Auth.css';
import imageLink from '../../styles/res/image/friends.svg';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()


    // FORM VALIDATION FUNCTION
    const checkForm = () => {
        if(formEmpty()){
            setError('You have to fill all fields.');
            return false;
        } else if(checkPassword()){
            setError('Password shoud be matched.');
            return false;
        }
        return true;
    }

    // CHECK FOR EMPTY INPUT FIELDS
    const formEmpty = () => {
        return !username ||
               !email ||
               !password ||
               !confirmPassword;
    }

    // CHECK FOR PASSWORD MATCHING
    const checkPassword = () => {
        return password !== confirmPassword
    }
    
    //SAVE USER TO DATABASE
    const saveUsers = createdUser => {
        fdb.collection('Users').doc(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        })
    }

    //REGISTRATION LOGIC
    const register = event => {
        event.preventDefault();

        if(checkForm()){
            setLoading(true);

            auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                return res.user.updateProfile({
                    displayName: username,
                    photoURL: `https://gravatar.com/avatar/${md5(res.user.email)}?d=identicon`
                })
                .then(() => {
                    setLoading(false);
                    saveUsers(res);

                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                    history.push('/');
                })
            })
            .catch(err => {
                setError(err.message); 
                setLoading(false);
            })
        }
    }


    return (
        <div className="auth">
            <div className="auth_image">
                <img src={imageLink} width="100%" alt="Join with us"/>
            </div>
            <div className="auth_content">
                <form>
                    <h2>Lets study to</h2>
                    {/* input div for username */}
                    <div className="input_div">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="inputDiv">
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

                    {/* input div for confirm password */}
                    <div className="input_div">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="inputDiv">
                            <input
                                type="password"
                                className="input"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={event => setConfirmPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    
                    <small className="textError">{error}</small>
                    {
                        !loading
                        ? <button className="btn__submit" onClick={register}>Sign up</button>
                        : <button className="btn__submit" style={{background: "#ccc"}}>Loading..</button>
                    }
                    <div className="signup__link">
                        Already Have an account? <Link to="/login">Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register
