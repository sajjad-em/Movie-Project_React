import React from 'react';
import '../../style/style.css';

const ContactUs = () => {
    return (
        <div className="contact-wrapper">
            
            <div className="contact-card">
                <h2 className='contactText'>در تماس باش</h2>
                <p style={{color:'#fff'}}>اگر حامل پیامی از سرزمین‌های دوری، آن را اینجا بنگار!</p>
                <form>
                    <label>نام:</label>
                    <input type="text" placeholder="نام دلیرتو بنویس..." />

                    <label>ایمیل:</label>
                    <input type="email" placeholder="ایمیل جادویی خودتو وارد کن..." />

                    <label>پیام:</label>
                    <textarea placeholder="پیامت را با جوهر خیال بنویس..." rows="4" />

                    <button type="submit">ارسال پیام</button>
                    <img style={{width:'100%' , marginTop:'10px'}} src="/Images/contact/1.jpeg" alt="" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;