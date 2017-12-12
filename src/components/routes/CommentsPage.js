import React, {Component} from 'react'
import Comment from '../Comment'
import {connect} from 'react-redux'
import {loadAllComments} from "../../AC";
import {commentListSelector} from "../../selectors";

class CommentsPage extends Component {
    componentDidMount() {
        this.props.loadAllComments()
    }

    static propTypes = {};

    render() {
        const comments = this.props.comments.entities
        console.log('comments', comments)
        return (
            <div>
                <ul>
                     {comments.map(comment => <li key={comment.id}><Comment id={comment.id}/></li>)}

                </ul>
                ) : <h3>No comments yet</h3>
            </div>
        )
    }


}

export default connect(state => {
    return {
        comments: commentListSelector(state)
    }
}, {loadAllComments})(CommentsPage)