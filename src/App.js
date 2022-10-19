import React, { useState }  from 'react';
import AboutMe from './components/rightSection/AboutMe';
import ServicesView from './components/services/services';
import Login from './components/login/login';
import FormControl from './components/formControls/formControls';
import Tables from './components/table/tables';
import web_automation from './images/web-automation.jpg';
import jmeter from './images/jmeter.png';
import rest from './images/restapi.jpg';
import project from './images/projects.jpg';
import selenium from './images/selenium.jpg';
import movies from "./movies";
import './App.css';
import LoginGA from './components/GoogleAuth/loginGA';

function App() {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ showForm, setShowForm ] = useState(false);

  const onSeliniumClickedHandler = () => {
    setIsLogin(true);
  }

  const onSaveLoginDataHandler = (data) => {
    console.log(data);
    setShowForm(true);
  }

  const onSaveExpenseDataHandler = (data) => {
    console.log(data);
    setShowForm(true);
  }

  const onRestApiClickedHandler = () => {
    setIsLogin(true);
  }

  const courses = [
    {
        pic: selenium,
        title: 'UI Automation Testing',
        description: "There are several tools on the market that work together with Selenium to enhance test automation. One of these tools is the cloud-based testing platform for web and mobile applications, BrowserStack. In this course, you will explore how to set up and configure test environments using BrowserStack, Selenium, and WebDriver to test URLs, run parallel tests, and automate testing on various combinations of browsers and devices. Next, you will learn how to manage security certificates, Flash, and pop-ups during test automation. Finally, you will learn to integrate Selenium with the tools, Lettuce and Behave and use these set ups to run automated tests in cloud environments.",
        click: onSeliniumClickedHandler,
    },
    {
        pic: rest,
        title: 'REST API Testing',
        description: 'You will learn to automate JSON API/Rest Web Service using Rest Assured with Java in this course. Install live web services along with database on your machine and fire all types of requests, validate responses and automate web service calls. You will also learn to make end to end framework using BDD',
        click: onRestApiClickedHandler,
    },
    {
        pic: jmeter,
        title: 'Performance Testing',
        description: 'JMeter is a powerful Apache open-source tool used in testing and analysis for application services. Explore Apache JMeter and performance testing, including installing and configuring the tool to create a basic test.',
        click: onRestApiClickedHandler,
    },
    {
        pic: project,
        title: 'Projects',
        description: '',
        click: onRestApiClickedHandler,
    }
];

  return (
    <div>
      {
        !isLogin && <>
          <img className='background_img' alt='web_automation' src={web_automation}></img>
          <ServicesView courses={courses}></ServicesView>
          <AboutMe></AboutMe>
        </>
      }
      {isLogin && !showForm && <Login onSaveExpenseData={onSaveLoginDataHandler}></Login>}
      {showForm && <>
          <div className='web_elements_container'>Web Elements</div>
          <div className='form_controls_container'>
            <FormControl onSaveExpenseData={onSaveExpenseDataHandler}></FormControl>
          </div>
          <Tables movies={movies}></Tables>
        </>
      }
      <Login></Login>
    </div>
  );
}

export default App;