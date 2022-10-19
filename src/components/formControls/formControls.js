import React, {useState} from 'react';
import Button from '../UI/Button/Button';
import RadioButtons from './radioButtons/radioButtons';
import Checkboxes from './checkboxes/checkboxes';
import SelectBox from './selectBox/selectElements';
import './formControls.css';

const FormControl = (props) => {

  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');
  const [ enteredDate, setEnteredDate ] = useState('');
  const [ enteredLabel, setEnteredLabel ] = useState('');

//   const [ userInput, setUserInput ] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
//   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput( (prevState) => {
    //     return {
    //       ...prevState,
    //       enteredTitle: event.target.value,
    //     }
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput( (prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   }
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput( (prevState) => {
    //     return {
    //       ...prevState,
    //       enteredDate: event.target.value,
    //     }
    // });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const newTabClickHandler = () => {
    window.open('http://www.google.com','_blank');
  }

  const newWindowClickHandler = () => {
    window.open('http://www.google.com', '', 'width=800, height=600');
  }

  const alertClickHandler = () => {
    alert(enteredLabel);
  }

  const labelChangeHandler = (event) => {
    setEnteredLabel(event.target.value);
  }

  return (
    <div onSubmit={onSubmitHandler} className='practice_page'>
      <div className='grid_wrapper'>
        <div className='input_text_wrapper'>
          <label className='text_wrapper'>Input type text</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='input_number_wrapper'>
          <label className='text_wrapper'>Input type number</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className='date_picker_wrapper'>
          <div className='text_wrapper'>Date Picker</div>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className='grid_wrapper'>
        <SelectBox></SelectBox>
        <Checkboxes></Checkboxes>
        <RadioButtons></RadioButtons>
      </div>  
      <div className='grid_wrapper'>
        <div className='new_tab'>
          <Button onClick={newTabClickHandler}>Open new tab</Button>
        </div>
        <div className='new_window'>
          <Button onClick={newWindowClickHandler}>Open new window</Button>
        </div>
        <div className='alert_dialog'>
          <input type="text" value={enteredLabel} onChange={labelChangeHandler}></input>
          <Button onClick={alertClickHandler}>Alert</Button>
        </div>
      </div>
      <div className='grid_wrapper'>
        <div className='mouse_hover_wrapper'>
          <div className='text_wrapper'>Mouse Hover Example</div>
          <Button>Mouse Hover</Button>
          <div className='mouse_hover_content'>
            <div>Top</div>
            <div>Reload</div>
          </div>
        </div>
        <div className='hyper_link_wrapper'>
          <a className='hyperlink' href=".practice_page">Hyper Link</a>
        </div>
        <div className='para_wrapper'>
          <p>This is a general paragraph tag.</p>
        </div>
      </div>
      <div className='iframe_wrapper'>
        <div className='iframe_text'>Iframe Example</div>
        <iframe 
          className='iframe'
          src="http://localhost:3000/.practice_page" title="description"
        ></iframe>
      </div>
    </div>
  );
};

export default FormControl;