import React, { Component } from 'react'
import CoverImage from '../CoverImage/Index'
import ExplorePost from '../ExplorePost/index'

export default class Review extends Component {
    render() {
        return (
            <>
                <CoverImage />
                <div class="timeline_content">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="veen" role="tabpanel" aria-labelledby="veen-tab">
                        <ExplorePost/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
