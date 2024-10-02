import React from "react";

function Toast() {
  return (
    <div>
      <div className="toast toast-end">
        <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div>
      </div>
    </div>
  );
}

export default Toast;
