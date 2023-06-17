import React, {FC} from 'react';
import Button from "../../components/Button/Button";

const ContactPage: FC = () => {
  return (
    <section className='contact-page'>
      <div className="container">
        <div className="contact-page__content">
          <div className="contact-page__text">
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a href="src/pages/Contact/ContactPage#">
              <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
            </a>
            <a href="src/pages/Contact/ContactPage#">
              <i className="fa-solid fa-envelope"></i>&nbsp;
              carrental@carmail.com
            </a>
            <a href="src/pages/Contact/ContactPage#">
              <i className="fa-solid fa-location-dot"></i>&nbsp; Belgrade,
              Serbia
            </a>
          </div>
          <div className="contact-page__form">
            <form>
              <label htmlFor="name">Full Name <b>*</b></label>
              <input name='name' type="text" placeholder='E.g: "Joe Shmoe"'/>

              <label htmlFor="email">Email <b>*</b></label>
              <input name='email' type="email" placeholder='youremail@example.com'/>

              <label htmlFor='area'>Tell us about it <b>*</b></label>
              <textarea name='area' placeholder="Write Here.."></textarea>

              <Button className='button button--orange' type="submit">
                <i className="fa-solid fa-envelope-open-text"></i>
                &nbsp; Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
