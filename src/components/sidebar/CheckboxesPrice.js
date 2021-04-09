import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


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
