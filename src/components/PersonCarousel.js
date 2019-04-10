import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageUrl = "https://lh3.googleusercontent.com/XkLSRTd46b0OJrJHw1zei1GNFAEp01XKaCaw5k7yNRFh9RF5DGHRgtmle5oK81cSD8mLPPFQJz7qIBylw7WzOlWmO6_XH8Ny20RLhU2yFs8_R8Hd8ephXOZPtdNqZX6ub-ywn_qQWGji1mnTBWrnoM6k57SxOL3Hx0ybkVS6T0n0ChZzRziiYjSYW-cl_fd9OzWR3YbE-XmoDnCd0e4wzGrLJbywhNBwQoc3ir3Qb530_3PJ4J3GkgDTklbnPG1b_lzaRrcoXmAAH6cf7CB5VT19FDkdMRqeRZuFcldWG2Va2FPMxIudce7Y6zQ2mSoTAVgeO9GSyxHqrToOwmzRn5VAqZYdQRwp0hwZ4RhSpABmUhhnT43abSKsZuj3fz0RsxV9Bhf--eIzt5vCqjgFfG6rGkCK7qD4sfmjKrXLrdCm8YFXpklxqscpqu8mSZB8Fp0xPBab6RUGYVszQIXLQq2ZiCb6ev4cUiTzi90CFoARLRuYXd2PiC82fi5Toi_zuQkAtZLhg26gidRYg5OTef6iDNUHhR6H2YTv1meLOob4uXbxvXOsaVO00YdjObZBQmP8uU3yKFDHm3BJSLCfAko_jMpTkNONzPXfbZngZeYs2RdkXJpqVAoK6rEejEdaYVPmOUmoHRio38EXsClTZQdEKDCzfFq8QORMzKR4dWqYXE39-ck0ZMjDHsceZH2sjM3Qjysa7b8_Yi5Z=w398-h596-no";

export default () => (
  <Carousel showArrows={true} showThumbs={true} swipeable={true} >
    <div>
      <img src={ImageUrl} />
      {/*<p className="legend">B2takes!</p>*/}
    </div>
    <div>
      <img src={ImageUrl} />
      {/*<p className="legend">B2takes!</p>*/}
    </div>
    <div>
      <img src={ImageUrl} />
      {/*<p className="legend">B2takes!</p>*/}
    </div>
    <div>
      <img src={ImageUrl} />
      {/*<p className="legend">B2takes!</p>*/}
    </div>
    <div>
      <img src={ImageUrl} />
      {/*<p className="legend">B2takes!</p>*/}
    </div>
    <div>
      <img src={ImageUrl} />
      {/*<p className="legend">B2takes!</p>*/}
    </div>
  </Carousel>
);
