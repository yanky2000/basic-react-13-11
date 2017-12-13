import React, {Component} from 'react'
import Comment from './Comment'
import {commentListSelector} from "../selectors";
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {loadArticleComments, loadCommentsWithLimit} from '../AC'
import {COMMENTS_PER_PAGE} from "../constants";

class CommentsListPage extends Component {
    componentDidMount() {
        const pageNo = this.props.match.params.page
        console.log('page No: ', pageNo)
        const offsetVal = (pageNo-1)*COMMENTS_PER_PAGE
        console.log('offsetVal', offsetVal)
        this.props.loadCommentsWithLimit({limit: COMMENTS_PER_PAGE, offset: offsetVal})
    }


    render() {

        const comments = this.props.comments.entities.valueSeq()
        const body = comments.size ?
            (<ol> {comments.map(comment => <li key={comment.id}><Comment id={comment.id}/></li>)}
            </ol>) : <h3>No comments yet</h3>

        return body

    }


}


export default connect(state => {
    return {
        comments: commentListSelector(state)
    }
}, {loadCommentsWithLimit})(CommentsListPage)