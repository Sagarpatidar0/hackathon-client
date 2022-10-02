import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Registration.css'
import axios from 'axios'

function Registration() {
    const [formdata, setFormdata] = useState({
        username: "",
        uniqueid: "",
        email: "",
        mobilenumber: "",
        type: "",
        password: ""
    })

    // const onSumitHendler = async (e) => {
    //     e.preventDefault();
    //     console.log(formdata);
    //     var res;

    //     const config = {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //         }
    //     };
    //     try {
    //         // seterror_massage("Plz, wait while form is submiting....*")
    //         res = await axios({
    //             method: 'post',
    //             url: 'https://hackathon-api.0901ad211046sag.repl.co/api/user/login',
    //             data: formdata
    //         }, config);
    //     } catch (err) {
    //         console.log("error:", err);
    //         // seterror_massage("Plz, fill all required fields *")
    //     }
    //     console.log(res)
    //     if (res.status === 200) {
    //         // seterror_massage("Thanks for register.")
    //         setFormdata({
    //             donername: "",
    //             username: "",
    //             uniqueid: "",
    //             email: "",
    //             mobilenumber: "",
    //             type: "",
    //             password: ""
    //         })
    //     }
    // }

    return (
        <div>
            <div class="NGOregContainer">
                <div class="NGOregMid">
                    <div class="NGOregHeading">
                        <h1>
                            NGO Registration
                        </h1>
                    </div>
                    <div class="NGOreg">

                        <input type="text" value={formdata.username} placeholder="NGO Name" />
                        <input type="text" value={formdata.uniqueid} placeholder="NGO Id" />
                        <select value={formdata.type} name='type' class="NGOregType">
                            <option disabled selected>Type</option>
                            <option value="food">Food </option>
                            <option value="health">Health </option>
                        </select>
                        <input type="email" value={formdata.email} placeholder="Email" />
                        <input type="number" value={formdata.mobilenumber} placeholder="Mobile No." />
                        <input type="password" value={formdata.password} placeholder="Password" />
                        <button > REGISTER </button>
                    </div>
                    <div class="NGOregRd">
                        <p>Already Registered ? <Link to="/login"> Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration