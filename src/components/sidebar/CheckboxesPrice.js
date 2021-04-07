import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { db } from '../../services/firebase-config';

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

export default function CheckboxesPrice(props) {

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.price.paid}
            onChange={props.onChange}
            name="paid"
          />
        }
        label="Paid"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={props.price.free}
            onChange={props.onChange}
            name="free"
          />
        }
        label="Free"
      />
    </>
  );
}
