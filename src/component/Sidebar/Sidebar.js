import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import Cookies from "js-cookie";
 class Sidebar extends Component {

  logout(){
    Cookies.remove('accessToken');
    window.location.href = '/';
  }
    render() {
      const divStyle = {
       display : this.props.header.display
  
      };

        return (
            <div className="col-xl-3 col-lg-3 col-md-3" style={divStyle}>
            <div className="pt-4 veenme_leftbar h-100">
              <Link to="/" className="clr_seagreen d-block logo_anch"><img src="assets/images/logo.png" alt=""/></Link>
              <div className="left_nav">
                <ul>
                  <li><Link  to="/"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-home fa-w-18 fa-5x"><path fill="currentColor" d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z" className=""></path></svg> <span>Home</span></Link></li>
                  
                  <li><Link  to="/explore"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-map-marker-alt"><path fill="currentColor" d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z" className=""></path></svg><span>Explore</span></Link></li>
                  
                  <li><Link  to="/notifications"><span><span className="active_tag">3</span><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-bell fa-w-14 fa-7x"><path fill="currentColor" d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z" className=""></path></svg></span><span>Notifications</span></Link></li>
                  
                  <li><Link  to="/messages"><span><span className="active_tag">1</span><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-envelope fa-w-16 fa-7x"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" className=""></path></svg></span><span>Messages</span></Link></li>
                  
                  <li><Link  to="/restaurants"><svg className="svg-inline--fa fa-location-arrow fa-w-16 fa-5x" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" data-icon="location-arrow" data-prefix="far" focusable="false" aria-hidden="true"><path className="" d="M461.9 0c-5.73 0-11.59 1.1-17.39 3.52L28.74 195.41c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 30.01 24.21 47.93 48.74 47.93 17.3 0 34.75-8.9 44.01-28.74l191.9-415.78C522.06 34.89 494.14 0 461.9 0zM271.81 464.07V240.19h-47.97l-175.48.71c-.27-.37-.47-1.35.48-1.93L462.05 48.26c.61.41 1.28 1.07 1.69 1.68L271.81 464.07z" fill="currentColor"></path></svg><span>Restaurants</span></Link></li>
                  
                  <li><Link  to="/history"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="history" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-history fa-w-16 fa-5x"><path fill="currentColor" d="M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z" className=""></path></svg><span>History</span></Link></li>
                  
                  <li><Link  to="/profile"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14 fa-5x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" className=""></path></svg><span>Profile</span></Link></li>

                  <li><Link to="/" onClick={this.logout}>Logout </Link> </li>
                </ul>
              </div>
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



export default connect(mapStateToProps, null)(Sidebar);