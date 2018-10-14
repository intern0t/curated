import React from "react";
import { connect } from "react-redux";
import { updateNews } from "../actions";
import News from "../components/News";
import Search from "../components/Search";
import Footer from "../components/Footer";
import uuid from "uuid/v4";
import { NEWSAPI_HEADLINES, NEWSAPI_KEY } from "../config";

class NewsContainer extends React.Component {
    componentDidMount() {
        const { onUpdateNews } = this.props;
        fetch(`${NEWSAPI_HEADLINES}${NEWSAPI_KEY}`)
            .then(res => res.json())
            .then(data => {
                onUpdateNews(data.articles);
            });
    }

    render() {
        const { news } = this.props;
        return (
            <div>
                <Search />
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
        }
    };
};

const mapStateToProps = state => {
    return {
        news: state.news,
        apiIndex: state.apiIndex
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsContainer);
