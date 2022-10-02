import React from 'react'
import './Slider.css'
import {Link } from "react-router-dom"

function Slider() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://charity-ngo.cmsmasters.net/wp-content/uploads/2017/02/home1-3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <span className='help-box'>How You Could Help</span>
              <p className="tag-line">#NoHunger #GoodHealthForEveryOne</p>
              <h1>DONATE & SUPPORT<br /> OUR WORK TODAY</h1>
              <button type="button" className="btn btn-donate-now"><Link to={"/mdonate"}>DONATE NOW</Link></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://charity-ngo.cmsmasters.net/wp-content/uploads/2017/02/home1-2-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <span className='help-box'>How You Could Help</span>
              <p className="tag-line">#NoHunger #GoodHealthForEveryOne</p>
              <h1>DONATE & SUPPORT<br /> OUR WORK TODAY</h1>
              <button type="button" className="btn btn-donate-now"><Link to={"/mdonate"}>DONATE NOW</Link></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://english.cdn.zeenews.com/sites/default/files/2021/10/15/979794-untitled-design-2021-10-15t201834.841.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <span className='help-box'>How You Could Help</span>
              <p className="tag-line">#NoHunger #GoodHealthForEveryOne</p>
              <h1>DONATE & SUPPORT<br /> OUR WORK TODAY</h1>
              <button type="button" className="btn btn-donate-now"><Link to={"/mdonate"}>DONATE NOW</Link></button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="donate-boxes">
        <div className="donate-box" id='donate-box-1'>
          <p className="donate-box-h1">DONATE MONEY</p>
          <p className="donate-box-desc">"Money might not be able to buy happiness, but giving it away can", your donated money will be used to provide essentials to the needy.It's not the amount that matters but the meaning behind your donation.</p>
          <button type="button" className="btn btn-donate-now"><Link to={"/mdonate"}>DONATE NOW</Link> </button>
        </div>
        <div className="donate-box" id='donate-box-2'>
          <p className="donate-box-h1">DONATE BLOOD</p>
          <p className="donate-box-desc">"You Can’t Buy A Life For Someone With Money, But You Can Save A Life Of Someone By Donating Blood To Him.”
Donate Blood Today So That No One Ever Has To Suffer From A Lack Of Blood.</p>
          <button type="button" className="btn btn-donate-now"><Link to={"/bdonate"}>DONATE NOW</Link></button>
        </div>
        <div className="donate-box" id='donate-box-3'>
          <p className="donate-box-h1">DONATE FOOD</p>
          <p className="donate-box-desc">If you can not feed Hundred people, then just feed one.<br/>“There is nothing greater than love invested in helping to feed the impoverished living in hunger.”<br/>Please Donate Fresh Food Only.</p>
          <button type="button" id='btn-donate-last' className="btn btn-donate-now">DONATE NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Slider