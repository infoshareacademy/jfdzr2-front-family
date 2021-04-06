import React from 'react';
import './Sidebar.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { RatingFive, RatingThree } from "./Rating"



export default function RadioButtonsGroup(props) {


  return (
    <FormControl >
     
   <RadioGroup aria-label="rating" name="rating" value={props.rating.value} onChange={props.onChange}> 
      <FormControlLabel checked={props.rating.highest} value="highest" control={<Radio />} label={ <><RatingFive /> 4.1 &amp; up</>} />
      <FormControlLabel checked={props.rating.lowest} value="lowest" control={<Radio />} label={ <><RatingThree /> 3.1 &amp; up</>} />
      </RadioGroup>  
    </FormControl>
  );
}