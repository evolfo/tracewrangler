import React from 'react'

const Features = () => (
  <div id="features" className="site-content-red-container">
    <div className="site-content-red">
      <h1>Features</h1>
      <div className="col-md12 first-feature-list">
        <ul>
          <li>Easy to read, write and modifiy PCAPng files</li>
          <li>
            Editing packets in batch, especially by removing certain protocol
            layers like MPLS, GRE or GTP-u, or to convert Linux cooked captures
            to Pseudo-Ethernet
          </li>
          <li>
            Gathering and aggregating packet details about a large number of
            capture files, like IP, TCP and UDP conversations
          </li>
          <li>Displaying the PCAPng specific block structure of a file</li>
          <li>
            Sanitization, anonymization, and scrubbing of packet captures
            created by Wireshark/TCPDump/etc.
          </li>
          <li>
            Merging capture files, especially PCAPng files with more than one
            interface and using filters to keep only certain frames
          </li>
          <li>
            Extracting conversations from multiple files to new capture files
            based on manual filters, capture file indicator frames, or Snort
            alerts
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Features