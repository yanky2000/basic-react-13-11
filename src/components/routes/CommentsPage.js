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

        return (

            <div>
                {this.getPaginator()}
                {this.getBody()}
            </div>
        )
    }
    getPaginator() {
        const comments = this.props.comments.entities.valueSeq();
        const noPages = Math.ceil(comments.size / 5)
        console.log('pages', noPages)
        // let x = 1
        let arrPages = []

        for (let x = 1; x <= noPages; x++) {
            arrPages.push(<li>{x}</li>) // Each child in an array or iterator should have a unique "key" prop.
        }
            return (<ul> {arrPages} </ul>)

    }

    getBody() {
        const comments = this.props.comments.entities.valueSeq();
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
}, {loadAllComments})(CommentsPage)