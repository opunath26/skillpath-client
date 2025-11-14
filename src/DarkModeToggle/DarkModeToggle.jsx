import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Page load e check localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("darkMode", newMode);
            return newMode;
        });
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="right-6 bottom-6 z-50 fixed bg-gray-200 dark:bg-gray-800 shadow-lg p-4 rounded-full text-gray-800 dark:text-gray-200 transition-colors"
            title="Toggle Light / Dark Mode"
        >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
    );
};

export default DarkModeToggle;
