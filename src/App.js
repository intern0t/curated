import React, { Component } from "react";
import NewsContainer from "./containers/NewsContainer";
import "./styles/lrr.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NewsContainer />
            </div>
        );
    }
}

export default App;
