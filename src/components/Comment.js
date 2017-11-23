import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            user: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
    render() {
        const {comment} = this.props
        return (
            <div>
                {comment.text} <b>by {comment.user}</b>
            </div>
        )
    }
}

export default Comment