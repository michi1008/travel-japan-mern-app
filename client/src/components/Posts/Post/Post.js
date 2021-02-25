import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem('profile'))

  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.place} />
      <div className={classes.overlay}>
        <Typography variant='body2'>{post.name}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}      
      <Typography className={classes.place} varian='h5' gutterBottom>{post.place}</Typography>
      <Typography className={classes.prefecture} variant='body2' >{post.prefecture}</Typography>
      <CardContent>
        <Typography className={classes.description} variant='body2' color='textSecondary' component='p'>{post.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default Post
