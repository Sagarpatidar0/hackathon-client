import React from 'react'
import './ngo.css'

function ngo() {
    return (
        <div>

            <div class="FoodNGOcontainer">

                <div class="FoodNGOHding">
                    <h1>
                        Welcome Seva Group Foundation
                    </h1>
                    <h2>Make a request</h2>
                </div>
                <div class="FoodNGOreqForm">
                    <textarea rows="4" cols="50" name="comment" form="usrform">
                        Your Requirnments Here ....</textarea>
                    <input type="text" placeholder="Address" />
                    <span>
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                    </span>
                    <button> SUBMIT </button>
                </div>
            </div>

            <div className="reqwithmap">
                <div class="ReqReceive">
                    <h1>Request received</h1>
                    <div class="ReqCard">

                        <div class="ReqCardLine1">
                            <div class="ReqNametogether">
                                <p id="ReqRecName">Name:</p>
                                <p>Heal The Globe Foundation</p>
                            </div>

                            <button>
                                APPROVE
                            </button>
                        </div>

                        <div class="ReqCardLine2">
                            <p id="ReqRecReq">Request:</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis esse aliquam molestias
                                fugiat excepturi, sed, aperiam rerum corporis quam dolorem modi necessitatibus.</p>
                        </div>
                        <div class="ReqCardLine3">
                            <p id="ReqRecAddress">Address:</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis esse aliquam molestias
                                fugiat excepturi, sed, aperiam rerum corporis quam dolorem modi necessitatibus.</p>
                        </div>
                        <div class="ReqCardLine4">
                            <p id="ReqRecAddress">Till Date:</p>
                            <p>Lorem ipsum dolo</p>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d112119.90559105163!2d77.13666244986031!3d28.57735751691088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.6542!2d77.23729999999999!4m5!1s0x390d1f54f5c66e1d%3A0x8d97deeae86e5c34!2sHeal%20The%20Globe%20Foundation%2C%20village%2C%20Chhatarpur%2C%20Delhi!3m2!1d28.4956835!2d77.1664945!5e0!3m2!1sen!2sin!4v1664686525644!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='ngo' />
                </div>
            </div>
        </div >
    )
}

export default ngo