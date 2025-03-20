import React from "react";
import "./aboutUs.css";
import OverlappingSquares from "../../components/OverlappingSquares/OverlappingSquares";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const AboutUs: React.FC = () => {

  // Access selected language from Redux state
  const lang = useSelector((state: RootState) => state.language.selectedLang);
  return (
    <div className="content">
      <h1 className="heading">{lang.aboutUs}</h1>
      <div className="text">
        <div className="main">
          <h6 className="sub-head">
            <OverlappingSquares/>{lang.aboutUs}
          </h6>
          <h2>
            <u>{lang.introduction}</u>
          </h2>
          <p className="info">
            {lang.introductionDescription}
          </p>
        </div>

        <div className="Image">
          <img src="/images/about.png" alt="About" />
        </div>
      </div>

      {/* Additional Content */}
      <div className="content-1">
        <h6 className="sub-head">
          <OverlappingSquares/>
          <u>{lang.mission}</u>
        </h6>
        <p className="info">
        {lang.missionDescription}
        </p>

        <h6 className="sub-head">
          <OverlappingSquares/>
          <u>{lang.futureOutlook}</u>
        </h6>
        <p className="info">
          {lang.futureOutlookDescription}
        </p>
      </div>
    </div>
  );
};



export default AboutUs;

