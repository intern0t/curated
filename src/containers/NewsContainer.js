import React from "react";
import { connect } from "react-redux";
import {
    updateNews,
    searchNews,
    changePage,
    bookmarkLocalStoreSetter
} from "../actions";
import CONFIG from "../config";
import NewsWrapper from "../components/NewsWrapper";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import Bookmarks from "../components/Bookmarks";

class NewsContainer extends React.Component {
    componentDidMount() {
        const { onUpdateNews } = this.props;
        const { apiIndex, searchKeyword, page } = this.props.news;

        fetch(
            `${CONFIG.NEWSAPI_ENDPOINT}${
                [apiIndex] === "NEWSAPI_HEADLINES"
                    ? CONFIG[apiIndex]
                    : CONFIG[apiIndex].replace("SEARCH_QUERY", searchKeyword)
            }${CONFIG.NEWSAPI_KEY}&page=${page.current}`
        )
            .then(res => res.json())
            .then(data => {
                onUpdateNews({
                    articles: data.articles,
                    page: {
                        current: 1,
                        end:
                            data.totalResults % 20 === 0
                                ? 1
                                : data.totalResults % 20
                    }
                });
            });
    }

    componentDidUpdate(prevProps) {
        const { onSearchNews } = this.props;
        const { apiIndex, searchKeyword, page } = this.props.news;

        if (
            prevProps.news.searchKeyword !== searchKeyword ||
            prevProps.news.page.current !== page.current
        ) {
            this.makeAPICall({ onSearchNews, apiIndex, searchKeyword, page });
        }
    }

    makeAPICall = ({ onSearchNews, apiIndex, searchKeyword, page }) => {
        fetch(
            `${CONFIG.NEWSAPI_ENDPOINT}${
                [apiIndex] === "NEWSAPI_HEADLINES"
                    ? CONFIG[apiIndex]
                    : CONFIG[apiIndex].replace("SEARCH_QUERY", searchKeyword)
            }${CONFIG.NEWSAPI_KEY}&page=${page.current}`
        )
            .then(res => res.json())
            .then(data => {
                onSearchNews({
                    searchKey: searchKeyword,
                    articles: data.articles,
                    page: {
                        current: page.current,
                        end:
                            data.totalResults % 20 === 0
                                ? 1
                                : data.totalResults % 20
                    }
                });
            });
    };

    render() {
        const { news, bookmarked, onBookmarkChanged } = this.props;

        return (
            <div>
                <Search {...this.props} />
                <Bookmarks bookmarked={bookmarked} />
                <NewsWrapper
                    news={news}
                    onBookmarkToggle={onBookmarkChanged}
                    bookmarked={bookmarked}
                />
                <Pagination
                    {...news.page}
                    onPageChange={this.props.onPageChange}
                />
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateNews: newsPayload => {
            dispatch(updateNews(newsPayload));
        },
        onSearchNews: searchPayload => {
            dispatch(searchNews(searchPayload));
        },
        onPageChange: page => {
            dispatch(changePage(page));
        },
        onBookmarkChanged: news => {
            bookmarkLocalStoreSetter(news)(dispatch);
        }
    };
};

const mapStateToProps = state => {
    return {
        news: state.news,
        bookmarked: state.news.bookmarked
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsContainer);
