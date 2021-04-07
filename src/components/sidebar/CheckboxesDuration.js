import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { PinDropSharp } from '@material-ui/icons';

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

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