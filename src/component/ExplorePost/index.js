import React, { Component } from 'react'

export default class ExplorePost extends Component {
    render() {
        return (
            <div class="timeline_box py-4 px-4">
                <div class="explore_box d-flex align-items-center flex-wrap">
                    <div class="explore_content">
                        <h4>Just 4 mintues at <span class="clr_seagreen">Milan</span></h4>
                        <h1>Eating Shrimps at <span class="clr_seagreen">The Shrimp Place </span></h1>
                        <p>29k Veens</p>
                    </div>
                    <div class="explore_img">
                        <img src="assets/images/explore_img1.png" alt='' class="img-fluid" />
                    </div>
                </div>
            </div>
        )
    }
}
