import React, { Component } from 'react'
import Globals from '../../Global/Constant';
import Cookies from 'js-cookie'
import ReactTimeAgo from 'react-time-ago'
import { connect } from "react-redux";
import API from '../../Global/PrivateAPI';
import { Link } from 'react-router-dom';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { load, LikePostToggle } from '../../store/reducer/post/action';
class ProfileTimeLines extends Component {

  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.saveSubComment = this.saveSubComment.bind(this);
    this.GetCommentByEvent = this.GetCommentByEvent.bind(this);
    this.replyComment = this.replyComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.state = {
      posts: [],
      IsLike: false,
      comment: "",
      ShowListCOmment: false,
      comments: [],
      sub_comment: ''
    }

  }


  componentDidMount() {
    API.get(Globals.api + '/post')
      .then(data => {
        this.props.loadPosts(data.data.item)
        this.setState({
          posts: data.data.item
        })
      })
  }

  deletePost(e) {
    if (window.confirm('Sure want to delete?')) {
      API.get(Globals.api + '/post/delete?id=' + e.currentTarget.dataset.id)
        .then(data => {

        })
    }
  }
  IncreaseComment(post_id){
    for (var i = 0; i < this.state.posts.length; i++) {
      if (this.state.posts[i]['id'] == post_id) {
        this.state.posts[i].comment_count = this.state.posts[i].comment_count + 1;
      }
    }
  }
  DecreaseComment(post_id){
    for (var i = 0; i < this.state.posts.length; i++) {
      if (this.state.posts[i]['id'] == post_id) {
        this.state.posts[i].comment_count = this.state.posts[i].comment_count - 1;
      }
    }
  }


  deleteComment(e){
    e.preventDefault();
    var post_id =e.currentTarget.dataset.postId;
    console.log(post_id);
    if (window.confirm('Sure want to delete?')) {
      API.get(Globals.api + '/comment/delete?id=' + e.currentTarget.dataset.id)
        .then(data => {
          this.GetCommentByID(post_id);
          this.DecreaseComment(post_id);
          this.forceUpdate();
        })
    }
  }

  saveSubComment(e) {
    if (this.state.sub_comment != '') {
      var post_id = e.currentTarget.dataset.id;
      const formData = new FormData();
      formData.append('post_id', e.currentTarget.dataset.id);
      formData.append('text', this.state.sub_comment);
      formData.append('parent_id', e.currentTarget.dataset.commentId);
      fetch(Globals.api + '/comment/create', {
        'method': 'post',
        headers: new Headers({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }),

        body: formData
      }).then(res => res.json()).then((response) => {
        if (response.data == null) {
          const data = JSON.parse(JSON.stringify(response.errors))
          var er = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.setState({ errors: er, loading: false })
        } else {
          this.setState({
            sub_comment: '',
            currentCommentclick: false
          })
          ToastsStore.success("Comment submitted succesfully");
          this.IncreaseComment(post_id);
          this.GetCommentByID(post_id);
          this.forceUpdate();

        }
      })
    }
  }
  saveComment(e) {
    if (this.state.comment != '') {
      var post_id = e.currentTarget.dataset.id;

      const formData = new FormData();
      formData.append('post_id', e.currentTarget.dataset.id);
      formData.append('text', this.state.comment);

      fetch(Globals.api + '/comment/create', {
        'method': 'post',
        headers: new Headers({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
        }),

        body: formData
      }).then(res => res.json()).then((response) => {
        if (response.data == null) {
          const data = JSON.parse(JSON.stringify(response.errors))
          var er = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.setState({ errors: er, loading: false })
        } else {
          this.setState({
            comment: ''
          })
          ToastsStore.success("Comment submitted succesfully");

          this.IncreaseComment(post_id);
          this.GetCommentByID(post_id);
          this.forceUpdate();

        }
      })
    }



  }
  GetCommentByID(id) {
    this.CallCommentAPI(id);
  }
  GetCommentByEvent(e) {
    e.preventDefault();
    var post_id = e.currentTarget.dataset.id;
    this.CallCommentAPI(post_id);
  }
  replyComment(e) {
    e.preventDefault();
    this.setState({
      currentCommentclick: e.currentTarget.dataset.id
    })
  }
  CallCommentAPI(post_id) {
    API.get(Globals.api + '/comment/get-comment?post_id=' + post_id)
      .then(data => {
        var key = "comment_" + post_id
        var val = data.data.item
        var obj = {}
        obj[key] = [val]

        this.setState({
          ...obj
        })
      })
  }
  toggleLike(e) {
    e.preventDefault();
    for (var i = 0; i < this.state.posts.length; i++) {
      if (this.state.posts[i]['id'] == e.currentTarget.dataset.id) {
        //this.props.LikePostToggle(i)

        let value = this.state.posts[i].is_like
        this.state.posts[i].is_like = !value;

        API.get(Globals.api + '/like/like?post_id=' + e.currentTarget.dataset.id)
          .then(data => {

          })

        if (this.state.posts[i].is_like) {
          this.state.posts[i].like_count = parseInt(this.state.posts[i].like_count) + 1
        }
        else {
          this.state.posts[i].like_count = parseInt(this.state.posts[i].like_count) - 1
        }

        this.forceUpdate()
      }
    }

  }


  render() {
    return (
      this.state.posts.map((post) => {
        return (
          <div className="timeline_content" key={post.id}>
            <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore} />
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="veen" role="tabpanel" aria-labelledby="veen-tab">
                <div className="timeline_box">
                  <div className="box_inner d-flex align-items-start">
                    <img src='assets/images/profile_img.png' alt='' className="img-fluid img_circle" />
                    <div className="box_inner_content">
                      <div className="name_div">
                        <h4 className="d-inline-block">{Cookies.get('username')} <span>{post.activity} at</span></h4> <span>{post.location}</span>
                        <div className="dropdown">
                          <a href="#" className="drop_angle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-angle-down"></i></a>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link onClick={this.deletePost} data-id={post.id} className="dropdown-item" to="/">Delete</Link>
                          </div>
                        </div>
                      </div>
                      <div className="middle_box">
                        <p>{(post.body == 'undefined') ? '' : post.body} </p>
                      </div>
                      <div className="ft_box">

                        <div className="row">
                          {
                            post.files.map((images, i) => {
                              if (post.files.length) {
                                return <div key={i} className={(post.files.length <= 2) ? 'col-md-' + (12 / post.files.length) : 'col-md-4'}><div className=""><img src={images.filepath} className="img-fluid" /></div></div>
                              }
                            })
                          }
                        </div>
                        <div className="ft_inner_ft">
                          <ul>
                            <li>
                              <Link to="/" onClick={this.toggleLike} data-id={post.id}><i className={(post.is_like) ? "fas fa-thumbs-up" : "fas fa-thumbs-up grey"}></i> <span>{post.like_count}</span></Link>
                            </li>
                            <li>
                              <Link to="/" data-id={post.id} onClick={this.GetCommentByEvent}><i className="fas fa-comment-alt"></i> <span>{post.comment_count}</span></Link>
                            </li>

                          </ul>
                          <span className="hour_class"><ReactTimeAgo date={post.created} /></span>
                        </div>
                      </div>
                      <div className="comment-box-post">
                        <ul>
                          <li>
                            <img src="assets/images/comment-box-post-user-1.jpg" alt="" />
                          </li>
                          <li className="center">
                            <input type="text" className="form-control" value={this.state.comment} onChange={e => this.setState({ comment: e.target.value })} placeholder="Add a comment..." />
                          </li>
                          <li>
                            <button data-id={post.id} onClick={this.saveComment} className="btn">Send</button>
                          </li>
                        </ul>
                      </div>

                      <div className="main-comment-sections">
                        <div className="comment-box-inner mt-2 d-block cstm">
                          {
                            (this.state["comment_" + post.id]) ? this.state["comment_" + post.id][0].map((comment, i) => {
                              return (
                                <div className="comment-box-post d-block mb-1" key={i}>
                                  <ul>
                                    <li>
                                      <img src="assets/images/comment-user-1.png" alt="" />
                                    </li>
                                    <li>
                                      <h6>{comment.user_name}</h6>
                                      <p>{comment.text}.</p>
                                      <Link to="/" data-id={comment.id} onClick={this.replyComment} class="cstm-chat this">Reply <i class="fas fa-reply cstm-chat this"></i></Link>
                                    </li>
                                  </ul>
                                  <div className="dropdown">
                                    <a href="#" className="drop_angle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-angle-down"></i></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <Link onClick={this.deleteComment} data-id={comment.id} data-post-id={post.id} className="dropdown-item" to="/">Delete</Link>
                                    </div>
                                  </div>
                                  <div class={(this.state.currentCommentclick == comment.id) ? "comment-box-post d-block" : "d-none"}>
                                    <ul>
                                      <li>
                                        <img src="assets/images/comment-box-post-user-1.jpg" alt="" />
                                      </li>
                                      <li className="center">
                                        <input type="text" className="form-control" value={this.state.sub_comment} onChange={e => this.setState({ sub_comment: e.target.value })} placeholder="Add a comment..." />
                                      </li>
                                      <li>
                                        <button data-id={post.id} data-comment-id={comment.id} onClick={this.saveSubComment} className="btn">Send</button>
                                      </li>
                                    </ul>
                                  </div>
                                  {

                                    (comment.comments) ? comment.comments.map((innercomment, i) => {
                                      return (
                                        <div className="comment-box-post d-block mb-1 sub" key={i}>
                                          <ul>

                                            <div>
                                              <li>
                                                <img src="assets/images/comment-user-1.png" alt="" />
                                              </li>
                                              <li>
                                                <h6>{innercomment.user_name}</h6>
                                                <p>{innercomment.text}.</p>

                                              </li>
                                            </div>
                                          </ul>
                                        </div>
                                      )
                                    }) : ""
                                  }
                                </div>
                              )

                            }) : ""


                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })

    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: posts => dispatch(load(posts)),
    LikePostToggle: id => dispatch(LikePostToggle(id)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileTimeLines);