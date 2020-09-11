import React from 'react'

const Feedback = () => (
  <div id="feedback" className="site-content-red-container">
    <div className="site-content-red">
      <h1>Feedback and Known Issues</h1>
      <p>
        {" "}
        Sent feedback about bugs, feature requests and other topics to "jasper
        [ät] packet-foo.com". My PGP key is found{" "}
        <a href="/gpg/jasper-packet-foo.asc">here</a>.{" "}
      </p>
      <p>For bug reports, please include:</p>
      <ul>
        <li>a description of how to reproduce the problem </li>
        <li>a short sample trace, if possible </li>
        <li>the .task file you used, if you still have it. </li>
      </ul>
      <hr> </hr>
      <p>
        {" "}
        TraceWrangler has some limitations at the moment (which may most likely
        last a little longer than just "a moment"):{" "}
      </p>
      <ul>
        <li>
          The maximum trace file size is less than 2GBs. This limitation is a
          result of the way the files are read by using Memory Mapped files.
          I'll work on this "when there is time"™ .{" "}
        </li>
        <li>
          Capture files with truncated or damaged frames may not work. I suggest using captures with full
          sized frames. This is because I may have been lazy in some
          parts of the code where I do sanity checks against the length of the
          data available for processing, which is a great way to run some
          pointers into the great beyond. Ouch.{" "}
        </li>
        <li>
          IPv6 checksums may not be calculated correctly when extension headers
          (including fragmentation headers) are used in a frame.{" "}
        </li>
      </ul>
    </div>
  </div>
);

export default Feedback