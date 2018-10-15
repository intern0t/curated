import React from "react";
import { connect } from "react-redux";
import { updateNews, searchNews } from "../actions";
import News from "../components/News";
import Search from "../components/Search";
import Footer from "../components/Footer";
import uuid from "uuid/v4";
import CONFIG from "../config";

class NewsContainer extends React.Component {
    componentDidMount() {
        const { onUpdateNews } = this.props;
        const { apiIndex, searchKeyword } = this.props.news;

        fetch(
            `${CONFIG.NEWSAPI_ENDPOINT}${
                [apiIndex] === "NEWSAPI_HEADLINES"
                    ? CONFIG[apiIndex]
                    : CONFIG[apiIndex].replace("SEARCH_QUERY", searchKeyword)
            }${CONFIG.NEWSAPI_KEY}`
        )
            .then(res => res.json())
            .then(data => {
                onUpdateNews(data.articles);
            });
    }

    componentDidUpdate(prevProps) {
        const { onUpdateNews } = this.props;
        const { apiIndex, searchKeyword } = this.props.news;

        if (
            prevProps.news.apiIndex !== apiIndex ||
            prevProps.news.searchKeyword !== searchKeyword
        ) {
            fetch(
                `${CONFIG.NEWSAPI_ENDPOINT}${
                    [apiIndex] === "NEWSAPI_HEADLINES"
                        ? CONFIG[apiIndex]
                        : CONFIG[apiIndex].replace(
                              "SEARCH_QUERY",
                              searchKeyword
                          )
                }${CONFIG.NEWSAPI_KEY}`
            )
                .then(res => res.json())
                .then(data => {
                    onUpdateNews(data.articles);
                });
        }
    }

    render() {
        const { news } = this.props;

        return (
            <div>
                <Search {...this.props} />
                <div className="news-container">
                    {news.news && news.news.length > 0 ? (
                        news.news.map(_news => {
                            return <News news={_news} key={uuid()} />;
                        })
                    ) : (
                        <div className="warn">There's no new news!</div>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateNews: news => {
            dispatch(updateNews(news));
        },
        onSearchNews: searchkey => {
            dispatch(searchNews(searchkey));
        }
    };
};

const mapStateToProps = state => {
    return {
        news: state.news
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsContainer);
