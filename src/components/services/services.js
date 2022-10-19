import suhas from './suhas_awale.jpeg';
import './services.css';

const ServicesView = (props) => {

  const getCourseDetails = props.courses.map((course, index) => {

    return (
      <div key={index} className="course_container">
        <div className='course_images'>            
          <img src={course.pic} className="service_img" alt="service_img"></img>
          <img src={suhas} className="profile_img" alt="profile_img"></img>
        </div>
        <div className='course_details'>
          <div className="title" onClick={course.click}>{course.title}</div>
          <div className="description">{course.description}</div>
        </div>
      </div>
    );
  });
    
  return (
    <div className="services_view">
      {getCourseDetails}
    </div>
  );
};

export default ServicesView;