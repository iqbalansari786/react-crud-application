import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
function View() {
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
    const gotoHome = () => {
        history.push("/")
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">

                <h2 className="text-center mb-4">View user</h2>

                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your name"
                        name="name"
                        value={user.name}
                        readOnly="true"
                        onChange={e => onchageInputEvent(e)} />

                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your username"
                        name="username"
                        readOnly="true"
                        value={user.username}
                        onChange={e => onchageInputEvent(e)} />

                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                        name="email"
                        value={user.email}
                        readOnly="true"
                        onChange={e => onchageInputEvent(e)} />

                </div>
                <div className="form-group">
                    <input type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter your mobile"
                        name="mobile"
                        value={user.phone}
                        readOnly="true"
                        onChange={e => onchageInputEvent(e)} />

                </div>
                <div className="form-group">
                    <input type="text"
                        readOnly="true"
                        className="form-control form-control-lg"
                        placeholder="Enter your website"
                        name="website"
                        value={user.website}
                        onChange={e => onchageInputEvent(e)} />

                </div>

                <button type="button " className="btn btn-primary btn-block" onClick={() => {
                    gotoHome()
                }}>Goto Home</button>


            </div>
        </div>

    )
}

export default View
