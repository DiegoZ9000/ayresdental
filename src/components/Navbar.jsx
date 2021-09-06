import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  ListItem,
  Grid,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from '@material-ui/core';
import {
  AssignmentInd,
  Home, 
  Apps,
  ContactMail
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../avatar.png'

// CSS Styles

const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
    width: 250,
    background: "#222",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin:"0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  footer: {
    color: "#878787",
    fontSize: "0.9rem"
  },
  listItem: {
    color:"#878787",
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Curriculum",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Consultorio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacto",
    listPath: "/contacts"
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  })

  const toggleSlider = ((slider, open) => () => {
    setState({ ...state, [slider]: open });
  });

  const classes = useStyles();

  const sideList = slider => (
    <Box 
    className={classes.menuSliderContainer} 
    component="div"
    onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="ClaseZ"/>
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
        <ListItem button key={key} component={Link} to={lsItem.listPath}>
          <ListItemIcon className={classes.listItem}>
            {lsItem.listIcon}
          </ListItemIcon>
          <ListItemText className={classes.listItem} primary={lsItem.listText}/>
        </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
		<>
			<Box component="nav">
				<AppBar position="static" style={{ background: "#222" }}>
					<Toolbar>
						<Grid container justify="space-between">
							<IconButton onClick={toggleSlider("right", true)}>
                <MenuIcon style={{ color: "#878787", fontSize: 25 }} />
								<Typography variant="h5" style={{ color: "#878787" }}>
									
								</Typography>
							</IconButton>
						</Grid>
						<MobilRightMenuSlider
							anchor="right"
							open={state.right}
							onClose={toggleSlider("right", false)}
						>
							{sideList("right")}
						</MobilRightMenuSlider>
            <Typography  className={classes.footer}>
              Fernán Félix de Amador 1550 Vte López.
              Tel: 15-2400-1485.
            </Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default Navbar
