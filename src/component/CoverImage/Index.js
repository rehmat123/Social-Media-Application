import React, { Component } from 'react'

export default class CoverImage extends Component {
    render() {
        return (
            <div class="pro_img">
                <img src="assets/images/explore_img.jpg" alt='' class="img-fluid" />
                <div class="overlay_content">
                    <h4>Just 2 mintues at <span class="clr_seagreen">Milan</span></h4>
                    <h1>Eating Shrimps at <span class="clr_seagreen">The Shrimp Place...</span>Eating Shrimps at</h1>
                    <p>29k Veens</p>
                </div>
            </div>
        )
    }
}
