import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer mt-4 text-bg-dark py-5">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4">
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              possimus aliquid omnis commodi. Dignissimos, quam obcaecati? Fugit
              non ex repellendus?
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#discover" className="text-white">Discover</a></li>
              <li><a href="#summary" className="text-white">Summary</a></li>
              <li><a href="#takeaways" className="text-white">Takeaways</a></li>
              <li><a href="#subscribe" className="text-white">Subscribe</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h5>Connect</h5>
            <div className="d-flex gap-3">
              <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" className="text-white" /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" className="text-white" /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} size="2x" className="text-white" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
