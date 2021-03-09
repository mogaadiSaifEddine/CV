import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import imaf from '../image/FB_IMG_1595439469573_1_1_1.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    color : '#000000',
    font :'arial'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  name : {
    fontWeight : 'bold'

  },
}));

const  JeMePresnete=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imaf} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography gutterBottom variant="subtitle1" className = {classes.name}>
Mogaadi saif eddine            </Typography>
                <Typography gutterBottom variant="subtitle1">
licencié en informatique (développement web et android )                </Typography>
                <Typography variant="body2" gutterBottom>
Menzel Bourgouiba , Bizerte , Tunisie                </Typography>
                <Typography variant="body2" color="textSecondary">
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  à la recherche de ma premiére expérience professionelle 
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

  
export default  JeMePresnete;