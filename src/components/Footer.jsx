import React from 'react';
import '../style/style.css';
import { FaTelegram, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
            <li><a href="#">خانه</a></li>
            <li><a href="#">فیلم‌ها</a></li>
            <li><a href="#">سریال‌ها</a></li>
            <li><a href="#">تماس با ما</a></li>
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
