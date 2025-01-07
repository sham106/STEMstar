import React from 'react'
import './Resources.css'

const Resources = () => {
  return (
    <div className='resources-container resources'>
        <div className='resource-categories'>
            <div className='resource-card-robotics'>
                <h2 className='resource-heading'>Robotics</h2>
                <p className='resource-text'>
                    Learn to build and program robotics with step-by-step guidance 
                    and tutorials.
                </p>
                <a href='/robotics' className='resource-link'>Explore robotics</a>
            </div>
            <div className='resource-card-coding'>
                <h2 className='resource-heading'>Coding</h2>
                <p className='resource-text'>
                    Get started with coding using scratch, html, css and JavaScript.
                    Access beginner and advanced coding challenges!
                </p>
                <a href='/coding' className='resource-link'>Start Coding</a>
            </div>
            <div className='resource-card-mathematics'>
                <h2 className='resource-heading'>Mathematics</h2>
                <p className='resource-text'>
                    Discover fun way to learn math with puzzles, games, and interactive examples.
                </p>
                <a href='/mathematics' className='resource-link'>Fun with math</a>
            </div>
        </div>
    </div>
  )
}

export default Resources