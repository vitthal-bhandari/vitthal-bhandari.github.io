import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minHeight: 250,
    maxWidth: 400,
    margin: "1em",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
  link: {
      color: '#1d9bf0',
    '&:hover': {
        color: 'black !important',
    },
  },
  readButton: {
    '&:hover': {
        backgroundColor: 'black',
        color: 'white !important',
    },
  }
});

const OutlinedCard = (props) => {

  const classes = useStyles();
  let navigate = useNavigate();

  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  const re = /_/gi;

  const { date, title, tags, description, image } = props.metadata

  const requireImg = require('../assets/blogimages/'+ date +'/'+image).default

  const onBlogPostRead = (date) => {
      navigate(date);
  }

  return (
    <Card className={classes.root} 
    classes={{root: state.raised ? classes.cardHovered: ""}}
    onMouseOver={()=>setState({ raised: true, shadow:6})} 
    onMouseOut={()=>setState({ raised:false, shadow:1 })} 
    raised={state.raised} zDepth={state.shadow}
    variant="outlined"
    >

        <CardMedia
            component="img"
            maxHeight="124"
            image={requireImg}
            alt="Social image"
        />
        <CardContent>
            <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            >
                {date.replace(re, '/')}
            </Typography>
            <Typography variant="h6" component="h2">
                <Link to={`/blog/${date}`} className={classes.link}>{title}</Link>
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {tags}
            </Typography>
            <Typography variant="body2" component="p">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" className={classes.readButton} onClick={() => {onBlogPostRead(date)}}>Read</Button>
        </CardActions>
    </Card>
  );
}

export default OutlinedCard;