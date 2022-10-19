import './selectElements.css';

const SelectBox = () => {
    return (
            <div className="selectbox_wrapper">
                <div className='selectorbox_text'>Select</div>
                <select>
                  <option disabled selected value>Select an Option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
    );
}

export default SelectBox;