import React, { Component } from 'react'
import Follow from '../Follow'
import Veening from '../Veening'
import Footer from '../../component/Footer/index';
import { connect } from "react-redux";

 class RightSidebar extends Component {
    render() {
        const divStyle = {
            display : this.props.header.display
       
           };
        return (
            <div className="col-xl-3 col-lg-3 col-md-3 pr-0" style={divStyle}>
            <div className="veenme_rightbar pt-4">
                <Follow />
                <Veening/>
                <Footer/>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        header: state.header
    }
  };
  
  
  
  export default connect(mapStateToProps, null)(RightSidebar);