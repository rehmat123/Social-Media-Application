import React, { Component } from 'react'

export default class CreatePost extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <>
             <ul id="progressbar">
                    <li></li>
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>

                <fieldset class="post-comment location">
                <div class="upper-step row">
                      <div class="col-8 pl-0">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-comment-alt"></i></span>
                          </div>
                          <label class="btn btn-default veenme-upload">
                              Comment
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                          <div class="post_area">
                            <img src="assets/images/post_profile_img.png" alt="" class="img-fluid"/>
                            <textarea class="form-control"  placeholder="Click here to BEEN your current location and update your status?" value={values.post}  onChange={this.props.handleChange('post')} ></textarea>
                          </div>
                      </div>
                      <div class="col-6">
                        <button class="next action-button btn" onClick={this.back}>Back</button>
                    </div>
                    <div class="col-6">
                        <button class="next action-button-previous btn" onClick={this.saveAndContinue}>Next</button>
                    </div>
                    </div>
               
            </fieldset>
            </>
        )
    }
}
