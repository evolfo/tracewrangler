import React from "react"

const MainLayout = () => {
    return (
      <>
        <div className="site-content">
          <div className="front-text">
            <h2>TraceWrangler is a network capture file toolkit running on Windows (or on Linux, using WINE) that supports PCAP as well as the new <a target="_blank" rel="noopener noreferrer" href="https://xml2rfc.tools.ietf.org/cgi-bin/xml2rfc.cgi?url=https://raw.githubusercontent.com/pcapng/pcapng/master/draft-tuexen-opsawg-pcapng.xml&modeAsFormat=html/ascii&type=ascii">PCAPng</a> file format, which is now the standard file format used by <a target="_blank" rel="noopener noreferrer" href="https://wireshark.org">Wireshark</a>.</h2>
            <h2> The most prominent use case for TraceWrangler is the easy sanitization and anonymization of PCAP and PCAPng files (sometimes called "trace files", "capture files" or "packet captures"), removing or replacing sensitive data while being easy to use. </h2>
          </div>
          <img src="/tracewrangler.png" alt="App showcase"/>
        </div>
        {/* <div className="wave"></div> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#b52e00" fill-opacity="1" d="M0,64L120,90.7C240,117,480,171,720,186.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <div className="site-content-red-container">
            <div className="site-content-red">
                <h2>More stuff here</h2>
            </div>
        </div>
      </>
    )
}

export default MainLayout