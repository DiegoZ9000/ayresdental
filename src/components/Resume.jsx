import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles (theme =>({
  mainContainer: {
    background: "#222"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
    "&:before": {
      left: "calc(50% - 1px)",
      right: "auto"
    }
  }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#D7B46A",
    color: "#222",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#878787",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography 
        variant="h4" 
        align="center" 
        className={classes.heading}
        >
          Jonatan Dyba
          <br/>
          Experiencia Laboral
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography 
          variant="h2" 
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}
          >
            <Typography 
            variant="h5" 
            align="left" 
            className={classes.subHeading}
              style={{ color: "tomato" }}
            >
              Julio 2017 - Presente.
            </Typography>
            <Typography 
            variant="body1" 
            align="left" 
            style={{ color: "tan"}}
            >
              Clinica Odontológica Pilar
            </Typography>
            <Typography 
            variant="subtitle1" 
            align="left"
            style={{ color: "#878787" }}
            >
              Odontólogo Endodoncista y resolución de urgencias.
              Tel: (011) 64866675.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}
          >
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
              style={{ color: "tomato" }}
            >
              Octubre 2017  - Octubre 2019
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "tan" }}
            >
              Clínica Apesa.
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "#878787" }}
            >
              Odontólogo Endodoncista y resolución de urgencias.
              Tel: (011) 4797- 4455.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}
          >
            <Typography
              variant="h5"
              align="left"
              className={classes.subHeading}
              style={{ color: "tomato" }}
            >
              Junio 2012 – Julio 2015
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "tan" }}
            >
              Clínica Dental Medicine
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "#878787" }}
            >
              Odontólogo General y resolución de urgencias.
              Tel: (011)- 4750- 0602.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Resume
