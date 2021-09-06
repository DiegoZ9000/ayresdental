import React from 'react'
import { makeStyles, withStyles} from '@material-ui/styles'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'

const useStyles = makeStyles(theme=>({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "#222",
    borderColor: "#222"
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#222",
    },
    "& label": {
      color: "#222"
    },
    "& .MuiOutlinedInput-root": {
      "&fieldset": {
        borderColor: "tan"
      },
      "&:hover fieldset": {
        borderColor: "#878787"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#222"
      }
    },
  },
})(TextField);

const Contacts = () => {

  const classes = useStyles();

  return (
    <Box component="div" style={{background: "233", height: "100vh"}}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography 
          variant="h5" 
          style={{color: "#222", textAlign:"center", textTransform:"uppercase"}}
          >
            Contacto
          </Typography>
          <InputField 
          fullWidth={true} 
          label="Name" 
          variant="outlined" 
          inputProps={{style:{color: "#222"}}}
          margin= "dense"
          size="medium"
          />
          <br/>
          <InputField 
          fullWidth={true} 
          label="Email" 
          variant="outlined"
          inputProps={{ style: { color: "#222" } }} 
          margin="dense"
          size="medium"
          />
          <br/>
          <InputField 
          fullWidth={true} 
          label="Obra Social" 
          variant="outlined" 
          inputProps={{ style: { color: "#222" } }}
          margin="dense"
          size="medium"
          />
          <br/>
          <InputField 
          fullWidth={true} 
          label="Consulta" 
          variant="outlined" 
          inputProps={{ style: { color: "#222" } }}
          margin="dense"
          size="medium"
          />
          <br/>
          <br/>
          <Button 
          variant="outlined" 
          fullWidth={true} 
          endIcon={<SendIcon />}
          className={classes.button}
          >
            Enviar
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts
