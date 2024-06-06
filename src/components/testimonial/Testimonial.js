import React from 'react'
import "./Testimonial.css";
import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { users } from './data';

const Slider = () => {
  return (
    <div className='slider'>
      <h1>Testimonial Section</h1>
      <FaQuoteLeft />
      
      {users.map((user, index) => {
        return (
          <div className='slide current' key={index}>
            <>
              <div className='content'>
                <p>{user.desc}</p>
              </div>

              <img src={user.img} alt="profile"/>
              <hr />
              <h3>{user.name}</h3>
              <p>{user.job}</p>
            </>
          </div>
        )
      })}

      <AiOutlineArrowLeft />
      <AiOutlineArrowRight />
    </div>
  )
}

export default Slider