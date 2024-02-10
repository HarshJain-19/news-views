import React, { useEffect, useState } from "react";

const NavBar = (props) => {
    const [menu, setMenu] = useState(false);
    const changeMenu = () => (menu ? setMenu(false) : setMenu(true));

    const [country, setCountry] = useState("");
    const [category, setCategory] = useState("");

    const changeCountry = (x) => {
        props.changeCountry(x ? x : "in");
        props.changeCategory("");
        setCategory("");
        setCountry("");
    };
    const changeCategory = (x) => {
        props.changeCategory(x);
        props.changeCountry("in");
        setCountry("");
        setCategory("");
    };

    useEffect(() => {
        let nav = document.querySelector(".nav").style;
        menu
            ? ((nav.height = "12rem"), (nav.padding = "1rem"))
            : ((nav.height = "0"), (nav.padding = "0"));
        console.log(this);
        let menuBtn = document.getElementById("menu");
        menu
            ? (menuBtn.src = "Media/close-menu.png")
            : (menuBtn.src = "Media/open-menu.png");
    }, [menu]);

    return (
        <header>
            <h1>
                <a href="/">News - Views</a>
            </h1>
            <nav className="nav">
                <a href="/">Home</a>
                <select
                    onChange={(e) => changeCategory(e.currentTarget.value)}
                    value={category}
                >
                    <option value="">category</option>
                    <option value="business">business</option>
                    <option value="entertainment">entertainment</option>
                    <option value="general">general</option>
                    <option value="health">health</option>
                    <option value="science">science</option>
                    <option value="sports">sports</option>
                    <option value="technology">technology</option>
                </select>
                <select
                    onChange={(e) => changeCountry(e.currentTarget.value)}
                    value={country}
                >
                    <option value="">Country</option>
                    <option value="ar">Argentina</option>
                    <option value="au">Australia</option>
                    <option value="at">Austria</option>
                    <option value="be">Belgium</option>
                    <option value="br">Brazil</option>
                    <option value="bg">Bulgaria</option>
                    <option value="ca">Canada</option>
                    <option value="cn">China</option>
                    <option value="co">Colombia</option>
                    <option value="cu">Cuba</option>
                    <option value="cz">Czech Republic</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="gr">Greece</option>
                    <option value="hk">Hong Kong</option>
                    <option value="hu">Hungary</option>
                    <option value="in">India</option>
                    <option value="id">Indonesia</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="lv">Latvia</option>
                    <option value="lt">Lithuania</option>
                    <option value="my">Malaysia</option>
                    <option value="mx">Mexico</option>
                    <option value="ma">Morocco</option>
                    <option value="nl">Netherlands</option>
                    <option value="nz">New Zealand</option>
                    <option value="ng">Nigeria</option>
                    <option value="no">Norway</option>
                    <option value="ph">Philippines</option>
                    <option value="pl">Poland</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russia</option>
                    <option value="sa">Saudi Arabia</option>
                    <option value="rs">Serbia</option>
                    <option value="sg">Singapore</option>
                    <option value="sk">Slovakia</option>
                    <option value="si">Slovenia</option>
                    <option value="za">South Africa</option>
                    <option value="kr">South Korea</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan</option>
                    <option value="th">Thailand</option>
                    <option value="tr">Turkey</option>
                    <option value="ae">UAE</option>
                    <option value="ua">Ukraine</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="ve">Venezuela</option>
                </select>
            </nav>
            <div className="icons">
                <img
                    id="change_mode"
                    onClick={props.change_mode}
                    src={
                        props.mode == "dark"
                            ? "Media/light-mode.png"
                            : "Media/dark-mode.png"
                    }
                    alt="icon"
                />
                <img
                    id="menu"
                    onClick={changeMenu}
                    src="Media/open-menu.png"
                    alt="menu"
                />
            </div>
        </header>
    );
};

export default NavBar;
