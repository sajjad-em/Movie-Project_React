import Footer from "../../components/Footer";

export default function Subscription() {
    return <>
        <div className="App">

            <div className="hero-section">
                <h1>به دنیای فیلم‌ها خوش آمدید</h1>
                <p>با خرید اشتراک ویژه، به هزاران فیلم و سریال با کیفیت بالا دسترسی پیدا کنید. همین حالا اشتراک خود را خریداری کنید!</p>
            </div>
            <div className="pricing-container">
                <div className="pricing-box">
                    <h2>اشتراک یک ماهه</h2>
                    <p>دسترسی به تمام فیلم‌ها و سریال‌ها به مدت یک ماه</p>
                    <p><strong>50000 تومان</strong></p>
                    <button className="buyBtn">خرید اشتراک</button>
                </div>
                <div className="pricing-box">
                    <h2>اشتراک سه ماهه</h2>
                    <p>دسترسی به تمام فیلم‌ها و سریال‌ها به مدت یک ماه</p>
                    <p><strong>140000 تومان</strong></p>
                    <button className="buyBtn">خرید اشتراک</button>
                </div>
                <div className="pricing-box">
                    <h2>اشتراک شش ماهه</h2>
                    <p>دسترسی به تمام فیلم‌ها و سریال‌ها به مدت یک ماه</p>
                    <p><strong>280000 تومان</strong></p>
                    <button className="buyBtn">خرید اشتراک</button>
                </div>
                <div className="pricing-box">
                    <h2>اشتراک یک ساله</h2>
                    <p>دسترسی به تمام فیلم‌ها و سریال‌ها به مدت یک سال</p>
                    <p><strong>500000 تومان</strong></p>
                    <button className="buyBtn">خرید اشتراک</button>
                </div>
            </div>
            <Footer />
        </div>
    </>
}