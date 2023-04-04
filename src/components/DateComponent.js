import React from "react";
import {Typography, Avatar, ButtonGroup, Box } from "@material-ui/core";
import avatar from '../assets/images/avatar.png'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share";

const DateComponent = (props) => {

  const re = /_/gi;

  const {date, title, description} = props

  const format_date = new Date(date.replace(re, '/'))
  const dobArr = format_date.toDateString().split(' ');
  const dobFormat = dobArr[1] + ' ' + dobArr[2] + ', ' + dobArr[3];

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Avatar alt="Vitthal Bhandari" src={avatar} />
      <Typography style={{color:'black', opacity:'0.7'}}>
      &nbsp; &nbsp; &nbsp;
      {dobFormat}
      &nbsp; &nbsp; &nbsp;
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">

          <EmailShareButton url={window.location.href} subject={'Hey! Look at this wonderful blog from Vitthal Bhandari'} body={title}>
            <EmailIcon size={32} round/>
          </EmailShareButton>

          <FacebookShareButton url={window.location.href} quote={`Hey! Look at this wonderful blog from Vitthal Bhandari - ` + `${title}`}>
            <FacebookIcon size={32} round/>
          </FacebookShareButton>

          <LinkedinShareButton url={window.location.href} title={title} source={"Vitthal Bhandari's Homepage"} summary={'Hey! Look at this wonderful blog from Vitthal Bhandari'}>
            <LinkedinIcon size={32} round/>
          </LinkedinShareButton>

          <RedditShareButton url={window.location.href} title={`Hey! Look at this wonderful blog from Vitthal Bhandari - ` + `${title}`}>
            <RedditIcon size={32} round/>
          </RedditShareButton>

          <TwitterShareButton url={window.location.href} title={`Hey! Look at this wonderful blog from Vitthal Bhandari - ` + `${title}`} hashtags={["AcademicChatter", "NLProc", "ReviewBlog"]}>
            <TwitterIcon size={32} round/>
          </TwitterShareButton>

        </ButtonGroup>

      </Box>
    </div>
  );
}

export default DateComponent;