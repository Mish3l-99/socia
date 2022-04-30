import React from "react";

const Notifications = () => {
  return (
    <div className="notifics">
      <div className="w-full text-xs">
        <div className="flex item gap-2">
          <div className="profile-photo w-12 h-12">
            <img
              className="object-cover"
              src="https://picsum.photos/300"
              alt="/"
            />
          </div>
          <div>
            <b>John Doe</b> commented on your photo.
            <small className="text-muted">
              <br />2 hours ago.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
