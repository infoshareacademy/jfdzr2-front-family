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
        
           
              <RadioButtons />
            
         
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
          id="panel2b-header"
        >
          <Typography className={classes.heading}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            
              <CheckboxesTopic />
            
          
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
          id="panel2c-header"
        >
          <Typography className={classes.heading}>Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            
              <CheckboxesLevel />
            
        
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
          id="panel2d-header"
        >
          <Typography className={classes.heading}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            
              <CheckboxesPrice />
           
          
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
          id="panel2e-header"
        >
          <Typography className={classes.heading}>Course duration</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            
              <CheckboxesDuration />
            
         
        </AccordionDetails>
      </Accordion>
      <div></div>
    </div>
  );
}
