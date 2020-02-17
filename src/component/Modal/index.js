import React, { Component } from 'react'
import { connect } from "react-redux";
import { HIDE_MODAL } from '../../store/reducer/Modal/type';
class Modal extends Component {

    constructor(props){
        super(props);
        this.state ={
            show : this.props.show
        }
    
    }
    
  
    render() {
        
        return (
            <section  className={`step-form active ${this.props.show==='block' ? "display-block" : "display-none"}`}  id="clickbox" >
                <div className="container" id="clickbox-container">
                    <div className="row" id="clickbox-row">
                        <div className="col-xl-6 offset-xl-3">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        show: state.show.show
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
       
        HideModalClick :  (display) => dispatch({
            type: HIDE_MODAL,
            displayModal: display
        }),
    }
};

  
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);