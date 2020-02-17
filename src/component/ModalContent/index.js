import React, { Component } from 'react'
import { connect } from "react-redux";
import 'react-google-places-autocomplete/dist/assets/index.css';

import DisplayMap from '../../component/DisplayMap/index'
import CreatePost from '../CreatePost';
import { Link } from 'react-router-dom';
import { HIDE_MODAL } from '../../store/reducer/Modal/type';
import UploadImage from '../UploadImage';
import { Add } from '../../store/reducer/post/action';
import Globals from '../../Global/Constant';
import Cookies from 'js-cookie'
import Activities from '../Activities';
class ModalContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      step: 1,
      StatusDescription: '',
      post: null,
      activity: ''
    }
  }
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }
  save = () => {
 
    const formData = new FormData();
    formData.append('body', this.props.data.post.post);
    formData.append('activity_id', (this.props.data.activity.activity == null) ? 5 : this.props.data.activity.activity);
    formData.append('location', this.props.data.location.street);
    formData.append('longitude', this.props.data.location.longitude);
    formData.append('latitude', this.props.data.location.latitude);
    this.props.data.file.file_id.map((file) => {
       formData.append('files[]', file);
    })

    console.log(this.props.data.file.file_id);
    fetch(Globals.api + '/post/create', {
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
        this.props.HideModalClick('none');
        window.location.reload();
        console.log('saved');
      }
    })
  }
  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
    this.props.AddPost(event.target.value);
  }
  handleActivitychange = value => {
    this.setState({ activity: value })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }
  hideModal = () => {
    this.props.HideModalClick('none');
  };
  style = {
    'float': 'right',
    'marginTop': '-12px'
  }
  renderSwitch() {
    const { step } = this.state;
    const { StatusDescription, post, activity } = this.state;
    const values = { StatusDescription, post, activity };
    switch (step) {
      case 1:
        return <DisplayMap
          nextStep={this.nextStep}
          values={values}
        />
      case 2:
        return <CreatePost
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 3:
        return <Activities
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleActivitychange={this.handleActivitychange}
          values={values}
        />
      case 4:
        return <UploadImage
          nextStep={this.nextStep}
          save={this.save}
          prevStep={this.prevStep}
          handleChangeForImages={this.handleChangeForImages}
          values={values}
        />
      default:
        break;
    }
  }
  render() {
    return (
      <form id="msform">
        <Link style={this.style} to="" onClick={this.hideModal}><i className="fas fa-times-circle"></i></Link>
        {
          this.renderSwitch()

        }
      </form>
    );


  }
}
const mapStateToProps = (state) => {
  return {
    data: state
  }
};


const mapDispatchToProps = (dispatch) => {
  return {

    HideModalClick: (display) => dispatch({
      type: HIDE_MODAL,
      displayModal: display
    }),
    AddPost: post => dispatch(Add(post)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);