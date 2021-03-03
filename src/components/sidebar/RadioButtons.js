import React from 'react';
import './Sidebar.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { RatingFive, RatingFour, RatingThree, RatingTwo} from "./Rating"



export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('highest');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl >
     
   <RadioGroup aria-label="rating" name="rating" value={value} onChange={handleChange}> 
      <FormControlLabel value="highest" control={<Radio />} label={ <><RatingFive /> 4.5 &amp; up</>} />
      <FormControlLabel value="high" control={<Radio />} label={ <><RatingFour /> 4.0 &amp; up</>} />
      <FormControlLabel value="low" control={<Radio />} label={ <><RatingThree /> 3.5 &amp; up</>} />
      <FormControlLabel value="lowest" control={<Radio />} label={ <><RatingTwo /> 3.0 &amp; up</>} /> 
      </RadioGroup>  
    </FormControl>
  );
}