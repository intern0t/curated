import React, { Component } from "react";
import { GITHUB_REPO_URL } from "../config";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <h2>
                    Made with <span className="icon-heart" /> in Virginia, USA.
                </h2>
                <h2>
                    Designed &amp; Developed by{" "}
                    <a href="https://prashant.me/">Prashant Shrestha</a> &copy;
                    2018.
                </h2>
                <h2>
                    <span
                        className="icon-newspaper"
                        title="News provided by NewsAPI"
                    />
                    &nbsp;News provided by{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://newsapi.org/"
                    >
                        NewsAPI
                    </a>
                    .
                </h2>
                <h2>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={GITHUB_REPO_URL}
                    >
                        <span className="icon-github-alt" />
                        &nbsp;Open Source
                    </a>
                </h2>
            </footer>
        );
    }
}
