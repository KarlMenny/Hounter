import React from 'react';
import './Footer.scss';
import Logo from '../common/Logo/Logo';
import SpriteSvg from '../common/SpriteSvg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__shape footer__shape--order_first"></div>
      <div className="footer__shape footer__shape--order_second"></div>

      <div className="container">
        <div className="footer__row">
          <div className="footer__col footer__col--size">
            <Logo className="footer__logo" />
            <p className="footer__text">
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </p>
            <ul className="footer__social">
              <li>
                <a href="#" className="footer__social-link">
                  <SpriteSvg svg="facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="footer__social-link">
                  <SpriteSvg svg="twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="footer__social-link">
                  <SpriteSvg svg="instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <div className="footer__content">
              <nav className="footer__nav">
                <div className="footer__list">
                  <h4 className="footer__list-title">Property</h4>
                  <ul className="footer__list-items">
                    <li className="footer__list-item">
                      <a href="#" className="footer__list-link">
                        House
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a href="#" className="footer__list-link">
                        Apartment
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a href="#" className="footer__list-link">
                        Villa
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__list">
                  <h4 className="footer__list-title">Article</h4>
                  <ul className="footer__list-items">
                    <li className="footer__list-item">
                      <a href="#" className="footer__list-link">
                        New Article
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a href="#" className="footer__list-link">
                        Popular Article
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a href="#" className="footer__list-link">
                        Most Read
                      </a>
                    </li>
                    <li className="footer__list-item">
                      <a href="#" className="footer__list-link">
                        Tips & Tricks
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="footer__list">
                <h4 className="footer__list-title">Contact</h4>
                <ul className="footer__list-items">
                  <li className="footer__list-item">
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </li>
                  <li className="footer__list-item">(671) 555-0110</li>
                  <li className="footer__list-item">info@hounter.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
