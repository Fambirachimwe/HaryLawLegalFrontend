import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { PRODUCTION_URL, DEVELOPMENT_URL } from '../util/util'



const Login = ({isAuth, setUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChagePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () =>{
        // console.log(`Identifier: ${email} Password: ${password}`);
        

        axios.post(`${DEVELOPMENT_URL}/auth/local`, {
            identifier: email,
            password: password
        }).then(user => {
            // store the tocken in localStorage
            localStorage.setItem("token", user.data.jwt);
            isAuth(); // dispatching to redux state
            setUser(user.data)
            
        }).catch(err =>{
            // console.log(err)
            alert(err)
            alert("Email or password incorrect")
        }).then( () => {
            history.push("/")  
        })
    }

    return (
        <div className="body-wrapper">
            <div className="main-wrapper">
                <div className="page-wrapper full-page-wrapper d-flex align-items-center justify-content-center">
                    <main className="auth-page">
                        <div className="mdc-layout-grid">
                            <div className="mdc-layout-grid__inner">
                                <div className="stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-6-tablet">
                                    <div className="mdc-card">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mdc-layout-grid">
                                                <div className="mdc-layout-grid__inner">
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                        <div className="mdc-text-field w-100">
                                                            <input className="mdc-text-field__input" value={email} id="text-field-hero-input" onChange={handleChangeEmail} />
                                                            <div className="mdc-line-ripple"></div>
                                                            <label for="text-field-hero-input" className="mdc-floating-label">Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                        <div className="mdc-text-field w-100">
                                                            <input className="mdc-text-field__input" type="password" value={password} onChange={handleChagePassword} id="text-field-hero-input" />
                                                            <div className="mdc-line-ripple"></div>
                                                            <label for="text-field-hero-input" className="mdc-floating-label">Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop">
                                                        <div className="mdc-form-field">
                                                            <div className="mdc-checkbox">
                                                                <input type="checkbox"
                                                                    className="mdc-checkbox__native-control"
                                                                    id="checkbox-1" />
                                                                <div className="mdc-checkbox__background">
                                                                    <svg className="mdc-checkbox__checkmark"
                                                                        viewBox="0 0 24 24">
                                                                        <path className="mdc-checkbox__checkmark-path"
                                                                            fill="none"
                                                                            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                                                    </svg>
                                                                    <div className="mdc-checkbox__mixedmark"></div>
                                                                </div>
                                                            </div>
                                                            <label for="checkbox-1">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex align-items-center justify-content-end">
                                                        <Link to="#">Forgot Password</Link>
                                                    </div>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                        <Link to="#" onClick={handleSubmit} className="mdc-button mdc-button--raised w-100">
                                                               Login 
                                                        </Link>
                                                    </div>
                                                    <br></br>
                                                    <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex align-items-center justify-content-end">
                                                        <Link to="/register">Do you have an account Register here</Link>
                                                    </div>
                                                    {/* <p>Have an account ? <span><Link to="/register"> Register here <Link/> </Link></span>  </p> */}

                                                    
                                                {/* </Link> */}

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      isAuth: () => {dispatch({type: "LOGGED_IN", isAuth: true})},
      setUser: (user) => {dispatch({type: "SET_USER", user: user})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);