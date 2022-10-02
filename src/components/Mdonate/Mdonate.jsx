import React, { useState } from 'react'
import './Mdonate.css'
import axios from 'axios'
function Mdonate() {
    // const [amount , setAmount] = useState();
    const [formdata, setFormdata] = useState({
        amount: "",
        donername: "",
        type: "onetime",
        mobilenumber: "",
        email: ""
    })
    const [error_massage,seterror_massage] = useState();

    const onClickHendler = (e) => {
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
            res =  await axios({
                method: 'post',
                url: 'https://hackathon-api.0901ad211046sag.repl.co/api/mdoner',
                data: formdata
              },config);
        } catch (err) {
            console.log("error:",err);
            seterror_massage("Plz, fill all required fields *")
        }
        if(res.status === 200){
            setFormdata({
                amount: "",
                donername: "",
                type: "onetime",
                mobilenumber: "",
                email: ""
            })
        }
    }
    return (
        <>
            <div className="Donation_Form">
                <div className="Mdonation_image">
                    {/* <img src="" alt="" /> */}
                </div>
                <form className="Mdonation_Form" action="">
                    <div className="Mheading">
                        <h1>Donate Money<br/></h1><span>Giving a little is better than not giving at all.</span>
                    </div>
                    <div className="amounts-value">
                        <button className="btn btn-amount" onClick={onClickHendler} name="amount" value={"500"}>500</button>
                        <button className="btn btn-amount" onClick={onClickHendler} name="amount" value={"1000"}>1000</button>
                        <button className="btn btn-amount" onClick={onClickHendler} name="amount" value={"1500"}>1500</button>
                        <button className="btn btn-amount" onClick={onClickHendler} name="amount" value={"2000"}>2000</button>
                    </div>
                    <div id="amount">
                        <label id="amountLable" htmlFor="Mamount" required>AMOUNT:</label>
                        <input id="Mamount" type="number" name="amount" value={formdata.amount} onChange={onClickHendler} />
                    </div>
                    <div className="Mdonation_line1">
                        <input type="text" value={formdata.donername} name="donername" onChange={onClickHendler} placeholder="Name" />
                        <select id="Mselection" value={formdata.type} name="type" onChange={onClickHendler}>
                            <option value="onetime" >One time</option>
                            <option value="monthly">Monthly </option>
                        </select>
                    </div>

                    <div className="Mdonation_line3">
                        <input type="email" value={formdata.email} name="email" placeholder="Email" onChange={onClickHendler} />
                        <input type="number" value={formdata.mobilenumber} name="mobilenumber" placeholder="Mobile no." onChange={onClickHendler} />
                    </div>
                    <button className="Mdonation_button" onClick={onSumitHendler} > DONATE ❤️</button>
                    <p className="error_massage">{error_massage}</p>
                </form>

                {/* <div className="MQuote">    
                    <h1> “Your donation can help us, phataphat ker do”</h1>
                </div> */}
            </div>
        </>
    )
}

export default Mdonate