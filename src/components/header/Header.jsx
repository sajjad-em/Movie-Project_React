import { Link } from "react-router-dom"
import "../../style/style.css"
import Search from "./Search"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(true)

    return (
        <>
            <div className="container">
                <Link to={"/"}>
                <div className="Icon"></div>
                </Link>
                <div className="header-top">
                    <Link to="/">
                        <h2 className="logo">مای مووی</h2>
                    </Link>
                    <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                    <Link to="contact">
                    <li>ارتباط با ما</li>
                    </Link>
                    <Link to="watchlist">
                        <li>لیست پخش</li>
                    </Link>
                    <li>فیلم خارجی</li>
                    <li>فیلم ایرانی</li>
                    <li>سریال</li>
                    <li>انیمیشن</li>
                    <li>دوبله فارسی</li>
                </ul>
                <Search />
            </div>
        </>
    )
}
