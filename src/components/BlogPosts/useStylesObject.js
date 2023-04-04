import { makeStyles } from "@material-ui/core/styles";

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
    },
    gridTitle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: '0px'
    },
    bio: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 300,
      fontSize: '12pt',
      textAlign: 'justify',
    },
    title: {
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 300,
        fontSize: '28px',
        padding: '0px',
        right: '150px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      img: {
          maxHeight: '300px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
      },
      imgSmall: {
        maxHeight: '60px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
  }));

  export default useStyles;