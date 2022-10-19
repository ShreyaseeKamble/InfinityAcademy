import './AboutMe.css';

const AboutMe = () => {
    return (
      <div className='about_me'>
        <div className='company_details'>
          <div className='name_wrapper'>
            <div className='creative_minds'>Creative Minds</div> 
            <div className='tag_line'>Learn and Earn Together</div>
          </div>
          <div className='contact_info'>
            <div className='contact_text'>Contact</div>
            <a className='instagram' href="https://in.linkedin.com/in/suhas-awale-48a924bb">Instagram</a>
            <a className='youtube' href="https://in.linkedin.com/in/suhas-awale-48a924bb">Youtube</a>
            <a className='linkedIn' href="https://in.linkedin.com/in/suhas-awale-48a924bb">LinkedIn</a>
          </div>
        </div>
        <div className='footer'>
          <div className='footer_text'>© 2022. All rights reserved</div>
        </div>
      </div>
    );
}

export default AboutMe;