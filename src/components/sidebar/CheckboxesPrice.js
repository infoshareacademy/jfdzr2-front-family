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

export default function CheckboxesPrice() {
  const [state, setState] = React.useState({
    free: false,
    paid: false,

  });

  const handleChange = (event) => {
  
    setState({ ...state, [event.target.name]: event.target.checked });

    console.log(state)
  };

  const { free, paid } = state;

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={paid}
            onChange={handleChange}
            name="paid"
          />
        }
        label="Paid"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={free}
            onChange={handleChange}
            name="free"
          />
        }
        label="Free"
      />
    </>
  );
}
