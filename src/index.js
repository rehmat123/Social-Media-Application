import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import Routes from "./routes"
import Sidebar from './component/Sidebar/Sidebar'
import RightSidebar from './component/RightSidebar/index'
import './index.css';
import configureStore from "./store/index";
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import Modal from './component/Modal/index';
import ModalContent from './component/ModalContent/index'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Cookies from 'js-cookie';
JavascriptTimeAgo.locale(en)
const history = createBrowserHistory();
const locationPath=history.location.pathname;
const store = configureStore();
const iSAuthenticated=Cookies.get('accessToken');
if(!iSAuthenticated && locationPath!=='/')
  window.location.href='/';
if(locationPath==="/"){
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
            <Modal>
              <ModalContent />
            </Modal>
            <Sidebar />
            <Routes  />
            <RightSidebar />
    </Router >
  </Provider >, document.getElementById('root'))
}else{
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <section className="wrapper_sec" id="root">
        <div className="container">
          <div className="row">
            <Modal>
              <ModalContent />
            </Modal>
            <Sidebar />
            <Routes  />
            <RightSidebar />
          </div>
        </div>
      </section>
    </Router >
  </Provider >, document.getElementById('root'));
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
