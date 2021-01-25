import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {
    const [user, setUser] = useState([])

    useEffect(() => {

        datas()
    }, [])



    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/user/${id}`);
        datas();

    }
    const datas = async () => {
        const userData = await axios.get("http://localhost:3003/user");

        setUser(userData.data.reverse());


    }

    return (
        <div className="container">
            <div className="py-4">

                <h2>User Data </h2>

                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {


                            user.map((userv, index) => (



                                <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {userv.name}
                                    </td>
                                    <td>
                                        {userv.username}
                                    </td>
                                    <td>
                                        {userv.email}
                                    </td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/viewUser/${userv.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/editUser/${userv.id}`}>Edit</Link>
                                        <Link className="btn btn-outline-primary btn-danger" onClick={() => { deleteUser(userv.id) }}>Delete</Link>
                                    </td>



                                </tr>


                            ))
                        }
                    </tbody>
                </table>

            </div>

        </div >
    )
}

export default Home
