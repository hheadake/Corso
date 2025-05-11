import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom,
  faKey,
  faNewspaper,
  faUsers,
  faHandshake,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

const Takeaways = () => {
  return (
    <section id="takeaways" className="takeaways my-5 bg-light">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-8 offset-md-2">
            <h2>Key Takeaways</h2>
            <p className="lead">
              Here are some of the takeaways and benefits you can expect from
              our programs.
            </p>
          </div>
        </div>

        <div className="row">
          {/* 1 */}
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faAtom} size="3x" className="text-primary bg-light rounded-circle p-3 my-4" />
                <h5 className="card-title">Scientific Insights</h5>
                <p className="card-text">
                  Explore the latest scientific research and gain valuable
                  insights into various subjects, from physics to biology.
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faKey} size="3x" className="text-primary bg-light rounded-circle p-3 my-4" />
                <h5 className="card-title">Cybersecurity Awareness</h5>
                <p className="card-text">
                  Discover the importance of cybersecurity and learn how to
                  protect yourself and your digital assets from cyber threats.
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faNewspaper} size="3x" className="text-primary bg-light rounded-circle p-3 my-4" />
                <h5 className="card-title">Industry Updates</h5>
                <p className="card-text">
                  Stay informed about the latest news and updates in your
                  industry, keeping you ahead of the curve and facilitating
                  professional growth.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faUsers} size="3x" className="text-primary bg-light rounded-circle p-3 my-4" />
                <h5 className="card-title">Collaborative Networking</h5>
                <p className="card-text">
                  Connect with professionals from diverse backgrounds and
                  industries to foster collaboration and expand your
                  professional network.
                </p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faHandshake} size="3x" className="text-primary bg-light rounded-circle p-3 my-4" />
                <h5 className="card-title">Partnership Opportunities</h5>
                <p className="card-text">
                  Discover potential partnership opportunities with like-minded
                  individuals and organizations, opening doors to new
                  collaborations and ventures.
                </p>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faChartBar} size="3x" className="text-primary bg-light rounded-circle p-3 my-4" />
                <h5 className="card-title">Data-driven Insights</h5>
                <p className="card-text">
                  Leverage data analytics to gain valuable insights and make
                  informed decisions, unlocking new possibilities for growth and
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Takeaways;
