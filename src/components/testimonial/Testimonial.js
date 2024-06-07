import { useState } from 'react'
import "./Testimonial.css";
import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { users } from './data';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className='main --flex-center'>
      <div className='container --text-center'>
        <h2 className='--text-center --mb2'>Testimonial Section</h2>

        <div className='slider'>
          <FaQuoteLeft className='icon' />

          {users.map((user, index) => {
            return (
              <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                {/* If index = current slide, then show it */}
                {index === currentSlide && (
                  <div>
                    <p>{user.desc}</p>
                    <hr />
                    <img src={user.img} alt="profile" />
                    <h4>{user.name}</h4>
                    <p className='--fw-thin'>{user.job}</p>
                  </div>
                )}

                <div className='buttons'>
                  <AiOutlineArrowLeft size={15} className='prev' />
                  <AiOutlineArrowRight size={15} className='next' />
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Slider