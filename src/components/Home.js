import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Grid, Typography, Box, Link, Divider, Chip, Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { useMediaQuery } from 'react-responsive';
import EmailIcon from '@material-ui/icons/Email';

import img1 from '../assets/images/vitthal-bw.jpg';
import img_paypal from '../assets/images/paypal.png';
import img_scb from '../assets/images/scb.png';
import img_isro from '../assets/images/isro1.png';
import img_bits from '../assets/images/bitspilani.png';
import pdf1 from '../assets/CV/Vitthal_CV_Data_Science.pdf';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
  tab: {
    minHeight: '59.5px'
  },
  indicator: {
    backgroundColor: '#61dafb',
    height: '3px',
  },
  name: {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
    fontSize: '65px',
    padding: '0px',
    textAlign: 'left',
    lineHeight: '50pt',
  },
  subname: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    textAlign: 'left',
    lineHeight: '20pt',
    fontSize: '13pt'
  },
  bio: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '13pt',
    textAlign: 'justify',
  },
  links: {
    color: '#1d9bf0',
  },
  pubs: {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
    fontSize: '40px',
    padding: '0px',
    textAlign: 'left',
    lineHeight: '45pt',
  },
  pub_item: {
    borderLeft: '2px solid #e5e5e5',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '7px'
  },
  pub_heading: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: '13pt',
    textAlign: 'left',
  },
  pub_names: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '13pt',
    textAlign: 'left',
  },
  pub_venue: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '13pt',
    textAlign: 'left',
  },
  contact: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '13pt',
    textAlign: 'center',
  },
  chips: {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  institution: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '12px',
    textAlign: 'center',
  },
  years: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '11px',
    color: '#888',
    textAlign: 'center',
  },
  project: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    fontSize: '12pt',
    textAlign: 'justify',
  },
  project_heading: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: '15pt',
    textAlign: 'left',
  },
  customBadge: {
    backgroundColor: "#61dafb",
    color: "white"
  }
}));

export default function Home() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ indicator: classes.indicator }}

          variant={isTabletOrMobile ? "scrollable" : "standard"}
          scrollButtons={isTabletOrMobile ? "on" : "off"}
          centered
        >
          <Tab label="About" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Publications" {...a11yProps(1)} />
          <Tab label="Projects" {...a11yProps(2)} />
          <Tab label="Contact Me" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} lg={7}>
          <TabPanel value={value} index={0}>
            <Grid container spacing={0} style={{ marginTop: '40px' }}>
              <Grid item xs={12} lg={6}>
                <Typography className={classes.name}>VITTHAL</Typography>
                <Typography className={classes.name}>BHANDARI</Typography>

                <Typography className={classes.subname} style={{ marginTop: '15px' }}>Data Science Analyst</Typography>
                <Typography className={classes.subname}>Standard Chartered Bank</Typography>
                <Typography className={classes.subname}>BITS Pilani Alumnus</Typography>

                <Grid container justify="left" style={{ marginTop: '10px' }}>
                  <a target="_blank" style={{ color: '#a08036', paddingRight: '10px' }} href={pdf1} rel='noopener noreferrer'>
                    <i
                      className="ai ai-cv-square ai-2x"
                    >
                    </i>
                  </a>
                  <Link target="_blank" href="https://github.com/vitthal-bhandari">
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      style={{ color: 'black', paddingRight: '10px' }}
                    />
                  </Link>
                  <Link target="_blank" href="https://www.linkedin.com/in/vitthal-bhandari/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      style={{ color: '#0a66c2', paddingRight: '10px' }}
                    />
                  </Link>
                  <Link target="_blank" href="https://twitter.com/vit_bhandari">
                    <FontAwesomeIcon
                      icon={faTwitterSquare}
                      size="2x"
                      style={{ color: '#1d9bf0', paddingRight: '10px' }}
                    />
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <img src={img1} alt="profile_pic" style={{ width: '100%', objectFit: 'contain', border: '#404040 1px solid' }}></img>
              </Grid>

              <Grid item xs={12} style={{ marginTop: '35px' }}>
                <Typography className={classes.bio}>
                  <p>I am a Data Science Analyst at Standard Chartered Bank GBS, India where I'm part of the DFT Data Science team, working on some innovative, pressing usecases.</p>

                  <p>Prior to joining SCB I gradated from <Link target="_blank" href="https://www.bits-pilani.ac.in/" className={classes.links}>Birla Institute of Technology and Science, Pilani</Link> - Pilani Campus with a Major in <b>Computer Science</b> and Minor in <b>Data Science</b>. The minor degree significantly shifted my attention to the vast field of data science with specific focus on deep learning.</p>

                  <p>My interests range from <i>natural language processing (NLP), especially word embeddings,</i> to applications of <i>computer vision in healthcare</i> such as early diagnosis of abnormalities in cells and tissues. To this end, I worked under <Link target="_blank" href="https://www.bits-pilani.ac.in/pilani/sundaresanraman/profile" className={classes.links}>Dr. Sundaresan Raman</Link>, along with a team of doctors and researchers to submit a review chapter on retinal imaging techniques for a publication under Sringer Nature. Additionally I have been working on a project exploring self supervised approaches to <Link target="_blank" href="https://en.wikipedia.org/wiki/Speaker_diarisation" className={classes.links}>Speaker Diarization</Link> (The task of identifying <i>"who spoke when?"</i> in audio clips). This has led me to develop a keen interest in <i>audio processing</i> and <i>speech embeddings</i> as an extension to NLP.</p>

                  <p>Previously, I had the wonderful opportunity of spending summers interning at Standard Chartered GBS and RRSC West - Jodhpur, ISRO, exposing myself to technologies such as React, SpringBoot, IDL and Elasticsearch. I recently completed a semester long internship at PayPal, Bangalore where I worked on fullstack web development. These internships provided me with a wholistic view of the opportunities in CS.</p>
                </Typography>

              </Grid>

              <Grid item xs={12} style={{ marginTop: '35px' }}>
                <Grid container justify="center">
                  <Grid item xs={12} lg={3} style={{ marginBottom: '20px' }}>
                    <img src={img_paypal} alt="paypal_logo" style={{ height: '50px' }}></img>
                    <Typography className={classes.institution}>PayPal, Bengaluru</Typography>
                    <Typography className={classes.years}>Spring 2021</Typography>
                  </Grid>
                  <Grid item xs={12} lg={3} style={{ marginBottom: '20px' }}>
                    <img src={img_scb} alt="scb_logo" style={{ height: '50px' }}></img>
                    <Typography className={classes.institution}>SCB GBS, Bengaluru</Typography>
                    <Typography className={classes.years}>Summer 2020</Typography>
                    <Typography className={classes.years}>Fall 2021 - Present</Typography>
                  </Grid>
                  <Grid item xs={12} lg={3} style={{ marginBottom: '20px' }}>
                    <img src={img_isro} alt="isro_logo" style={{ height: '50px' }}></img>
                    <Typography className={classes.institution}>RRSC, Jodhpur</Typography>
                    <Typography className={classes.years}>Summer 2019</Typography>
                  </Grid>
                  <Grid item xs={12} lg={3} style={{ marginBottom: '20px' }}>
                    <img src={img_bits} alt="bits_logo" style={{ height: '50px' }}></img>
                    <Typography className={classes.institution}>BITS Pilani</Typography>
                    <Typography className={classes.years}>2017 - 2021</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={0} style={{ marginTop: '40px' }}>
              <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  Book Chapters
                </Typography>
              </Grid>
              <Grid item className={classes.pub_item}>
                <Typography className={classes.pub_heading}>Image Processing in Retinal Imaging</Typography>
                <Typography className={classes.pub_names}>Rehana Khan, <u>Vitthal Bhandari</u>, Sundaresan Raman, Abhishek Vyas, Akshay Raman, Maitreyee Roy, Rajiv Raman</Typography>
                <Typography className={classes.pub_venue}><span style={{ fontWeight: 500 }}>Springer Nature 2021</span> {'\u25CB'} <em>Teleophthalmology and digital health: A practical guide to applications</em> (Submitted)</Typography>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={0} style={{ marginTop: '40px' }}>

              <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  Course Projects
                </Typography>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                  Sentiment Analysis using self-trained word vectors
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/Vitthal98/Sentiment-analysis" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/Sentiment-analysis/blob/master/stage%201/Vitthal_2017A7PS0136P_report.pdf" style={{paddingRight: '8px'}}>
                    <Badge classes={{ badge: classes.customBadge }} badgeContent={1} anchorOrigin={{ vertical: 'bottom',horizontal: 'right',}} style={{right: '-3', top: '-2px', padding: ' 0 4px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                    </Badge>
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/Sentiment-analysis/blob/master/stage%202/Vitthal_Bhandari_2017A7PS0136P_report.pdf" style={{paddingRight: '8px'}}>
                    <Badge badgeContent={2} color="primary" anchorOrigin={{ vertical: 'bottom',horizontal: 'right',}} style={{right: '-3', top: '-2px', padding: ' 0 4px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                    </Badge>
                  </Link>               
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>Implemented word2vec models - Continuous Bag of Words Model (CBOW), Skip-Gram Model (SG), and Skip-Gram with Negative Sampling (SGNS) to train my own word vectors on the Reuters Corpus of news articles with stochastic gradient descent (SGD)</li>
                  <li className={classes.project}>Built a sentiment analysis model using a simple RNN on a movies review dataset and compared the accuracy of self-trained word embeddings against much better performing GLoVe vectors</li>
                  <li className={classes.project}>All neural networks were coded in Python and NumPy alone without any external libraries or frameworks</li>
                </ul>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                Cross Lingual Document Translator
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/Vitthal98/Cross-Lingual-Document-Translator" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/Cross-Lingual-Document-Translator/blob/main/Design_Document.pdf" style={{paddingRight: '8px'}}>
                    <Badge classes={{ badge: classes.customBadge }} badgeContent={1} anchorOrigin={{ vertical: 'bottom',horizontal: 'right',}} style={{right: '-3', top: '-2px', padding: ' 0 4px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                    </Badge>
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/Cross-Lingual-Document-Translator/blob/main/Result%20Document.pdf" style={{paddingRight: '8px'}}>
                    <Badge badgeContent={2} color="primary" anchorOrigin={{ vertical: 'bottom',horizontal: 'right',}} style={{right: '-3', top: '-2px', padding: ' 0 4px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                    </Badge>
                  </Link>               
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>{'Implemented a cross lingual document translator using statistical machine translation models IBM 1 and IBM 2 trained on a bilingual English <-> Dutch corpora'}</li>
                  <li className={classes.project}>Subsets of the dataset varying from 10,000 to 50,000 aligned sentences were used for training. Maximum accuracy measured using cosine similarity was 0.507 and using Jaccard coefficient was 0.349</li>
                  <li className={classes.project}>All IBM and EM models were coded using Python and NumPy alone without the use of any external libraries or frameworks</li>
                </ul>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                Multivariate Time Series Analytics
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/Vitthal98/Multivariate-Time-Series-Analytics" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/Multivariate-Time-Series-Analytics/blob/main/FoDS_Report_%232.pdf" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>             
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>Analyzed and implemented Vector Auto Regression (VAR) as an MVTS regression algorithm and employed it to predict future air quality index values based on past data using an air quality dataset</li>
                  <li className={classes.project}>Identified k-NN as an MVTS classification algorithm and implemented it (for different values of <i>k</i>) with dynamic time warping (DTW) on the binary classification task of predicting state of subject's eyes based on the EEG Eye State Data Set with 90% accuracy (k=5)</li>
                  <li className={classes.project}>For MVTS Clustering, existing k-means algorithm was implemented to cluster similar companies in the S&P 500 index based on their historical stock prices dataset. DTW euclidean distance was used to measure distance</li>
                  <li  className={classes.project}>Entire code was written in R</li>
                </ul>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                Analyzing high dimensional data and Gradient Descent
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/Vitthal98/High-Dimensional-Data-and-Gradient-Descent" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/High-Dimensional-Data-and-Gradient-Descent/blob/main/FoDS%20Report.pdf" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>             
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>Implemented PCA on a high dimensional (60-D) Sonar dataset to prevent overfitting by reducing dimensions to 19 and increasing testing accuracy of SVM classifier from 55% to 66%</li>
                  <li className={classes.project}>Implemented PCA, SVD and Kernel PCA on two datasets. KPCA was able to perform consistently better, even on non-linear dataset</li>
                  <li className={classes.project}>Compared the time and performance of Batch Gradient Descent, Stochastic Gradient Descent and Mini-batch Gradient Descent on the Boston Housing Dataset</li>
                  <li  className={classes.project}>Additionally, implemented and analyzed the performance of algorithms with adaptive learning rates such as mini-batch with momentum, Nesterov momentum, AdaGrad and Adam</li>
                </ul>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                Forecasting and Analysis of Renewable Energy
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/Vitthal98/Forecasting-and-Analysis-of-Renewable-Energy" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/Forecasting-and-Analysis-of-Renewable-Energy/blob/main/Forecasting%20and%20Analysis%20of%20Renewable%20Energy.pptx" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>             
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>Analyzed solar and wind energy for Charanka Solar Park (Gujarat) using hourly data from 2000-2010 by identifying inherent correlations and underlying probability distributions</li>
                  <li className={classes.project}>Identified seasonality in the wind speed data through time series decomposition and modelled the trend from 2000-2010 using SARIMA forecasting</li>
                  <li className={classes.project}>Forecasted the wind speed for Jan 2011 based on the above model wth an RMSE of 0.59 and MAPE of 19.53 %</li>
                </ul>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                Multilayer Perceptron (MLP) Classifier in C
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/Vitthal98/Multi-layer-perceptron" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>
                  <Link target="_blank" href="https://github.com/Vitthal98/Multi-layer-perceptron/blob/main/ML%20Assignment-1%20Report%202018-19.pdf" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>             
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>Implemented a generalized MLP network in C with any number of layers, different activation functions (Sigmoid and Tanh) and different types of gradient descent algorithms (batch gradient descent and gradient descent with momentum)</li>
                  <li className={classes.project}>Implemented a binary classification problem on the blood transfusion service center dataset using above MLP with softmax layer at the output, achieving 100 % accuracy</li>
                  <li className={classes.project}>Similarly modelled a multi-class classifier on the contraceptive method choice dataset using the above MLP achieving 81.5 % accuracy</li>
                </ul>
              </Grid>

            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container spacing={0} style={{ marginTop: '40px' }}>
              <Grid item xs={12}>
                <Typography className={classes.contact}>
                  You can reach out to me on my <Link href="mailto:vitthalbhandari98@gmail.com" className={classes.links}>personal email</Link> for any questions or potential opportunities for collaboration.
                  <br></br>
                  I am also active on <Link target="_blank" href="https://www.linkedin.com/in/vitthal-bhandari/" className={classes.links}>LinkedIn</Link> and <Link target="_blank" href="https://twitter.com/vit_bhandari" className={classes.links}>Twitter</Link> if you wish to connect there.
                </Typography>
                <br></br>
                <Typography className={classes.contact}>
                  <EmailIcon style={{ verticalAlign: 'middle' }} /> vitthalbhandari98@gmail.com
                </Typography>
                <br></br>
                <Divider />
                <br></br>
                <Typography className={classes.contact}>
                  If you feel my profile is suitable for research assistant/junior research fellow/machine learning engineer positions in any of the below mentioned domains, I'd be more than happy to discuss possible collaborations!
                </Typography>
                <div className={classes.chips}>
                  <Chip
                    variant="outlined"
                    size="medium"
                    label="Multilingual NLP"
                    clickable
                    color="primary"
                  />
                  <Chip
                    variant="outlined"
                    size="medium"
                    label="Multimodal AI"
                    clickable
                    style={{ borderColor: "#1d9bf0", color: "#1d9bf0" }}
                  />
                  <Chip
                    variant="outlined"
                    size="medium"
                    label="Spoken Language Processing"
                    clickable
                    color="secondary"
                  />
                  <Chip
                    variant="outlined"
                    size="medium"
                    label="Computational Biology"
                    clickable
                    style={{ borderColor: "#ff9770", color: "#ff9770" }}
                  />
                  <Chip
                    variant="outlined"
                    size="medium"
                    label="Bioinformatics"
                    clickable
                    style={{ borderColor: "#cce00e", color: "#cce00e" }}
                  />
                </div>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>

    </div>
  );
}
