import React, { useState } from "react";

const ContactUs = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal, [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullName}`)
    }

    return (
        <>
            <div className="my-2">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label label"> Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name"
                                />
                                <label for="exampleFormControlInput1" className="form-label label ">
                                    Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Phone"
                                />
                                <label for="exampleFormControlInput1" className="form-label label">
                                    Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlTextarea1"
                                    className="form-label label"
                                >Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}
                                    id="exampleFormControlTextarea1"
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;