import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';
import Globals from '../../Global/Constant';
import { connect } from "react-redux";
import Cookies from 'js-cookie'
import { upload } from '../../store/reducer/Uploads/action';
import { Add } from '../../store/reducer/Uploads/action';
 class UploadImage extends Component {

    constructor(props) {
        super(props);
        this.state = { artistGallery : []};
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop = picture => {
       
        if (picture.length > 0) {
            let index = picture.length - 1;
        

        const formData = new FormData();
        formData.append('file', picture[index], picture[index].name);

        fetch(Globals.api + '/file/upload', {
            'method': 'post',
            headers: new Headers({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('accessToken')
            }),
    
            body: formData
        }).then(res => res.json()).then((response) => {
            if (response.data == null) {
                const data = JSON.parse(JSON.stringify(response.errors))
                var er = Object.keys(data).map(function (key) {
                    return data[key];
                });
                this.setState({errors: er, loading: false})
            } else {
                this.setState({ artistGallery: picture});
                this.props.AddImage(picture);
                this.props.AddImageIDs(response.data.id);
               console.log(response.data);
            }
        })
    }
     
    };

    
    save = (e) => {
        e.preventDefault();
        this.props.save();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <>
                <ul id="progressbar">
                    <li></li>
                    <li></li>
                    <li ></li>
                    <li className="active"></li>
                    <li></li>
                </ul>
                <fieldset class="upload black-color location">
                    <div class="upper-step row">
                        <div class="col-8 pl-0">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="far fa-images"></i></span>
                                </div>
                                <label class="btn btn-default veenme-upload">
                                    Upload Photo
                            </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.JPEG', '.gif', '.jfif', '.png', '.gif']}
                                maxFileSize={5242880}
                                singleImage={true}
                            />
                            <div class="row">
                                {this.props.data.file.file && this.props.data.file.file.map((file, i) => (

                                    <div class="col-2"><img key={i} width="100" alt="" height="100" src={URL.createObjectURL(file)} /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button class="next action-button btn" onClick={this.back}>Back</button>
                        </div>
                        <div class="col-6">
                            <button class="next action-button-previous btn" onClick={this.save}>Veen</button>
                        </div>
                    </div>
                </fieldset>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state
    }
  };
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
      AddImage: file => dispatch(upload(file)),
      AddImageIDs:  id =>dispatch(Add(id))
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);