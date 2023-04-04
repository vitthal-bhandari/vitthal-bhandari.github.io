import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    links: {
        color: '#1d9bf0',
      },
}));

const LinkComponent = (props) => {

  const classes = useStyles();

  const {href, text} = props

  return (
    <Link target="_blank" href={href} className={classes.links}>{text}</Link>
  );
}

export default LinkComponent;