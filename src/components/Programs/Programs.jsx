import React from 'react'
import './Programs.css';
import program_1 from '../../assets/program_1.webp'
import program_2 from '../../assets/program_2.webp'
import program_3 from '../../assets/program_3.jpeg'
import program_4 from '../../assets/program_4.jpeg'
import program_icon_1 from '../../assets/program_icon_1.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt=''/>
            <div className="caption">
                <img src={program_icon_1} alt=''/>
                <p>Coding</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt=''/>
            <div className="caption">
                <img src={program_icon_1} alt=''/>
                <p>Robotics</p>
            </div>
        </div>
        {/* <div className="program">
            <img src={program_3} alt=''/>
        </div> */}
        <div className="program">
            <img src={program_4} alt='' className='programs_img_3'/>
            <div className="caption">
                <img src={program_icon_1} alt=''/>
                <p>Mathematics & Science</p>
            </div>
        </div>
    </div>
  )
}

export default Programs