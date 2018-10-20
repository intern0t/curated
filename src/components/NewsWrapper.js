import React from "react";
import News from "./News";
import uuid from "uuid/v4";

const NewsWrapper = ({ news, bookmarked, onBookmarkToggle }) => {
    return (
        <div className="news-container">
            {news.news && news.news.length > 0 ? (
                news.news.map(_news => {
                    return (
                        <News
                            news={_news}
                            key={uuid()}
                            onBookmarkToggle={onBookmarkToggle}
                            bookmarked={bookmarked}
                        />
                    );
                })
            ) : (
                <div className="warn">
                    {
                        "There seems to be no news! Are you absolutely sure that you set your NewsAPI.org's API key?"
                    }
                </div>
            )}
        </div>
    );
};

export default NewsWrapper;
