import React from "react";
import "./Footer.css";
import { useSelector , useDispatch, } from 'react-redux';
import { RootState } from '../../redux/store';
import { setLanguage } from '../../redux/languageSlice';
import { Link } from 'react-router-dom';


// Define valid labels based on LanguageData keys //
type LinkLabel = 'aboutUs' | 'products_Solution' | 'gallery' | 'blog' | 'contact';
// Define Language type//
type Language = 'english' | 'japanese' | 'chinese' | 'thai';

const languageFlags: { src: string; alt: string; code: Language }[] = [
  { src: '/flags/usa_flag.svg', alt: 'English',  code: 'english' },
  { src: '/flags/china_flag.svg', alt: 'Chinese', code: 'chinese' },
  { src: '/flags/thailand_flag.svg', alt: 'Thai', code: 'thai' },
  { src: '/flags/japan_flag.svg', alt: 'Japanese', code: 'japanese' }
];

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  //Tell TypeScript the type of `state`
  const lang = useSelector((state: RootState) => state.language.selectedLang);
  console.log(lang);

  // Get translated text based on selected language
  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  return (
    <footer className="footer-container">
    <div className="footer">
      <div className="footer-row">
        {/* Get in Touch Section */}
        <section className="footer-col">
          <h5>{lang.getInTouch}</h5>
          <div className="contact-info">
            
            <div className="address">
              <div className="address-icon">
                <img src="/assets/location-pin-svgrepo-com.svg" alt="Location"  />
              </div>
              <span>{lang.address}</span>
            </div>
            
            <div className="Phone">
              <img src="/assets/phone-svgrepo-com.svg" alt="Call" />
              <span>+91 827 799 5300</span>
            </div>
            <div className="imageTag">
              <img src="/assets/email-mail-svgrepo-com.svg" alt="Email" />
              <span>info@rexsatronix.com</span>
            </div>
          </div>
        </section>


        {/* Popular Links Section */}
        <nav className="footer-col">
          <h5>{lang.popularLink}</h5>
          <div className="links-container">
            {[
              { label: 'aboutUs', path: '/about' },
              { label: 'products_Solution', path: '/products' },
              { label: 'gallery', path: '/gallery' },
              { label: 'blog', path: '/blog' },
              { label: 'contact', path: '/contact' },
            ].map((link, index) => (
              <div key={index} className="link-item">
                <img src="/assets/right-arrow-svgrepo-com.svg" alt="Arrow" />
                <Link to={link.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {/* Use type assertion */}
                  {lang[link.label as LinkLabel]}
                </Link>
              </div>
            ))}
          </div>
        </nav>

        {/* Gallery Section */}
        <section className="footer-col">
          <h5>{lang.gallery}</h5>
          <div className="gallery-container">
            {[
              "/images/gallery_image_1.jpg",
              "/images/gallery_image_2.jpg",
              "/images/gallery_image_3.jpg",
              "/images/gallery_image_4.jpg",
              "/images/gallery_image_5.jpg",
              "/images/gallery_image_6.jpg"
            ].map((image, index) => (
              <img key={index} src={image} alt={`Gallery ${index + 1}`} />
            ))}
          </div>
          
          {/*language section*/}
          <div className="language-section">
            <h5 className="language-section__heading">Language</h5>
            <div className="language-section__flags">
              {languageFlags.map((flag, index) => (
                <div 
                  key={index} 
                  className="language-section__flag-wrapper"
                  onClick={() => handleLanguageChange(flag.code)}
                >
                  <img
                    src={flag.src}
                    alt={flag.alt}
                    className="language-section__flag"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>  

        {/* Mission Section */}
        <section className="footer-col">
          <h5>{lang.mission}</h5>
          <p className="Mission">
            {lang.missionDescription}
          </p>
        </section>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 Rexsatronix, {lang.copyRights}
      </div>
    </div>
  </footer>
);
};



export default Footer;
