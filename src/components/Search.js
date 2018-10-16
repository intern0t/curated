import React, { Component } from "react";
// import { searchNews } from "../actions";

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
                                onHandleAPIChange={
                                    this.onSetAPIContainerStatusChange
                                }
                            />
                        ) : null}
                    </div>
                </form>
            </div>
        );
    }
}

const APIKeyChangeContainer = ({ onHandleAPIChange }) => {
    return (
        <div>
            <br />
            <div className="search-container-section">
                <input
                    type="text"
                    name="searchkey"
                    placeholder="Enter your API key from newsapi.org/account"
                    onChange={onHandleAPIChange}
                />

                <span
                    className="icon-checkmark"
                    style={{ color: "#00da00" }}
                    title="Set your API Key."
                />
            </div>
        </div>
    );
};

export default Search;
