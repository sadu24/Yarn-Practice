import React from "react";

function ChooseFile() {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Pick a file</span>
          <span className="label-text-alt">Alt label</span>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
}

export default ChooseFile;
