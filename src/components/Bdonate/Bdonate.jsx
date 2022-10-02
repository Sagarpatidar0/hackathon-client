import React from 'react'
import './Bdonate.css'
import { useState } from 'react'
import axios from 'axios'

function Bdonate() {

    const [formdata, setFormdata] = useState({
        donername: "",
        bloodgroup: "",
        dob: "",
        gender: "",
        mobilenumber: "",
        email: "",
        line: "",
        city: "",
        state: "",
        pincode: ""
    })

    const [error_massage, seterror_massage] = useState();

    const onChangeHendler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setFormdata({ ...formdata, [name]: value })
    }
    const onSumitHendler = async (e) => {
        e.preventDefault();
        console.log(formdata);
        var res;

        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        try {
            seterror_massage("Plz, wait while form is submiting....*")
            res = await axios({
                method: 'post',
                url: 'https://hackathon-api.0901ad211046sag.repl.co/api/bdoner',
                data: formdata
            }, config);
        } catch (err) {
            console.log("error:", err);
            seterror_massage("Plz, fill all required fields *")
        }
        console.log(res)
        if (res.status === 200) {
            seterror_massage("Thanks for register.")
            setFormdata({
                donername: "",
                bloodgroup: "",
                dob: "",
                gender: "",
                mobilenumber: "",
                email: "",
                line: "",
                city: "",
                state: "",
                pincode: ""
            })
        }
    }

    return (
        <div className='Bdonate'>
            <div className="DonateBlood">
                <div className="DBloodImg">
                    <img src="https://i.im.ge/2022/10/01/1Rj4GP.blood-donation-final.png" alt="" srcset="" />
                    <h1>“Connecting Lives”
                    </h1>
                </div>
                <form className="DBloodForm" action="">
                    <div className="DBloodFormHeader">
                        <h2>Register For Blood Donation</h2>
                        <img src="https://i.im.ge/2022/10/01/1RXIo9.Blood-donation-Logo.png" alt="" />
                    </div>
                    <input type="text" id="BDonername" placeholder="Doner name" name='donername' value={formdata.donername} onChange={onChangeHendler} />
                    <div className="BDdropdowns">
                        <select className="BdonerGender" onChange={onChangeHendler} name= "gender" value={formdata.gender}>
                            <option value="" disabled selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <select className="BdonerGroup" name='bloodgroup' value={formdata.bloodgroup} onChange={onChangeHendler}>
                            <option value="" disabled selected >Blood Group</option >
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

                    <input id="BDaddressLine" type="text" placeholder="Address" name='line' value={formdata.line} onChange={onChangeHendler} />
                    <div className="BDAline1">
                        <input type="text" placeholder="State" name='state' value={formdata.state} onChange={onChangeHendler} />
                        <input type="text" placeholder="City" name='city' value={formdata.city} onChange={onChangeHendler} />
                    </div>

                    <div className="BDAline2">
                        <input type="number" placeholder="PIN" name='pincode' value={formdata.pincode} onChange={onChangeHendler} />
                        <input type="number" placeholder="Phone no." name='mobilenumber' value={formdata.mobilenumber} onChange={onChangeHendler} />
                    </div>

                    <div className="BDAline3">
                        <input type="email" placeholder="email" name='email' value={formdata.email} onChange={onChangeHendler} />
                        <input type="date" placeholder="DOB" name='dob' value={formdata.dob} onChange={onChangeHendler} />
                    </div>
                    <p className="error_massage">{error_massage}</p>

                    <button className="BDsubmit" onClick={onSumitHendler}>Register Now ❤️</button>

                </form>
            </div>

            <div className="BDonateGL">

                <h1>GUIDLINES</h1>
                <p>Any healthy adult can donate blood. Men can donate safely once in every three months w0hile women can donate every four months.</p>
                <ul>
                    <li>The donar Should NOT be less than 45 KGs.</li>
                    <li>Donor should be in the age group of 18 to 65 years.</li>
                    <li>The systolic and diastolic blood pressures should be within Normal limits.</li>
                    <li>Temperature and Pulse of the donor shall be Normal.</li>
                    <li>Haemoglobin of the donor should NOT be less than 12.5 grams.</li>
                    <li>Must NOT have had any tattoo/Acupunture in last 12 months.</li>
                    <li>Should NOT have any forms of cancer.</li>
                    <li>You CAN NOT give blood if injected intravenously with Drugs even once.</li>
                    <li>Should not have any Heart diseases.</li>
                    <li>Should NOT have Hepatitis B, C, Tuberculosis, Leprosy, HIV.</li>
                    <li>Should NOT have Epilepsy, Asthma on Steroids, Bleeding disorders, Thalassemia, Sickle Cell Anemia, Polycythemia Vera.</li>
                    <li>Should NOT have had shots for any of the following : Cholera, Typhoid, Diptheria, Tetanus, Plague, Gammaglobulin in last 15 days And Rabies vaccination in last 1 year</li>
                    <li>Should NOT have had any history of Genital ulcers/Discharge, History of multiple sexual partners and Drug Addiction, This case is of "High Risk".</li>
                    <li>Certain medications may pose a risk to the donor or recipient, and if you're taking them you will not be able to give blood.</li>
                </ul>
            </div>
        </div>
    )
}

export default Bdonate