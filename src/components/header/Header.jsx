import "../../style/style.css"
import Search from "./Search"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(true)

    return (
        <>
            <div className="container">
                <div className="header-top">
                    <h2 className="logo">مای مووی</h2>
                    <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                    <li>ارتباط با ما</li>
                    <li>سایر</li>
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
