import React, {FC} from 'react';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__content">
          <ul className="footer__col col-1">
            <li>
              CAR <span>Rental</span>
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:123456789">
                <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
              </a>
            </li>
            <li>
              <a
                href="mailto:
                carrental@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                &nbsp; carrental@gmail.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="src/components/layout/Footer/Footer">
                Design by XpeedStudio
              </a>
            </li>
          </ul>

          <ul className="footer__col col-2">
            <li>Company</li>
            <li>
              <a href="src/components/layout/Footer/Footer#home">New York</a>
            </li>
            <li>
              <a href="src/components/layout/Footer/Footer#home">Careers</a>
            </li>
            <li>
              <a href="src/components/layout/Footer/Footer#home">Mobile</a>
            </li>
            <li>
              <a href="src/components/layout/Footer/Footer#home">Blog</a>
            </li>
            <li>
              <a href="src/components/layout/Footer/Footer#home">How we work</a>
            </li>
          </ul>

          <ul className="footer__col col-3">
            <li>Working Hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>

          <ul className="footer__col col-4">
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li>
              <input type="email" placeholder="Enter your email address"></input>
            </li>
            <li>
              <button className="button button--orange">Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
