import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxesDuration(props) {

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={props.duration.oneToFive} onChange={props.onChange} name="oneToFive" />}
        label="1-5 Hours"
      />
           <FormControlLabel
        control={<Checkbox checked={props.duration.sixToTen} onChange={props.onChange} name="sixToTen" />}
        label="6-10 Hours"
      />
            <FormControlLabel
        control={<Checkbox checked={props.duration.elevenToFifteen} onChange={props.onChange} name="elevenToFifteen" />}
        label="11-15 Hours"
      />
           <FormControlLabel
        control={<Checkbox checked={props.duration.aboveSixteen} onChange={props.onChange} name="aboveSixteen" />}
        label="> 16 Hours"
      />
     
    </FormGroup>
  );
}