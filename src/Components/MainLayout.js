import React from "react"

import Features from "./Features"
import Download from "./Download";
import Feedback from "./Feedback";

const MainLayout = () => {

    return (
      <>
        <div className="site-content">
          <div className="front-text">
            <h2>
              TraceWrangler is a network capture file toolkit for Windows (or
              Linux with WINE) that supports PCAP as well as the new{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://xml2rfc.tools.ietf.org/cgi-bin/xml2rfc.cgi?url=https://raw.githubusercontent.com/pcapng/pcapng/master/draft-tuexen-opsawg-pcapng.xml&modeAsFormat=html/ascii&type=ascii"
              >
                PCAPng
              </a>{" "}
              format, which is now the standard for{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wireshark.org"
              >
                Wireshark
              </a>
              .
            </h2>
          </div>
          <img src="/img/tracewrangler.png" alt="App showcase" />
        </div>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 270"
        >
          <path
            fill="#972600"
            fillOpacity="1"
            d="M0,64L120,90.7C240,117,480,171,720,186.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <Features />
        <Download />
        <svg
          class="wave2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#972600"
            fill-opacity="1"
            d="M0,256L120,250.7C240,245,480,235,720,202.7C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <Feedback />
      </>
    );
}

export default MainLayout