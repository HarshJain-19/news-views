import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBarTop.jsx";
import Cards from "./Components/Cards.jsx";
import "./Styles/style.css";

function App() {
    const [mode, setMode] = useState(window.localStorage.getItem("mode"));
    const [country, setCountry] = useState("in");
    const [category, setCategory] = useState("");
    const changeCountry = (x) => setCountry(x);
    const changeCategory = (x) => setCategory(x);

    if (mode === null) setMode("light");

    const change_mode = () =>
        mode === "light" ? setMode("dark") : setMode("light");

    useEffect(() => {
        if (mode === "light") {
            document.getElementById("change_mode").src = "Media/dark-mode.png";
            document.body.classList.remove("mode");
        } else {
            document.getElementById("change_mode").src = "Media/light-mode.png";
            document.body.classList.add("mode");
        }
        console.log(mode);
        window.localStorage.setItem("mode", mode);
    }, [mode]);
    return (
        <>
            <NavBar
                mode={mode}
                change_mode={change_mode}
                changeCategory={changeCategory}
                changeCountry={changeCountry}
            />
            <Cards country={country} category={category} />
        </>
    );
}

export default App;
