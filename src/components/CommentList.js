import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {

        const { comments } = this.props
        const commentElements = this.state.isOpen && comments.map((comment) =>
            <div key={comment.id}><Comment comment={comment} /></div>)
    

        return (
            <div>
                <a href="#" onClick={this.toggleCommentsVis}>comments:</a>
                <ul>{commentElements}</ul>
            </div>
        )
    }

    toggleCommentsVis= () => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}