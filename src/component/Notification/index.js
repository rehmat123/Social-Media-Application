import React, { Component } from 'react'

export default class NotificationComponent extends Component {
    render() {
        return (
          <>
          <div className="notifications_wrap">
          <div className="notification_listing">
            <div className="notifications_box d-flex align-items-center flex-wrap">
              <div className="notification_img">
                <img src="assets/images/notification_avatar1.png" alt='' className="img-fluid"/>
              </div>
              <div className="notification_content ml-3">
                <p><span>John</span> added <span className="clr_seagreen"> University Chug</span> video on his timeline.</p>
                <span>4 minutes ago</span>
              </div>
            </div>

          </div>
        </div>
        <div className="notifications_wrap">
        <div className="notification_listing">
          <div className="notifications_box d-flex align-items-center flex-wrap">
            <div className="notification_img">
              <img src="assets/images/notification_avatar1.png" alt='' className="img-fluid"/>
            </div>
            <div className="notification_content ml-3">
              <p><span>John</span> added <span className="clr_seagreen"> University Chug</span> video on his timeline.</p>
              <span>4 minutes ago</span>
            </div>
          </div>

        </div>
      </div>
      </>
        )
    }
}
