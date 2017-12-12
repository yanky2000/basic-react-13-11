import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Comment from '../Comment'
import {connect} from 'react-redux'
import {loadAllComments} from "../../AC";

class CommentsPage extends Component {
    componentDidMount() {
        this.props.loadAllComments()
    }
    static propTypes = {

    };

    render() {
        return (
            <div>
                'ahldkfj;adsf
                {/*<Comment />*/}
            </div>
        )
    }


}

export default connect(state => {
    return {
        comments: "hwle"
    }
}, {loadAllComments})(CommentsPage)