import React from 'react';

const Footer = () => {
  const styles = {
    ul: {
      margin: '0px',
      padding: '0px',
    },
    footerSection: {
      background: '#151414',
      position: 'relative',
    },
    footerCta: {
      borderBottom: '1px solid #373636',
    },
    singleCta: {
      color: '#ff5e14',
      fontSize: '30px',
      float: 'left',
      marginTop: '8px',
    },
    ctaText: {
      paddingLeft: '15px',
      display: 'inline-block',
    },
    ctaTextH4: {
      color: '#fff',
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '2px',
    },
    ctaTextSpan: {
      color: '#757575',
      fontSize: '15px',
    },
    footerContent: {
      position: 'relative',
      zIndex: 2,
    },
    footerPatternImg: {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '330px',
      backgroundSize: 'cover',
      backgroundPosition: '100% 100%',
    },
    footerLogo: {
      marginBottom: '30px',
    },
    footerLogoImg: {
      maxWidth: '200px',
    },
    footerTextP: {
      marginBottom: '14px',
      fontSize: '14px',
      color: '#7e7e7e',
      lineHeight: '28px',
    },
    footerSocialIconSpan: {
      color: '#fff',
      display: 'block',
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '20px',
    },
    footerSocialIconA: {
      color: '#fff',
      fontSize: '16px',
      marginRight: '15px',
    },
    footerSocialIconI: {
      height: '40px',
      width: '40px',
      textAlign: 'center',
      lineHeight: '38px',
      borderRadius: '50%',
    },
    facebookBg: {
      background: '#3B5998',
    },
    twitterBg: {
      background: '#55ACEE',
    },
    googleBg: {
      background: '#DD4B39',
    },
    footerWidgetHeadingH3: {
      color: '#fff',
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '40px',
      position: 'relative',
    },
    footerWidgetHeadingH3Before: {
      content: '""',
      position: 'absolute',
      left: '0',
      bottom: '-15px',
      height: '2px',
      width: '50px',
      background: '#ff5e14',
    },
    footerWidgetUlLi: {
      display: 'inline-block',
      float: 'left',
      width: '50%',
      marginBottom: '12px',
    },
    footerWidgetUlLiA: {
      color: '#878787',
      textTransform: 'capitalize',
    },
    footerWidgetUlLiAHover: {
      color: '#ff5e14',
    },
    subscribeForm: {
      position: 'relative',
      overflow: 'hidden',
    },
    subscribeFormInput: {
      width: '100%',
      padding: '14px 28px',
      background: '#2E2E2E',
      border: '1px solid #2E2E2E',
      color: '#fff',
    },
    subscribeFormButton: {
      position: 'absolute',
      right: '0',
      background: '#ff5e14',
      padding: '13px 20px',
      border: '1px solid #ff5e14',
      top: '0',
    },
    subscribeFormButtonI: {
      color: '#fff',
      fontSize: '22px',
      transform: 'rotate(-6deg)',
    },
    copyrightArea: {
      background: '#202020',
      padding: '25px 0',
    },
    copyrightTextP: {
      margin: '0',
      fontSize: '14px',
      color: '#878787',
    },
    copyrightTextPA: {
      color: '#ff5e14',
    },
    footerMenuLi: {
      display: 'inline-block',
      marginLeft: '20px',
    },
    footerMenuLiHoverA: {
      color: '#ff5e14',
    },
    footerMenuLiA: {
      fontSize: '14px',
      color: '#878787',
    },
  };

  return (
    <footer className="footer-section" style={styles.footerSection}>
      <div className="container">
        <div className="footer-cta pt-5 pb-5" style={styles.footerCta}>
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta" style={styles.singleCta}>
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text" style={styles.ctaText}>
                  <h4 style={styles.ctaTextH4}>Find us</h4>
                  <span style={styles.ctaTextSpan}>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta" style={styles.singleCta}>
                <i className="fas fa-phone"></i>
                <div className="cta-text" style={styles.ctaText}>
                  <h4 style={styles.ctaTextH4}>Call us</h4>
                  <span style={styles.ctaTextSpan}>011-25698547</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta" style={styles.singleCta}>
                <i className="far fa-envelope-open"></i>
                <div className="cta-text" style={styles.ctaText}>
                  <h4 style={styles.ctaTextH4}>Mail us</h4>
                  <span style={styles.ctaTextSpan}>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="footer-content pt-5 pb-5" style={styles.footerContent}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo" style={styles.footerLogo}>
                  <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" style={styles.footerLogoImg}></img></a>
                </div>
                <div className="footer-text" style={styles.footerTextP}>
                  <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="footer-social-icon">
                  <span style={styles.footerSocialIconSpan}>Follow us</span>
                  <a href="#" style={{ ...styles.footerSocialIconA, ...styles.facebookBg }}><i className="fab fa-facebook-f"></i></a>
                  <a href="#" style={{ ...styles.footerSocialIconA, ...styles.twitterBg }}><i className="fab fa-twitter"></i></a>
                  <a href="#" style={{ ...styles.footerSocialIconA, ...styles.googleBg }}><i className="fab fa-google-plus-g"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 style={styles.footerWidgetHeadingH3}>Useful Links</h3>
                </div>
                <ul style={styles.ul}>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>Home</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>about</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>services</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>portfolio</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>Contact</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>About us</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>Our Services</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>Expert Team</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>Contact us</a></li>
                  <li style={styles.footerWidgetUlLi}><a href="#" style={styles.footerWidgetUlLiA}>Latest News</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 style={styles.footerWidgetHeadingH3}>Subscribe</h3>
                </div>
                <div className="footer-text mb-25" style={styles.footerTextP}>
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form" style={styles.subscribeForm}>
                  <form action="#">
                    <input type="text" placeholder="Email Address" style={styles.subscribeFormInput}></input>
                    <button style={styles.subscribeFormButton}><i className="fab fa-telegram-plane" style={styles.subscribeFormButtonI}></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
         */}
      </div>
      <div className="copyright-area" style={styles.copyrightArea}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p style={styles.copyrightTextP}>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/" style={styles.copyrightTextPA}>Anup</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul style={styles.ul}>
                  <li style={styles.footerMenuLi}><a href="#" style={styles.footerMenuLiA}>Home</a></li>
                  <li style={styles.footerMenuLi}><a href="#" style={styles.footerMenuLiA}>Terms</a></li>
                  <li style={styles.footerMenuLi}><a href="#" style={styles.footerMenuLiA}>Privacy</a></li>
                  <li style={styles.footerMenuLi}><a href="#" style={styles.footerMenuLiA}>Policy</a></li>
                  <li style={styles.footerMenuLi}><a href="#" style={styles.footerMenuLiA}>Contact</a></li>
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
