import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxesLevel(props) {

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.level.beginner}
            onChange={props.onChange}
            name="beginner"
          />
        }
        label="Beginner"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={props.level.intermediate}
            onChange={props.onChange}
            name="intermediate"
          />
        }
        label="Intermediate"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={props.level.expert}
            onChange={props.onChange}
            name="expert"
          />
        }
        label="Expert"
      />
    </FormGroup>
  );
}
