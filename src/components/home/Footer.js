import React from "react";
import "../customcss/footer.css";
import logo from "../../assets/nextgen.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="pg-footer">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#s">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div>
                <p className="footer-call-to-action-description font-Manrope">
                  Welcome to Nextgen Infratech Solutions! With 20+ years of
                  experience, we deliver innovative IT infrastructure solutions
                  to help you succeed.
                </p>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name font-lato">Quick Links</h2>
                <ul
                  id="menu-quick-links"
                  className="footer-menu-list font-Manrope"
                >
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link rel="noopener noreferrer" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="/teams">Team</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link rel="noopener noreferrer" to="/careers">
                      Careers
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="/leaderships">Leadership Team</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title font-lato">
                  Let's Chat
                </h2>
                <p className="footer-call-to-action-description font-Manrope">
                  Have a support question?
                </p>
                <a
                  className="footer-call-to-action-button button font-lato"
                  href="https://wa.me/9930365555"
                >
                  Get in Touch
                </a>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper">
                  <a
                    className="footer-call-to-action-link"
                    href="tel:9930365555"
                    target="_self"
                  >
                    +91 9930365555
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name font-lato">Address</h2>
                <p className="footer-call-to-action-description font-Manrope">
                  Nextgen House Building No. 306, Vishesh Reality Project LLP,
                  Mahape Road, opp. Ramada Hotel, Millenium Business Park, Navi
                  Mumbai, Maharashtra 400710
                </p>
              </div>
            </div>
            <div className="footer-social-links">
              <svg
                className="footer-social-amoeba-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 236 54"
                width="30px"
              >
                <path
                  className="footer-social-amoeba-path"
                  d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                ></path>
              </svg>
              <a
                className="footer-social-link linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/nextgeninfratechsolutionsllp/?originalSubdomain=in"
              >
                <span className="hidden-link-text">Linkedin</span>
                <svg
                  className="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                >
                  <path
                    className="footer-social-icon-path"
                    d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                  ></path>
                </svg>
              </a>
              <a
                className="footer-social-link twitter"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/nextgen.infratech/"
              >
                <span className="hidden-link-text">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="#ffffff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
              <a
                className="footer-social-link youtube"
                target="_blank"
                rel="noreferrer"
                href="https://youtu.be/Ur8BC49cEDc?si=QHApFFM1GkD4fsKa"
              >
                <span className="hidden-link-text">Youtube</span>
                <svg
                  className="footer-social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                >
                  <path
                    className="footer-social-icon-path"
                    d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
                  ></path>
                </svg>
              </a>
              <a
                className="footer-social-link github"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100086358938007"
              >
                <span className="hidden-link-text">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="30px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 310 310"
                >
                  <g id="XMLID_834_">
                    <path
                      id="XMLID_835_"
                      d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="#s">
                  ©2024. | NextGen Infratech | All rights reserved.
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* <!-- footer --> */}
    </div>
  );
};

export default Footer;
