import React, { useRef } from 'react'
import './Testimonial.css'
import back_icon from '../../assets/back_icon.png'
import next_icon from '../../assets/next_icon.png'
import user_1 from '../../assets/user_1.jpeg'
import user_2 from '../../assets/user_2.jpeg'
import user_3 from '../../assets/user_3.jpeg'
import user_4 from '../../assets/user_4.jpeg'
import user_5 from '../../assets/user_5.jpeg'

const Testimonial = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  }


  return (
    <div className='testimonials'>
      <img src={back_icon} alt='' className='next_btn' onClick={slideBackward}/>
      <img src={next_icon} alt='' className='back_btn' onClick={slideForward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className="user_infor">
                <img src={user_1  } alt=''/>
                <div>
                  <h3>Mercy Waks</h3>
                  <span>Kondele Primo</span>
                </div>
              </div>
              <p>"Before joining STEMstars i never thought i would build 
                or code anyting. Now, i have created my first robot and 
                even participated in competition! It has been life 
                changing"
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user_infor">
                <img src={user_2  } alt=''/>
                <div>
                  <h3>Mercy Waks</h3>
                  <span>Kondele Primo</span>
                </div>
              </div>
              <p>"Before joining STEMstars i never thought i would build 
                or code anyting. Now, i have created my first robot and 
                even participated in competition! It has been life 
                changing"
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user_infor">
                <img src={user_3 } alt=''/>
                <div>
                  <h3>Mercy Waks</h3>
                  <span>Kondele Primo</span>
                </div>
              </div>
              <p>"Before joining STEMstars i never thought i would build 
                or code anyting. Now, i have created my first robot and 
                even participated in competition! It has been life 
                changing"
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user_infor">
                <img src={user_4 } alt=''/>
                <div>
                  <h3>Mercy Waks</h3>
                  <span>Kondele Primo</span>
                </div>
              </div>
              <p>"Before joining STEMstars i never thought i would build 
                or code anyting. Now, i have created my first robot and 
                even participated in competition! It has been life 
                changing"
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user_infor">
                <img src={user_5} alt=''/>
                <div>
                  <h3>Mercy Waks</h3>
                  <span>Migosi Primo</span>
                </div>
              </div>
              <p>"Before joining STEMstars i never thought i would build 
                or code anyting. Now, i have created my first robot and 
                even participated in competition! It has been life 
                changing"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial