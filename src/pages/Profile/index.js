import React, { Component } from 'react'
import { connect } from "react-redux";
import { PROFILE_LOAD } from '../../store/reducer/Profile/type';
import Map from '../../component/Map/Map'
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Cookies from 'js-cookie'
import Globals from '../../Global/Constant';
import API from '../../Global/PrivateAPI';
import ProfileTimeline from '../../component/ProfileTimeline/TimeLine'
class Profile extends Component {

  state = {
    user: ''
  }

  constructor(props) {
    super(props);
    Cookies.get('accessToken') == null ? this.props.history.push('/') : this.props.history.push('/profile');
  }

  componentDidMount() {

    API.get(Globals.api + '/profile').then(data => {
      this.setState({
        user: data.data
      })
    })
    this.props.action('none');
  }
  render() {
    return (
      <div className='col-md-12'>
        <Header />
        <section className="wrapper_sec bg_grey">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="map_area">
                  <Map />
                </div>
                <div className="profile_divwrap">
                  <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-12 p-0">
                      <div className="pro_img_post">
                        <img src="assets/images/profile_img.png" alt='' className="img-fluid profile_img" />
                      </div>
                    </div>
                    <div className="col-md-10 col-12">
                      <div className="wrap_profile_detail d-flex align-items-center flex-wrap">
                        <div className="name_div same_wrap">
                          <h1>{this.state.user.fname + " " + this.state.user.lname}</h1>
                          <div className="follower_div">
                            <span><span className="clr_seagreen">2,191</span> Following</span>
                            <span>|</span>
                            <span>984K Followers</span>
                          </div>
                        </div>
                        <div className="interest_div same_wrap">
                          <h4>Interset</h4>
                          <p>Fishing, Traveling, Spending time with the family</p>
                        </div>
                        <div className="info_div same_wrap">
                          <h4>Info</h4>
                          <p>Fishing, Traveling, Spending time with the family</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap_timeline mt-5 pt-3">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-12">
                  <div className="timeline_photos">
                    <div className="photos_head d-flex align-items-center justify-content-between flex-wrap pt-2 pb-3 px-1">
                      <h4>Photos</h4>
                      <p>132 Pics</p>
                    </div>
                    <div className="d-flex flex-wrap">
                      <a href="#"><img src="assets/images/timeline_pic1.jpg" className="img-fluid" /></a>
                      <a href="#"><img src="assets/images/timeline_pic2.jpg" className="img-fluid" /></a>
                      <a href="#"><img src="assets/images/timeline_pic3.jpg" className="img-fluid" /></a>
                      <a href="#"><img src="assets/images/timeline_pic4.jpg" className="img-fluid" /></a>

                    </div>
                  </div>
                  <Footer />
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                  <div className="wrap_timeline_post">
                    <div className="post_div">
                      <div className="post_area">
                        <img src="assets/images/post_profile_img.png" className="img-fluid" />
                        <textarea className="form-control" placeholder="Click here to BEEN your current location and update your status?"></textarea>
                      </div>
                      <div class="ft_post d-flex align-items-center justify-content-end">
                        <a href="#" className="ml-3"><img src="assets/images/post_ic_tag.png" className="img-fluid" /></a>
                        <a href="#" className="ml-3"><img src="assets/images/post_ic_cam.png" className="img-fluid" /></a>
                        <a href="#" className="ml-3"><img src="assets/images/post_ic_attach.png" className="img-fluid" /></a>
                        <a href="#" className="ml-3"><img src="assets/images/post_ic_smily.png" className="img-fluid" /></a>
                      </div>
                    </div>
                    <div className="unlimited_posts bg_white">
                      <ProfileTimeline />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (display) => dispatch({
      type: PROFILE_LOAD,
      display: display
    })
  }
};

export default connect(null, mapDispatchToProps)(Profile)

