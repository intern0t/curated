import React, { Component } from "react";
import iconHeart from "../styles/zondicons/heart.svg";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <h1>
                    Made with <img src={iconHeart} alt="Heart" /> in Virginia,
                    USA.
                </h1>
                <h2>
                    Designed &amp; Developed by{" "}
                    <a href="https://prashant.me/">Prashant Shrestha</a> &copy;
                    2018.
                </h2>
            </footer>
        );
    }
}
