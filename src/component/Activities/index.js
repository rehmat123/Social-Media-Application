import React, { Component } from 'react'
import { Select } from '../../store/reducer/Activities/action';
import { connect } from "react-redux";
import Globals from '../../Global/Constant';
import  API  from '../../Global/PrivateAPI';
class Activities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: [],
            active: false,
            activities : []
        }
    }
    componentDidMount(){
        API.get(Globals.api + '/activity').then(data=>{
           this.setState({
            activities: data.data.item
           })
        })

    }
    getValue(e) {
        var selected = e.currentTarget.dataset.id;
        this.props.ActivitySelect(selected);

    }
    handleChange = event => {
        console.log("i called");
        var selected_id = event.currentTarget.dataset.id;
        var selected_name = event.currentTarget.dataset.name;
        this.props.handleActivitychange(selected_name);

        this.props.ActivitySelect(selected_id);
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props;
        let options;
        // if (this.state.search.length) {
        //     const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
        //     options = activites.filter(option => option.title.match(searchPattern));
        //     console.log(options);
        // } else {
        //     options = activites;
        // }

        return (
            <>
             <ul id="progressbar">
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                  </ul>
            <fieldset class="tag-friend black-color activities">
                <div class="upper-step row">
                    <div class="col-8 pl-0">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><img src="assets/images/activity-img.jpg" alt="" /></span>
                            </div>
                            <label class="btn btn-default veenme-upload">
                                Activities
                  </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-group mb-3 col-12">
                        <input type="text" class="form-control search-friend mr-0" value={values.activity} placeholder="Search activity" aria-label="Recipient's username" onChange={(e) => this.setState({ search: e.target.value.split(' ') })} aria-describedby="basic-addon2" />
                    </div>
                </div>
                <div class="row tag-friend-list">
                    <div class="col-12">
                        <div class="tag-friend-list-scroll scrollbar">
                            {this.state.activities.map((option) =>
                                <ul key={option.id} className={(this.state.active & this.state.activeIndex === option.id) && 'cstm-checks'} onClick={() => this.setState({ active: !this.state.active, activeIndex: option.id })}>
                                    <li>
                                        <img src={option.icon} className="rounded-circle" alt="" />
                                    </li>
                                    <li onClick={this.handleChange} data-id={option.id} data-name={option.title}><p>{option.title}</p></li>
                                    <li><i class="far fa-check-circle"></i></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button class="next action-button btn" onClick={this.back}>Back</button>
                    </div>
                    <div class="col-6">
                        <button class="next action-button-previous btn" onClick={this.saveAndContinue}>Next</button>
                    </div>
                </div>

            </fieldset >
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ActivitySelect: longitude => dispatch(Select(longitude))
    }
};
export default connect(null, mapDispatchToProps)(Activities);