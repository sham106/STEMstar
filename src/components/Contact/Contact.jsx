import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import email_icon from '../../assets/email_icon.png'
import location_icon from '../../assets/location_icon.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c34603a9-ce7f-41db-8c5e-a9c94ef75857");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className='contact_col '>
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>Fell free to reach out through contact form of 
                find our contact information below, your feedback, questions,
                patnerships and suggestions are important to us as we server to provide 
                exceptional service to our community.
            </p>
            <ul>
                <li><img src={email_icon} alt=' '/>shamgreat009@gmail.com</li> 
                <li> <img src={phone_icon} alt=''/>+254784117797</li>
                <li><img src={location_icon} alt='location_icon'/>Nairobi, Kisumu <br/> Kenya</li>
            </ul>
        </div>
        <div className='contact_col right'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' 
                required></input>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your Phone number'
                required/>
                <label>Write your message here</label>
                <textarea name='message' rows={6} placeholder='Enter your message'
                required></textarea>
                <button type='submit' className='btn dark-btn' >Submit now <img src={arrow_icon}
                alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact