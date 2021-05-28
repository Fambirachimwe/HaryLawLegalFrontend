import React, { useState } from 'react';
import { FormFields, PRODUCTION_URL, DEVELOPMENT_URL } from '../util/util';
import axios from 'axios';
import {Link ,useHistory} from 'react-router-dom';


const Register = () => {

    const history = useHistory();
    const [username, setUsername] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = (e) => {

        const field = e.target.name || "";
        switch (field) {
            case "username":
                setUsername(e.target.value);
                break

            case "surname":
                setSurname(e.target.value)
                break

            case "email":
                setEmail(e.target.value)
                break
            
            case "password":
                setPassword(e.target.value)
                break

            default:
                break;
        }

        // console.log(username);
    }

    const handleSubmit = () => {

        axios.post(`${DEVELOPMENT_URL}/auth/local/register`, {
            username,
            surname,
            password,
            email
        }).catch(err =>{
            console.log(err)
        }).then(user => {
            history.push("/login")
        })

    }


    return (
    <div className="body-wrapper">
        <div className="main-wrapper">
            <div className="page-wrapper full-page-wrapper d-flex align-items-center justify-content-center">
                <main className="auth-page">
                    <div className="mdc-layout-grid">
                        <div className="mdc-layout-grid__inner">
                            <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                            <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-6-tablet">
                                <div className="mdc-card">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mdc-layout-grid">
                                            <div className="mdc-layout-grid__inner">
                                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12-desktop">
                                                    <div className="mdc-text-field w-100">
                                                        <input className="mdc-text-field__input" required value={username} name={FormFields.username} onChange={handleChange} id="text-field-hero-input" />
                                                        <div className="mdc-line-ripple"></div>
                                                        <label htmlFor="text-field-hero-input" className="mdc-floating-label">Name</label>
                                                    </div>
                                                </div>
                                               
                                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                    <div className="mdc-text-field w-100">
                                                        <input className="mdc-text-field__input" required value={surname} name={FormFields.surname} onChange={handleChange} id="text-field-hero-input" />
                                                        <div className="mdc-line-ripple"></div>
                                                        <label for="text-field-hero-input" className="mdc-floating-label">Surname</label>
                                                    </div>
                                                </div>

                                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                    <div className="mdc-text-field w-100">
                                                        <input className="mdc-text-field__input" required value={email} name={FormFields.email}  onChange={handleChange} id="text-field-hero-input" />
                                                        <div className="mdc-line-ripple"></div>
                                                        <label for="text-field-hero-input" className="mdc-floating-label">Email</label>
                                                    </div>
                                                </div>

                                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                    <div className="mdc-text-field w-100">
                                                        <input className="mdc-text-field__input"  type="password" value={password} name={FormFields.password} onChange={handleChange} type="password" id="text-field-hero-input" />
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
                                                {/* <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex align-items-center justify-content-end">
                                                    <a href="#">Forgot Password</a>
                                                </div> */}
                                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
                                                    <Link to="#" onClick={handleSubmit} className="mdc-button mdc-button--raised w-100">
                                                        Register
                                                    </Link>
                                                </div>

                                                <br></br>
                                                <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6-desktop d-flex align-items-center justify-content-end">
                                                    <Link to="/login">Already have an account signIn here</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-1-tablet"></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

)
                                            }
export default Register;
