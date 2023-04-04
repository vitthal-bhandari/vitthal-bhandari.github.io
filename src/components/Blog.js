import { AppBar, } from '@material-ui/core';
// import { useMediaQuery } from 'react-responsive';
import React from "react";
import Card from "./Card";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {BlogPostsMetadata} from '../BlogMetadata';
import { Link, } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px"
  },
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
  name: {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
    fontSize: '50px',
    padding: '0px',
    textAlign: 'left',
    lineHeight: '40pt',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  subname: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    textAlign: 'left',
    lineHeight: '20pt',
    fontSize: '13pt',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bio: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '12pt',
    textAlign: 'justify',
  },
}));

export default function Blog() {

  const classes = useStyles();

//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className={classes.root}>
        <AppBar position="relative" className={classes.appbar}>
            <Grid container spacing={2}>
            <Grid item xs={4}>
                <Link to="/" style={{color:'white', opacity:'0.7'}}><p>&#8592; Back to personal website</p></Link>
            </Grid>
            <Grid item xs={4} className={classes.gridTitle}>
                <Typography className={classes.appTitle}>VITTHAL BHANDARI's BLOG</Typography>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            
            
            </Grid>
        </AppBar>

        <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
        >
            <Grid item xs={12} sm={8} md={8}>
                <Typography className={classes.bio}>
                    <p>This blog arose out of the need to follow the ongoing rapid advancements in Natural Language Processing, Computational Linguistics,
                         and Computational Social Science. 
                        As I keep on reviewing the recent literature, I will post short 5 minute reviews and summaries of the papers I find interesting.
                    </p>

                    <p>
                        Also, since I'm not an expert in NLP yet, I might not be able to summarize the most technical and theoretical concepts. Yet, I will 
                        try my best to highlight papers that introduce a compelling trick, a crucial application or a significant improvement over SOTA's.
                    </p>
                </Typography>
            </Grid>

        </Grid>

        <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
        >
            {BlogPostsMetadata.map( singleBlog => {
                return  <Grid item xs={12} sm={6} md={4}>
                            <Card metadata={singleBlog}/>
                        </Grid>
            })}

        </Grid>
    </div>
  );
}
