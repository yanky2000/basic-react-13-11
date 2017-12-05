import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './comment.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: '',
    }

    addCommentUser = ev => {
        const {value} = ev.target
        this.setState({
            user: value.length < 15 ? value : ''
        })
    }
    addCommentText = ev => {
        const {value} = ev.target
        this.setState({
            text: (value.length > 20 && value.length < 100) ? value : ''
        })
    }

    render() {
        console.log('---', this.state)
        return (
            <div>
                Username: <input 
                    className={(this.state.user==='' ? 'error-input' : '')} 
                    value={this.state.user} 
                    onChange={this.addCommentUser} />
                Comment: <input 
                    className={(this.state.text==='' ? 'error-input' : '')} 
                    value={this.state.comment} 
                    onChange={this.addCommentText} />
            </div>
        )
    }
}

export default CommentForm