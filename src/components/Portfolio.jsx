import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from '@material-ui/core'
import Navbar from './Navbar'
import project1 from '../images/obra1.jpg'
import project2 from '../images/obra2.jpg'
import project3 from '../images/frente.jpg'
import project4 from '../images/tercera.jpg'
import project5 from '../images/segunda.jpg'
import project6 from '../images/cuarta.jpg'

const useStyles = makeStyles({
  mainContainer: {
    background: "#222",
    height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto"
  }
});

const Portfolio = () => {
  const classes = useStyles()
  return (
  <Box component="div" className={classes.mainContainer}>
    <Navbar />
    <Grid container justify="center">
      {/* Project 1 */}
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              height="250"
              image={project1}
            />
             </CardActionArea>
          </Card>
        </Grid>
      {/* Project 2 */}
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 2"
              height="250"
              image={project2}
            />
            
          </CardActionArea>
        </Card>
        </Grid>
      {/* Project 3 */}
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 3"
              height="250"
              image={project3}
            />
          </CardActionArea>
        </Card>
        </Grid>
      {/* Project 4 */}
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 4"
              height="250"
              image={project4}
            />
          </CardActionArea>
        </Card>    
      </Grid>
        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 5"
                height="250"
                image={project5}
              />
            </CardActionArea>
          </Card>
        </Grid>
        {/* Project 6 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 6"
                height="250"
                image={project6}
              />
            </CardActionArea>
          </Card>
        </Grid>
    </Grid>
  </Box>
  )
};

export default Portfolio
