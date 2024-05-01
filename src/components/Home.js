import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Grid, Typography, Box, Link, Badge, 
  Tooltip, Toolbar, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { useMediaQuery } from 'react-responsive';
import img1 from '../assets/images/vitthal_office_social_2.jpg';
import pdf1 from '../assets/CV/Vitthal_Bhandari_CV_2024.pdf';

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
  drawer: {
    backgroundColor: '#20232a',
    color: '#61dafb'
  },
  tab: {
    minHeight: '59.5px'
  },
  indicator: {
    backgroundColor: '#61dafb',
    height: '3px',
  },
  name: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 600,
    fontSize: '40px',
    padding: '0px',
    textAlign: 'left',
    lineHeight: '1.2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  subname: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    textAlign: 'left',
    lineHeight: '20pt',
    fontSize: '13pt',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bio: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.8',
    textAlign: 'justify',
  },
  accordionbio: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 500,
    fontSize: '11pt',
    textAlign: 'justify',
  },
  links: {
    color: '#1d9bf0',
  },
  pubs: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 600,
    fontSize: '30px',
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
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 500,
    fontSize: '13pt',
    textAlign: 'left',
  },
  pub_names: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    fontSize: '13pt',
    textAlign: 'left',
  },
  pub_venue: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    fontSize: '13pt',
    textAlign: 'left',
  },
  contact: {
    fontFamily: "'Open Sans', sans-serif",
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
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    fontSize: '12px',
    textAlign: 'center',
  },
  years: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    fontSize: '11px',
    color: '#888',
    textAlign: 'center',
  },
  project: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    fontSize: '12pt',
    textAlign: 'justify',
  },
  project_heading: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 500,
    fontSize: '15pt',
    textAlign: 'left',
  },
  customBadge: {
    backgroundColor: "#61dafb",
    color: "white"
  },
  book: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 400,
    fontSize: '0.875rem',
    textAlign: 'left',
  },
  news: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    fontSize: '13pt',
    textAlign: 'justify',
  },
  news_name: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 600,
    fontSize: '25px',
    padding: '0px',
    right: '150px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon_link: {
    "&:hover": {
      color: "#a08036 !important"
    }
  },
  code_and_preprint: {
    fontSize: '13px', 
    fontWeight: 500, 
    color: '#a08036', 
    textDecoration: "none",
    "&:hover": {
      color: "black !important",
      borderBottom: "1px dotted #000",
      cursor: 'pointer'
    }
  }
}));

export default function Home() {
  const BlueOnGreenTooltip = withStyles({
    tooltip: {
      color: "white",
      backgroundColor: "black"
    }
  })(Tooltip);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const classes = useStyles();
  const [value, setValue] = React.useState({
    value: 0,
  left: false});

  const handleChange = (event, newValue) => {
    setValue({ ...value, value: newValue });
    
  };

  const toggleDrawer = ( open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setValue({ ...value, left: open });
  };
  return (
    <div className={classes.root}>
      {
        isTabletOrMobile ? 
        <AppBar position={"fixed"} className={classes.appbar}>
          <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer( true)}
          >
            <MenuIcon />
          </IconButton>
          Vitthal Bhandari
          <Drawer
            anchor='left'
            open={value['left']}
            onClose={toggleDrawer( false)}
            classes={{paper: classes.drawer}}
          >
          <Tabs
          orientation={isTabletOrMobile ? 'vertical' : 'horizontal'}
          value={value['value']}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ indicator: classes.indicator }}

          variant={isTabletOrMobile ? "scrollable" : "standard"}
          scrollButtons={isTabletOrMobile ? "on" : "off"}
          >
          <Tab label="About" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Publications" {...a11yProps(2)} />
          </Tabs>
          </Drawer>
          </Toolbar>
        </AppBar>
        : 
        <AppBar position={isTabletOrMobile ? "relative" : "fixed"} className={classes.appbar}>
        <Tabs
          orientation={isTabletOrMobile ? 'vertical' : 'horizontal'}
          value={value['value']}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ indicator: classes.indicator }}
    
          variant={isTabletOrMobile ? "scrollable" : "standard"}
          scrollButtons={isTabletOrMobile ? "on" : "off"}
          centered
        >
          <Tab label="About" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Publications" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      }
      <Grid container spacing={3} justify="center"  style={{ marginTop: '5px' }}>

        { ((isTabletOrMobile && value['value'] === 0) || (!isTabletOrMobile)) && <Grid item xs={12} md={3} lg={3}>
          <Grid container spacing={5} direction="column" alignItems="center" justifyContent="center" style={{ marginTop: '40px' }}>
            
            <Grid item xs={12} style={{ marginTop: 'inherit'}}>
              <img src={img1} alt="profile_pic" style={{ maxWidth: '57%', objectFit: 'contain', border: '#404040 1px solid', marginBottom: '15px' }}></img>
              <br></br>
              <Typography className={classes.name}>Vitthal</Typography>
              <Typography className={classes.name}>Bhandari</Typography>
              <br></br>
              <Typography className={classes.subname}>Engineer II</Typography>
              <Typography className={classes.subname}>American Express</Typography>
              <Typography className={classes.subname}>BITS Pilani batch of '21</Typography>
              <br></br>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                <BlueOnGreenTooltip  title="CV" placement="top" arrow>
                  <a className={classes.icon_link} target="_blank" style={{ color: '#a08036', paddingRight: '10px' }} href={pdf1} rel='noopener noreferrer'>
                    <i
                      className="ai ai-cv-square ai-2x"
                    >
                    </i>
                  </a>
                </BlueOnGreenTooltip >
                <BlueOnGreenTooltip  title="GitHub" placement="top" arrow>
                <Link target="_blank" href="https://github.com/vitthal-bhandari">
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="2x"
                    style={{ color: 'black', paddingRight: '10px' }}
                    className={classes.icon_link} 
                  />
                </Link>
                </BlueOnGreenTooltip >
                <BlueOnGreenTooltip  title="LinkedIn" placement="top" arrow>
                <Link target="_blank" href="https://www.linkedin.com/in/vitthal-bhandari/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    style={{ color: '#0a66c2', paddingRight: '10px' }}
                    className={classes.icon_link} 
                  />
                  
                </Link>
                </BlueOnGreenTooltip >
                <BlueOnGreenTooltip  title="Twitter" placement="top" arrow>
                <Link target="_blank" href="https://twitter.com/vit_bhandari">
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    size="2x"
                    style={{ color: '#1d9bf0', paddingRight: '10px' }}
                    className={classes.icon_link} 
                  />
                </Link>
                </BlueOnGreenTooltip >
                <BlueOnGreenTooltip  title="Google Scholar" placement="top" arrow>
                <a className={classes.icon_link}  target="_blank" style={{ color: '#2873EB', paddingRight: '10px' }} href="https://scholar.google.com/citations?user=ZfdsC-AAAAAJ&hl=en"  rel='noopener noreferrer'>
                  <i
                    className="ai ai-google-scholar-square ai-2x"
                  >
                  </i>
                </a>
                </BlueOnGreenTooltip >
                <BlueOnGreenTooltip  title="Semantic Scholar" placement="top" arrow>
                <a className={classes.icon_link}  target="_blank" style={{  paddingRight: '10px' }} href="https://www.semanticscholar.org/author/Vitthal-Bhandari/2160539147"  rel='noopener noreferrer'>
                  <i
                    className="ai ai-semantic-scholar-square ai-2x"
                  >
                  </i>
                </a>
                </BlueOnGreenTooltip >
              </Grid>
            </Grid>

          </Grid>
        </Grid>}

        <Grid item xs={12} md={6} lg={6}>
          <TabPanel value={value['value']} index={0}>
            <Grid container spacing={0} style={{ marginTop: isTabletOrMobile?'0': '60px' }}>

              <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  About Me
                </Typography>
              </Grid>

              <Grid item xs={12}>
                
                <Typography className={classes.bio}>
                  <p>I am an engineer at American Express, helping them build features for their homegrown fin-bot <i>ask-Finance</i>, which has a monthly footfall of over 5k sessions. I have worked on uscases ranging from frontend, UI design, and backend to artifical intelligence and developer productivity.</p>

                  <p>I graduated from <Link target="_blank" href="https://www.bits-pilani.ac.in/" className={classes.links}>Birla Institute of Technology and Science, Pilani</Link> with a major in Computer Science and minor in Data Science in 2021.</p>

                  <p>I have worked with modern technologies including Next.JS, React, Material UI, & Typescript (for frontend), Python, Flask & Sanic (for backend), Solr, Oracle SQL, Elasticsearch, & Dremio (for indexing and storing data), and Git & Jenkins (for version control and CI/CD).</p>

                  <p>In a parallel world, I hustle and follow my passion for ML research. I have interests in NLP, HCI, & Social Computing. To this end I have done extensive work on the use of LLMs in moderating hate speech on social media platforms.</p>

                  <p>You can reach out to me at <Link href="mailto:vitthalbhandari98@gmail.com" className={classes.links}>vitthalbhandari98@gmail.com</Link> for any questions.
                  
                  I am also active on <Link target="_blank" href="https://www.linkedin.com/in/vitthal-bhandari/" className={classes.links}>LinkedIn</Link> and <Link target="_blank" href="https://twitter.com/vit_bhandari" className={classes.links}>Twitter</Link>.</p>

                </Typography>

              </Grid>

            </Grid>
          </TabPanel>

          <TabPanel value={value['value']} index={2}>
            <Grid container spacing={0} style={{ marginTop: '60px' }}>
              
              <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  Preprints
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.pub_item}>
                <Typography className={classes.pub_heading}>On the Challenges of Building Datasets for Hate Speech Detection</Typography>
                <Typography className={classes.pub_names}><u>Vitthal Bhandari</u></Typography>
                <Typography className={classes.pub_venue}><span style={{ fontWeight: 500 }}>Arxiv</span> <span style={{float: 'right'}}> <a className={classes.code_and_preprint} target="_blank" rel='noreferrer' href="https://arxiv.org/abs/2309.02912/">MANUSCRIPT</a> </span></Typography>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  Workshops
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.pub_item}>
                <Typography className={classes.pub_heading}>bitsa_nlp@LT-EDI-ACL2022: Leveraging Pretrained Language Models for Detecting Homophobia and Transphobia in Social Media Comments</Typography>
                <Typography className={classes.pub_names}><u>Vitthal Bhandari</u> and Poonam Goyal</Typography>
                <Typography className={classes.pub_venue}><span style={{ fontWeight: 500 }}>ACL 2022</span> {'\u25Cb'} <em>The Second Workshop on LT-EDI</em> <span style={{float: 'right'}}> <a className={classes.code_and_preprint} target="_blank" rel='noreferrer' href="https://github.com/vitthal-bhandari/Homophobia-Transphobia-Detection">CODE</a> {'\u25Cf'}  <a className={classes.code_and_preprint} target="_blank" rel='noreferrer' href="https://aclanthology.org/2022.ltedi-1.18/">MANUSCRIPT</a> </span></Typography>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  Book Chapters
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.pub_item}>
                <Typography className={classes.pub_heading}>Image Processing in Retinal Imaging</Typography>
                <Typography className={classes.pub_names}>Rehana Khan, <u>Vitthal Bhandari</u>, Sundaresan Raman, Abhishek Vyas, Akshay Raman, Maitreyee Roy and Rajiv Raman</Typography>
                <Typography className={classes.pub_venue}><span style={{ fontWeight: 500 }}>Springer Nature 2023</span> {'\u25CB'} <em>Digital Eye Care and Teleophthalmology: A Practical Guide to Applications</em> <span style={{float: 'right'}}> <a className={classes.code_and_preprint} target="_blank" rel='noreferrer' href="https://link.springer.com/chapter/10.1007/978-3-031-24052-2_9">MANUSCRIPT</a> </span></Typography>
              </Grid>
            </Grid>
          </TabPanel>
          
          <TabPanel value={value['value']} index={1}>
            <Grid container spacing={0} style={{ marginTop: '60px' }}>

            <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  Miscellaneous
                </Typography>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                  Minimalist Tile Matching Game
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/vitthal-bhandari/minimalistic-tile-matching-game" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>             
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>Implemented a minimalist version of the tile-matching game in a Next.js project bootstrapped with create-next-app. Used Material UI for components and Redux for state management.  </li>
                  <li className={classes.project}>Deployed the game on a vercel server at <Link href="https://minimalistic-tile-matching-game.vercel.app" className={classes.links}>minimalistic-tile-matching-game.vercel.app/</Link>.  </li>
                </ul>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Typography className={classes.pubs}>
                  Shared Tasks
                </Typography>
              </Grid>

              <Grid item className={classes.pub_item}>
                <Typography className={classes.project_heading}>
                  Homophobia/Transphobia Detection in social media comments
                  <span style={{float: 'right'}}>
                  <Link target="_blank" href="https://github.com/vitthal-bhandari/Homophobia-Transphobia-Detection" style={{paddingRight: '8px'}}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        style={{ color: 'black'}}
                      />
                  </Link>             
                  </span>   
                </Typography>
                <ul>
                  <li className={classes.project}>Experimented with a variety of mono-lingual and multi-lingual transformer models along with data augmentation techniques for detection of homophobic/transphobic content among topical youtube comments in 3 settings: English, Tamil and code-mixed Tanglish language</li>
                </ul>
              </Grid>

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

        </Grid>

      </Grid>

    </div>
  );
}
