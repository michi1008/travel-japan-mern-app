import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: '1rem',
  },

  prefecture: {
    marginLeft: '1rem',
    color: '#9d0191',
    fontWeight: 'bold'
  },
  place: {
    marginLeft: '1rem',
    marginTop: '1rem',
    color: '#120078',
    fontWeight: '700'
  },
  description: {
    color: '#822659',
    
  }
});