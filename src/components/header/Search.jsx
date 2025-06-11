import { FaSearch } from "react-icons/fa"
import "../../style/style.css"

export default function Search() {
    return <>
        <div className="search-wrapper">
            <input
                type="text"
                name=""
                className="searchInp"
                placeholder="جستجو"
            />
            <FaSearch className="search-icon" />
        </div>
    </>
}