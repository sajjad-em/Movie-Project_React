import Footer from "../../components/Footer";
import Header from "../../components/header/Header";

export default function Subscription() {
    return <>
        <div className="App">
            
            <div className="hero-section">
                <h1>به دنیای فیلم‌ها خوش آمدید</h1>
                <p>با خرید اشتراک ویژه، به هزاران فیلم و سریال با کیفیت بالا دسترسی پیدا کنید. همین حالا اشتراک خود را خریداری کنید!</p>
            </div>
            <div className="pricing-container">
                <div className="pricing-box">
                    <h2>اشتراک ماهانه</h2>
                    <p>دسترسی به تمام فیلم‌ها و سریال‌ها به مدت یک ماه</p>
                    <p style={{textDecoration:'line-through'}}>100000 تومان</p>
                    <p><strong>۵۰,۰۰۰ تومان</strong></p>
                    <button className="buyBtn">خرید اشتراک</button>
                </div>
                <div className="pricing-box">
                    <h2>اشتراک سالانه</h2>
                    <p>دسترسی به تمام فیلم‌ها و سریال‌ها به مدت یک سال</p>
                    <p style={{textDecoration:'line-through'}}>700000 تومان</p>
                    <p><strong>۴۵۰,۰۰۰ تومان</strong></p>
                    <button className="buyBtn">خرید اشتراک</button>
                </div>
            </div>
            <Footer />
        </div>
    </>
}