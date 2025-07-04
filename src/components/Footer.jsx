import React from 'react';
import '../style/style.css';
import { FaTelegram, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>🎬 مای مووی</h3>
          <p>دانلود جدیدترین فیلم‌ها و سریال‌ها با دوبله و زیرنویس فارسی</p>
        </div>

        <div className="footer-links">
          <h4>دسترسی سریع</h4>
          <ul>
            <Link style={{ color: '#fff' }} to="/">
              <li>خانه</li>
            </Link>
            <Link style={{ color: '#fff' }} to="/">
              <li>فیلم‌ها</li>
            </Link>
            <Link style={{ color: '#fff' }} to="seriespage ">
              <li>سریال‌ها</li>
            </Link>
            <Link style={{ color: '#fff' }} to="/">
              <li>تماس با ما</li>
            </Link>
          </ul>
        </div>

        <div className="footer-social">
          <h4>ما را دنبال کنید</h4>
          <div className="social-icons">
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>تمامی حقوق محفوظ است &copy; {new Date().getFullYear()} | مای مووی</p>
      </div>
    </footer>
  );
};

export default Footer;
