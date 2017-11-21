import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.toggleCommentsVis}>comments:</a>
                <ul>{this.getComment()}</ul>
            </div>
        )
    }
    getComment() {
        const { comments } = this.props
        if (!this.state.isOpen) return null
        const commentElements = (comments && comments.length) ? comments.map((comment) =>
            <div key={comment.id}>
                <Comment comment={comment} />
            </div>) : '=== No comments yet ==='
        return commentElements
    }
    toggleCommentsVis = () => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}