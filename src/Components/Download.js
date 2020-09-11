import React from 'react'

const Download = () => (
  <div id="download" className="white-background-container">
    <div className="white-background-content">
      <h1>Downloads</h1>
      <h4>Latest Version: March 24, 2020</h4>
      <p>
        TraceWrangler Beta 0.6.8 build 949 (GPG Signature:
        tracewrangler.exe.sig)
      </p>
      <button className="download-button">32bit Version</button>
      <button className="download-button">64bit Version</button>
      <button className="download-button">Download Source Code</button>
      <hr></hr>
      <p>
        There is also a semi-automated build section where you can download
        current builds. Those builds are usually working better than the latest
        stable release, but in some cases features may not be implemented
        completely yet, or still broken. Also, the documentation isn't up to
        date.</p> 
        <p>My GPG public key can be found <a href="/gpg/jasper-packet-foo.asc">here.</a></p>
    </div>
  </div>
);

export default Download