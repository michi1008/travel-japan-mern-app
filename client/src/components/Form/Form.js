import { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

// Get the current ID


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState ({place: '',  prefecture: '', description: '', selectedFile: ''})
  const post = useSelector(state => currentId? state.posts.find(post => post._id === currentId) : null)
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }))
      clear()
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
      clear()
    }
  }

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography className={classes.message} variant="h6" align="center">
        🚅 Please Sign In / Up to post your favorite places and like other's posts. 🚊
        </Typography>
      </Paper>
    )
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({place: '',  prefecture: '', description: '', selectedFile: ''})
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant='h6'>{currentId? 'Editing' : 'Creating'} a post</Typography>
      <TextField name='place' variant='outlined' label='Place' fullWidth value={postData.place} onChange={e => setPostData({ ...postData, place: e.target.value })} />
      <TextField name='prefecture' variant='outlined' label='Prefecture' fullWidth value={postData.prefecture} onChange={e => setPostData({ ...postData, prefecture: e.target.value })} />
      <TextField name='description' variant='outlined' label='Description' fullWidth multiline rows={4} value={postData.description} onChange={e => setPostData({ ...postData, description: e.target.value })} />
      <div className={classes.fileInput}><FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>   
    </Paper>  
  )

}

export default Form
