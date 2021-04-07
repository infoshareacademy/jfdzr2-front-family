import React, { useReducer, useState } from "react";
// import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Category, GolfCourseRounded, PinDropSharp } from "@material-ui/icons";

export default function CheckboxesTopic(props) {

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.topic.business}
            onChange={props.onChange}
            name="business"
          />
        }
        label="Business"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={props.topic.graphic}
            onChange={props.onChange}
            name="graphic"
          />
        }
        label="Graphic Design"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={props.topic.languages}
            onChange={props.onChange}
            name="languages"
          />
        }
        label="Languages"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={props.topic.programming}
            onChange={props.onChange}
            name="programming"
          />
        }
        label="Programming"
      />
    </FormGroup>
  );
}
