import React from "react";
import ReactDOM from "react-dom";

function Footer() {

    const year = new Date().getFullYear();

    return(

        <footer>
            <p>	&#169; Made with ❤ by <a href="https://abhinavkashyap061.github.io/">Abhinav Kashyap</a> | {year}</p>
        </footer>
    )
}

export default Footer;