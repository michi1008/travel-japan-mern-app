import { useState, useEffect} from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actionType from '../../constants/actionTypes'
import  useStyles from './styles'
import decode from 'jwt-decode'
import travel from '../../images/travel.png'
import japan from '../../images/japan.png'

const Navbar = () => {
  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const logout = () => {
    dispatch({ type: actionType.LOGOUT})
    history.push('/auth')
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token
    if(token) {
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    
    <AppBar className={classes.appBar} position='static' color='inherit'>   
    <div className={classes.brandContainer} >
    <img className={classes.image} src={travel} alt='travel' height='60'  />
    <Typography component = {Link} to='/' className={classes.heading} variant='h2' align='center'>&nbsp; &nbsp;  I 💘 Japan !  &nbsp;</Typography>
    <img className={classes.image} src={japan} alt='japan' height='60' />   
    </div>
    <Toolbar className={classes.toolbar}>
      {user ? (
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
          <Typography className={classes.userName} variant='h6'>{user?.result.name}</Typography>
          <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button className={classes.button} component={Link} to='/auth' variant='contained' color='primary'>Sign In & Up</Button>
      )}
    </Toolbar>
    </AppBar>
    
  )
}

export default Navbar
