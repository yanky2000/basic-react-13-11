import React, {Component} from 'react'
import Comment from './Comment'
import {createAllCommentSelector, commentByPageSelector} from "../selectors";
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {loadArticleComments, loadCommentsWithLimit} from '../AC'
import {COMMENTS_PER_PAGE} from "../constants";

class CommentsListPage extends Component {
    componentDidMount(){
        const pageNo = this.props.page
        const offsetVal = (pageNo-1)*COMMENTS_PER_PAGE
        this.props.loadCommentsWithLimit({limit: COMMENTS_PER_PAGE, offset: offsetVal, pageNo: pageNo})
    }


    render() {

        // const comments = this.props.comments.entities.valueSeq()
        const {comments} = this.props
        console.log('my comms', comments)
        const body = comments.size ?
            (<ol> {comments.map(comment => <li key={comment.id}><Comment id={comment.id}/></li>)}
            </ol>) : <h3>No comments yet</h3>

        return body

    }


}


export default connect((state, props) => {
    return {
        // comments: createAllCommentSelector(state, props)
        comments: commentByPageSelector(state)
    }
}, {loadCommentsWithLimit})(CommentsListPage)