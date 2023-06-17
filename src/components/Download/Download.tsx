import React, {FC} from 'react';
import GoogleApp from '../../assets/images/download/googleapp.svg'
import AppStore from '../../assets/images/download/appstore.svg'

const Download: FC = () => {
  return (
    <section className='download'>
      <div className="container">
        <div className="download__content">
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going
            think order event music. Incommode so intention defective at
            convinced. Led income months itself and houses you.
          </p>
          <div className="download__btns">
            <img alt="download_img_gp" src={GoogleApp} />
            <img alt="download_img_as" src={AppStore} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
