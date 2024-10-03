// import React from "react";

// function BrowserMockup() {
//   return (
//     <div>
//       <div className="mockup-browser bg-base-300 border">
//         <div className="mockup-browser-toolbar">
//           <div className="input">https://mmsstudio.com</div>
//         </div>
//         <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
//       </div>
//     </div>
//   );
// }

// export default BrowserMockup;

import React from "react";

function BrowserMockup() {
  return (
    <div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
}

export default BrowserMockup;
