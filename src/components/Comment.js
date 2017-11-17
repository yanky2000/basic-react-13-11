import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        
        const { comment } = this.props
        const comment_User_style = { textAlign: 'right', marginBottom: 40 }

        return (
            <div>
                <p>{comment.text}</p>
                <p style={comment_User_style}>--- {comment.user}</p>
            </div>
        )
    }

}