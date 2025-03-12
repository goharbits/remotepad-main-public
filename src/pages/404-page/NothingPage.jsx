import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './style.css'
import { Link } from 'react-router-dom';

const NothingPage = () => {
  return (
    <>
        <div className="page-404-wrap">
          <div className="animated-icon-404">
            <DotLottieReact
              src="https://lottie.host/aa53d0ed-3531-41fb-b60d-aa9324c68da4/rFr5ptPTXB.lottie"
              loop
              autoplay
            />
          </div>
          <div className="content-404">
            <Link to="./" className="back-to-home-btn">Go Back To Home Page</Link>
          </div>
        </div>
    </>
    
  );
};

export default NothingPage;
