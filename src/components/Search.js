import React, { Component } from "react";
// import { searchNews } from "../actions";

class Search extends Component {
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

    render() {
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
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Search;
