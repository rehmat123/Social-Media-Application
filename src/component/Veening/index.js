import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Veening extends Component {
    render() {
        return (
            <div className="green_box people_box">
                <h4>People are veening</h4>
                <div className="list_greenbox">
                    <ul>
                        <li>
                            <div className="avatar_profile d-flex align-items-center">
                                <img src="assets/images/avatar_small.png" alt='' className="img-fluid" />
                                <h5>The Redeemer <span>22K Veens</span></h5>
                            </div>
                            <span className="case_rating"><img src="assets/images/briefcase_ic.png" alt='' className="img-fluid" /> <span className="rating">8.2</span></span>
                        </li>
                        <li>
                            <div className="avatar_profile d-flex align-items-center">
                                <img src="assets/images/avatar_small2.png" alt='' className="img-fluid" />
                                <h5>Mount Fuji <span>22K Veens</span></h5>
                            </div>
                            <span className="case_rating"><img src="assets/images/briefcase_ic.png" alt='' className="img-fluid" /> <span className="rating">8.2</span></span>
                        </li>
                        <li>
                            <div className="avatar_profile d-flex align-items-center">
                                <img src="assets/images/avatar_small3.png" alt='' className="img-fluid" />
                                <h5>Golden Gate <span>22K Veens</span></h5>
                            </div>
                            <span className="case_rating"><img src="assets/images/briefcase_ic.png" alt='' className="img-fluid" /> <span className="rating">8.2</span></span>
                        </li>
                    </ul>
                </div>
                <Link to= "/" className="ft_green_box"> Show more</Link>
       
            </div>
        )
    }
}
