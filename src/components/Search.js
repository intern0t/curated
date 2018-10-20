import React, { Component } from "react";
import { LOCAL_STORAGE } from "../config";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setAPIHidden: true
        };
    }

    handleSearchChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSearchSubmit = e => {
        e.preventDefault();
        const { onSearchNews } = this.props;
        const { searchkey } = this.state;

        if (searchkey && searchkey.length > 0) {
            onSearchNews({
                searchKey: searchkey,
                page: {
                    current: 1,
                    end: 17
                }
            });
        }
    };

    onSetAPIContainerStatusChange = e => {
        this.setState({
            setAPIHidden: !this.state.setAPIHidden
        });
    };

    setAPI = apiKey => {
        if (apiKey.length === 32) {
            console.log(apiKey);
            localStorage.setItem([LOCAL_STORAGE.API_KEY], apiKey);
        } else {
            console.log(
                "Are you absolutely sure that it is Newsapi.org's API key?"
            );
        }
    };

    onHandleAPIChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onHandleAPISet = e => {
        if (e.key === "Enter") {
            this.setState({
                [e.target.name]: e.target.value
            });
            this.setAPI(e.target.value);
        }
    };

    componentDidMount() {
        let existingAPIKey = localStorage.getItem([LOCAL_STORAGE.API_KEY]);
        if (existingAPIKey && existingAPIKey.length === 32) {
            this.setState({
                apiKey: existingAPIKey
            });
        }
    }

    render() {
        const { setAPIHidden } = this.state;

        return (
            <div>
                <a href="/" className="logo">
                    News
                    <br />
                    Personalized &amp; Constantly updated!
                </a>

                <form
                    className="search-wrapper"
                    onSubmit={this.handleSearchSubmit}
                >
                    <div className="search-container">
                        <div className="search-container-section">
                            <input
                                type="text"
                                name="searchkey"
                                placeholder="Search your news here, type the keyword(s)."
                                onChange={this.handleSearchChange}
                            />

                            <span
                                className="icon-equalizer"
                                title="Set your API Key."
                                onClick={this.onSetAPIContainerStatusChange}
                            />
                        </div>

                        {!setAPIHidden ? (
                            <APIKeyChangeContainer
                                onHandleAPISet={this.onHandleAPISet}
                                onHandleAPIChange={this.onHandleAPIChange}
                                setAPI={this.setAPI}
                                apiKey={this.state.apiKey}
                            />
                        ) : null}
                    </div>
                </form>
            </div>
        );
    }
}

const APIKeyChangeContainer = ({
    onHandleAPISet,
    onHandleAPIChange,
    setAPI,
    apiKey
}) => {
    return (
        <div>
            <br />
            <div className="search-container-section">
                <input
                    type="text"
                    name="apiKey"
                    placeholder="Enter your API key from newsapi.org/account"
                    onKeyPress={onHandleAPISet}
                    onChange={onHandleAPIChange}
                    value={apiKey}
                />

                <span
                    className="icon-checkmark"
                    style={{ color: "#00da00" }}
                    title="Set your API Key."
                    onClick={() => setAPI(apiKey)}
                />
            </div>
        </div>
    );
};

export default Search;
