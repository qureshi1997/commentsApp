import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    personName: '',
    comment: '',
    commentsList: [],
  }

  render() {
    const {personName, comment, commentsList} = this.state
    return (
      <div className="displayFlexRow">
        <div>
          <h1>Comments</h1>
          <p>Say something about 4.0 Technologies</p>
          <form onSubmit={this.onAddComment}>
            <input type="text" placeholder="Your Name" />
            <br />
            <textarea rows="8" cols="40" placeholder="Your Comment"></textarea>
            <br />
            <button type="submit">Add Comment</button>
          </form>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
        />
        <hr />
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem commentDetails = {eachComment} key={}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
