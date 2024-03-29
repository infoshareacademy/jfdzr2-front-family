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



const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
          <Typography className={classes.heading}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#edf2f4" }}>
        
           
        <CheckboxesTopic topic={props.topic} onChange={props.onTopicChange}/>
         
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
          <Typography className={classes.heading}>Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
        

        <CheckboxesLevel level={props.level} onChange={props.onLevelChange} />


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
          <Typography className={classes.heading}>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            
        <CheckboxesPrice price={props.price} onChange={props.onPriceChange}/>
            
        
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
          <Typography className={classes.heading}>Duration</Typography>
        </AccordionSummary>
        <AccordionDetails>
           
              
              <CheckboxesDuration duration={props.duration} onChange={props.onDurationChange}/>
          

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
          <Typography className={classes.heading}>Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            
              <RadioButtons rating={props.rating} onChange={props.onRatingChange}/>    
            
         
        </AccordionDetails>
      </Accordion>
      <div></div>
    </div>
  );
}
