import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li><Link to ='/terms'>Terms</Link></li>
                    <li><Link to='policy'>Privacy Policy</Link ></li>
                    <li><Link to='ads'>Ads info</Link ></li>
                </ul>
                <p>© Copyright 2019 VeenMe, Inc.</p>
            </footer>
        )
    }
}
