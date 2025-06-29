import { Link } from "react-router-dom"
import "../../style/style.css"
import Search from "./Search"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import Theme from "../public/Theme"

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
                    <Link to="foregin">
                        <li>فیلم خارجی</li>
                    </Link>
                    <Link to="/seriesPage">
                        <li>سریال</li>
                    </Link>
                    <Link to="animationPage">
                        <li>انیمیشن</li>
                    </Link>
                </ul>
                <Search />
            </div>
        </>
    )
}
