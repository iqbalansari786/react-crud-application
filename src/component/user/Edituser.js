import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
function EditUser() {
    let history = useHistory();
    const { id } = useParams("id");

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })
    useEffect(() => {
        loadUser()
    }, [])

    const onchageInputEvent = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/user/${id}`);
        setUser(result.data)

    }
    const formSubmit = async (e) => {

        e.preventDefault();
        await axios.put(`http://localhost:3003/user/${id}`, user);
        history.push("/")


    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">

                <h2 className="text-center mb-4">Edit user</h2>
                <form onSubmit={e => formSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your name"
                            name="name"
                            value={user.name}
                            onChange={e => onchageInputEvent(e)} />

                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your username"
                            name="username"
                            value={user.username}
                            onChange={e => onchageInputEvent(e)} />

                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            name="email"
                            value={user.email}
                            onChange={e => onchageInputEvent(e)} />

                    </div>
                    <div className="form-group">
                        <input type="number"
                            className="form-control form-control-lg"
                            placeholder="Enter your mobile"
                            name="mobile"
                            value={user.phone}
                            onChange={e => onchageInputEvent(e)} />

                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your website"
                            name="website"
                            value={user.website}
                            onChange={e => onchageInputEvent(e)} />

                    </div>

                    <button type="submit " className="btn btn-warning btn-block">update user</button>
                </form>

            </div>
        </div>

    )
}

export default EditUser
