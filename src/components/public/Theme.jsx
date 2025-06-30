import { useState } from "react";

export default function ThemeBtn() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }
    };

    return <>
        <button
            onClick={toggleTheme} className={isDark ? "theme-btn dark" : "theme-btn light"}>
            تغییر تم
        </button>

    </>
}