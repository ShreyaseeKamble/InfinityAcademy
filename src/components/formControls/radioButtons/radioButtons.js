import React, {useState} from 'react';
import './radioButtons.css';

const RadioButtons = () => {
  const [ checked1, setChecked1 ] = useState(false);
  const [ checked2, setChecked2 ] = useState(false);
  const [ checked3, setChecked3 ] = useState(false);

  const handleInputChange1 = (event) => {
      setChecked1(!checked1);
      setChecked2(false);
      setChecked3(false);
    };
    const handleInputChange2 = (event) => {
        setChecked2(!checked2);
        setChecked1(false);
        setChecked3(false);
      };

      const handleInputChange3 = (event) => {
          setChecked3(!checked3);
          setChecked1(false);
          setChecked2(false);
        };

    return (
      <div className="radio_button_wrapper">
        <div className="radio_button_text">Radio Buttons</div>
        <div>
          <input type="radio" id="radio1" name="radio1" onChange={handleInputChange1} checked={checked1} />
          <label>Radio 1</label>
        </div>
        <div>        
          <input type="radio" id="radio2" name="radio2" onChange={handleInputChange2} checked={checked2} />
          <label>Radio 2</label>
        </div>
        <div>
          <input type="radio" id="radio3" name="radio3" onChange={handleInputChange3} checked={checked3} />
          <label>Radio 3</label>
        </div>
      </div>
    );
}

export default RadioButtons;