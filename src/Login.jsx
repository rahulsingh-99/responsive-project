import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState({
        userName: "",
        password: ""
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setLogin((preVal) => {
            return {
                ...preVal, [name]: value,
            }
        })
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        alert(`Login Successfully`)
    }

    return (
        <>
            <div className="my-2">
                <h1 className="text-center">Login</h1>
            </div>
            <div className="container login_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={loginSubmit} >
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label label ">Username</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="userName"
                                    value={login.username}
                                    onChange={InputEvent}
                                    placeholder='Enter Your Username'
                                    autoComplete='off'
                                />
                                <label for="exampleFormControlInput1" className="form-label label ">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleFormControlInput1" name='password'
                                    value={login.password}
                                    onChange={InputEvent}
                                    placeholder='Enter Your Password'
                                    autoComplete='off'
                                />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
