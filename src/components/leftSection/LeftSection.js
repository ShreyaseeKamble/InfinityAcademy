import './leftSection.css';

const LeftSection = (props) => {
    const loadSeleniumPage = (event) => {
      props.seliniumClicked(event);
    }

    const loadRestApiPage = (event) => {
      props.restAPIclicked(event);
    }

    const loadProjectPage = () => {
      console.log('Project');
    }

    return (
      <div className='left_section'>
        <div className='selenium' onClick={loadSeleniumPage}>
          Selenium
        </div>
        <div className='rest_api' onClick={loadRestApiPage}>
          Rest API
        </div>
        <div className='project' onClick={loadProjectPage}>
          Project
        </div>
      </div>
    );
}

export default LeftSection;