import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Follow extends Component {
    render() {
        return (
            <div className="green_box follow_box mb-4">
            <h4>You might like to follow</h4>
            <div className="list_greenbox">
              <ul>
                <li>
                  <div className="avatar_profile d-flex align-items-center">
                    <img src="assets/images/avatar_small.png" alt='' className="img-fluid"/>
                    <h5>Eiffel Tower</h5>
                  </div>
                  <a href="#" className="btn btn_default">Follow</a>
                </li>
                <li>
                  <div className="avatar_profile d-flex align-items-center">
                    <img src="assets/images/avatar_small2.png" alt='' className="img-fluid"/>
                    <h5>Giza Pyramids</h5>
                  </div>
                  <a href="#" className="btn btn_default">Follow</a>
                </li>
                <li>
                  <div className="avatar_profile d-flex align-items-center">
                    <img src="assets/images/avatar_small3.png" alt='' className="img-fluid"/>
                    <h5>Opera House</h5>
                  </div>
                  <a href="#" className="btn btn_default">Follow</a>
                </li>
              </ul>
            </div>
           
            <Link to='/' className="ft_green_box">Show more</Link>
          </div>
        )
    }
}
