import React from 'react'
import { useState } from 'react'
import './Nblood.css'
import axios from 'axios'
import { useEffect } from 'react';

function Nblood() {
    var res;
    var config;
    const [userdata, setUserdata] = useState()
    const [formdata, setFormdata] = useState({
        bloodgroup: " ",
        city: " ",
        state: " "
    })

    const onChangeHendler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setFormdata({ ...formdata, [name]: value })
    }
    const onSumitHendler = async (e) => {
        e.preventDefault();
        console.log(formdata);
        config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        try {
            res = await axios.get(`https://hackathon-api.0901ad211046sag.repl.co/api/bdoner/city/${formdata.city}/1/${formdata.bloodgroup}`, config);
        } catch (err) {
            console.log("error:", err);
        }
        setUserdata(res.data);
        console.log(res.data[0]);
        if (res.status === 200) {
            setFormdata({
                bloodgroup: "",
                city: "",
                state: ""
            })
        }
    }
    const fatchdata = async () => {
        try {
            res = await fetch.get('https://hackathon-api.0901ad211046sag.repl.co/api/bdoner');
        } catch (err) {
            console.log("error:", err);
        }
        setUserdata(await (res.data).json());
    }
    useEffect(() => {
        fatchdata();
        console.log("uesr", userdata)
    })
    return (
        <div>
            <div className="ReqBcontainer">
                <div className="ReqBlood">
                    <form action="" className="ReqBloodForm">
                        <div className="ReqBloodLine1">
                            <label for="">Blood Group:</label>
                            <select className="ReqBloodBGrp" name='bloodgroup' value={formdata.bloodgroup} onChange={onChangeHendler}>
                                <option value="" disabled >Blood Group</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                            </select>
                        </div>

                        <div className="ReqBloodLine2">
                            <label for=""> City name:</label>
                            <input type="text" id="ReqBcity" placeholder="City" name='city' value={formdata.city} onChange={onChangeHendler} />
                        </div>

                        <div className="ReqBloodLine3">
                            <label for="">State name:</label>
                            <input type="text" id="ReqBstate" placeholder="State" name='state' value={formdata.state} onChange={onChangeHendler} />
                        </div>
                        <button className="ReqBloodBtn" onClick={onSumitHendler}> SEARCH </button>
                    </form>
                    <img src="https://www.friends2support.org/imgs/landingpage/blood_drop_search.gif" alt="" />

                </div>
            </div>


            <div className="BDcontainer">
                <div className="BloodDoners">
                    <ul className="BD1stRow">
                        <li className="BDname donersHeading">Name</li>
                        <li className="BDmobileNo donersHeading">Mobile no</li>
                        <li className="BDcity donersHeading">City</li>
                        <li className="BDreport donersHeading">Report if details are incorrect</li>
                    </ul>
                    {/* {userdata ? <ul>
                        <li className="BDname">{userdata[0].donername}</li>
                        <li className="BDmobileNo">{userdata[0].mobilenumber}</li>
                        <li className="BDmobileNo">{userdata[0].city}</li>
                        <li className="BDreport">Report if details are incorrect</li>
                    </ul>
                        : ""} */}
                    {
                        userdata ? userdata.map((data) => {
                            return (
                                <ul>
                                    <li className="BDname">{data.donername}</li>
                                    <li className="BDmobileNo">{data.mobilenumber}</li>
                                    <li className="BDmobileNo">{data.city}</li>
                                    <li className="BDreport">Report</li>
                                </ul>
                            )
                        }) : ""
                    }

                </div>
            </div>

        </div>
    )
}

export default Nblood
