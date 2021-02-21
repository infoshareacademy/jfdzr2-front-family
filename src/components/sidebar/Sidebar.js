import React from "react";
import "./Sidebar.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import RadioButtons from "./RadioButtons";
import CheckboxesTopic from "./CheckboxesTopic";
import CheckboxesLevel from "./CheckboxesLevel";
import CheckboxesPrice from "./CheckboxesPrice";
import CheckboxesDuration from "./CheckboxesDuration";
import Button from "@material-ui/core/Button";
import Filter from "./Filter"



const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
<Filter/>
      <Accordion
        style={{
          boxShadow: "none",
          borderTop: "solid 1px lightgrey",
          backgroundColor: "#edf2f4",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#edf2f4" }}
        >
          <Typography className={classes.heading}>Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#edf2f4" }}>
          <Typography>
            <p>
              <RadioButtons />
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          boxShadow: "none",
          borderTop: "solid 1px lightgrey",
          backgroundColor: "#edf2f4",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <CheckboxesTopic />
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          boxShadow: "none",
          borderTop: "solid 1px lightgrey",
          backgroundColor: "#edf2f4",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <CheckboxesLevel />
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          boxShadow: "none",
          borderTop: "solid 1px lightgrey",
          backgroundColor: "#edf2f4",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <CheckboxesPrice />
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          boxShadow: "none",
          borderTop: "solid 1px lightgrey",
          backgroundColor: "#edf2f4",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Course duration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <CheckboxesDuration />
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div></div>
    </div>
  );
}
