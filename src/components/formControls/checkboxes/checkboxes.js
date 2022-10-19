import React, {useState} from 'react';
import './checkboxes.css';

const Checkboxes = () => {
    const [ checked1, setChecked1 ] = useState(false);
    const [ checked2, setChecked2 ] = useState(false);
    const [ checked3, setChecked3 ] = useState(false);

    const handleInputChange1 = (event) => {
      debugger;
        setChecked1(!checked1);
      };
      const handleInputChange2 = (event) => {
          setChecked2(!checked2);
        };

        const handleInputChange3 = (event) => {
            setChecked3(!checked3);
          };

    return (
      <div className="checkboxes_wrapper">
        <div className="checkboxes_text">Checkboxes</div>
        <div>
          <input
            name="isGoing"
            type="checkbox"
            checked={checked1}
            onChange={handleInputChange1} 
          />
          <label>Checkbox 1</label>
        </div>
        <div>
          <input
            name="isGoing"
            type="checkbox"
            checked={checked2}
            onChange={handleInputChange2} 
          />
          <label>Checkbox 2</label>
        </div>
        <div>
          <input
            name="isGoing"
            type="checkbox"
            checked={checked3}
            onChange={handleInputChange3} 
          />
          <label>Checkbox 3</label>
        </div>
      </div>
    );
}

export default Checkboxes;