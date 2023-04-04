import { AppBar, } from '@material-ui/core';
// import { useMediaQuery } from 'react-responsive';
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    overflowX: 'hidden',
    overflowY: 'hidden',
    '& li': {
      marginBottom: '5px',
    },
  },
  appbar: {
    minHeight: '60px',
    backgroundColor: '#20232a',
  },
  appTitle: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 300,
      lineHeight: 1.75,
      whiteSpace: 'normal',
      letterSpacing: '0.02857em',
      marginBottom: '-15px'
  },
  gridTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: '0px'
  },
}));

export default function AppBarComponent() {

  const classes = useStyles();

//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className={classes.root}>
        <AppBar position="relative" className={classes.appbar}>
            <Grid container spacing={2}>

                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4} className={classes.gridTitle}>
                    <Typography className={classes.appTitle}>VITTHAL BHANDARI's BLOG</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Link to="/blog" style={{color:'white', opacity:'0.7', marginBottom: '-15px'}}><p> About</p></Link>
                </Grid>

            </Grid>
        </AppBar>
    </div>
  );
}
