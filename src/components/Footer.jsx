import React, {useState} from 'react'
import { makeStyles, } from '@material-ui/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import LinkedIn from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "#878787",
      "&:hover": {
        fill: "#D7B46A",
        fontSize: "1.8rem"
      }
    },
  },
});

const Footer = () => {

  const [state, setState] = useState({
    isLinkedInClicked: false,
    isGitHubClicked: false,
    isFacebookClicked: false,
  });

  const urlClicked = (action, value) => () => {
    setState({ ...state, [action]: value });
  };

  if (state.isGitHubClicked === true || state.isLinkedInClicked === true) {
    const linkedInUrl = "https://www.linkedin.com/";
    const gitHubUrl = "https://github.com/";

    window.location.href = state && state.isGitHubClicked ? gitHubUrl : state.isLinkedInClicked ? linkedInUrl : "/";
    
  }

  const classes = useStyles();

  return (
    <BottomNavigation position="fixed" style={{ background: "#222" }}>
      <BottomNavigationAction
        onClick={urlClicked("isFacebookClicked", true)}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
      <BottomNavigationAction 
      onClick={urlClicked("isLinkedInClicked", true)} 
      className={classes.root} 
      style={{ padding: 0 }} 
      icon={<LinkedIn />}
      />
    </BottomNavigation>
    
  );
};

export default Footer;

