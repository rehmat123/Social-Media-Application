import React, { Component } from 'react'

export default class CommentList extends Component {
    render() {
        return (
            <div className="main-comment-sections">
            <div className={(this.props.ShowListCOmment) && (this.props.ShowListCommentID == post.id) ? "comment-box-inner mt-2 d-block cstm" : "comment-box-inner mt-2 d-none cstm"}>
              
              
            </div>
          </div>
        )
    }
}
