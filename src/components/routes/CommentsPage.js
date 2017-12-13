import React, {Component} from 'react'
import Comment from '../Comment'
import {connect} from 'react-redux'
import {loadAllComments} from "../../AC";
import {commentListSelector} from "../../selectors";
import {Route, NavLink} from 'react-router-dom'
import { COMMENTS_PER_PAGE} from '../../constants'
import {paginatorSet} from "../../reducer/utils";

class CommentsPage extends Component {
    componentDidMount() {
        this.props.loadAllComments({limit: COMMENTS_PER_PAGE, offset: 0})
    }

    static propTypes = {};

    render() {
        return (
            <div>
                {this.getPaginatorAndLinks()}
                <Route path={ `${this.props.match.path}/:page` } render={this.getCommentsBody}></Route>
            </div>
        )
    }

    getPaginatorAndLinks() {
        // const comments = this.props.comments.entities.valueSeq();
        const total = this.props.comments.total
        console.log('entities', this.props.comments)
        console.log('total', this.props.comments.total)

        const commentsPagesCount = Math.ceil(total / COMMENTS_PER_PAGE)

        let arrPages = []

        for (let pageCount = 1; pageCount <= commentsPagesCount; pageCount++) {
            arrPages.push(<li><NavLink to={`${this.props.match.path}/${pageCount}`}>{pageCount}</NavLink></li>) // BUG! Each child in an array or iterator should have a unique "key" prop.
        }
        return (<ul> {arrPages} </ul>)

    }
    //
    // getBody() {
    //     const comments = this.props.comments.entities.valueSeq();
    //     const body = comments.size ?
    //         (<ol> {comments.map(comment => <li key={comment.id}><Comment id={comment.id}/></li>)}
    //         </ol>) : <h3>No comments yet</h3>
    //     return body
    // }

    getCommentsBody = ({match}) => {
        const comments = this.props.comments.entities.valueSeq();
        // const commentsPage = match.params.page
        // const obj = paginatorSet({total: comments.size, limit: COMMENTS_PER_PAGE, offset: COMMENTS_PER_PAGE})



        return <h2>works getCommentsBody, Page: {match.params.page}</h2>

    }
}

export default connect(state => {
    return {
        comments: commentListSelector(state)
    }
}, {loadAllComments})(CommentsPage)