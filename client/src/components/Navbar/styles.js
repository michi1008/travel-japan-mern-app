import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    
  },
  heading: {
    color: '#ff5e78',
    textDecoration: 'none',
    
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  [theme.breakpoints.down('sm')]: {
    image: {
      height: '1.3rem',
    },
    heading: {
      fontSize: '0.8rem',
      lineHeight: '0'
    },
    logout:{
      fontSize: '0.7rem',
      right: '1rem',
      minWidth: '2.5rem',
      padding: '3px, 10px',
    },
    button: {
      fontSize: '1rem',
      right: '1rem',
    },
    toolbar: {
      position: 'relative',
      width: '10rem',
    },
    appBar: {
      padding: '10px 0',
    },
    userName: {
      fontSize: '0.6rem',
      padding: '0 4px',
    }
  
  }
  
}));