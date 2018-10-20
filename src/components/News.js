import React from "react";
import LazyLoad from "react-lazyload";

const News = ({ news, onBookmarkToggle, bookmarked }) => {
    const placeholderImage =
        "http://res.cloudinary.com/scarecr0w/image/fetch/c_scale,e_grayscale,q_66,w_420/v1539461519/https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9";

    const bookmarked_ = bookmarked.indexOf(news);
    console.log(bookmarked_);
    return (
        <div className="news-entry">
            <div className="news-image">
                <LazyLoad height={200}>
                    <img
                        src={
                            news.urlToImage && news.urlToImage.length > 0
                                ? news.urlToImage
                                : placeholderImage
                        }
                        alt={news.title}
                    />
                </LazyLoad>
            </div>
            <div className="news-contents">
                <h1>
                    <a
                        href={news.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {news.title}
                    </a>
                </h1>
                <h3>{news.description}</h3>
                <p>{news.content}</p>
                <div>
                    <span className="source">{news.source.name}</span>
                </div>

                <div className="news-manage">
                    <span
                        className={`icon-bookmark-outline-add`}
                        title={
                            bookmarked_ < 0
                                ? "Add to bookmark!"
                                : "Remove from bookmarks!"
                        }
                        style={{
                            color: bookmarked_ > -1 ? "#2789e9" : "white"
                        }}
                        onClick={() => onBookmarkToggle(news)}
                    />

                    <span className="date">
                        <span
                            className="icon-calendar"
                            title="Published Date"
                        />
                        &nbsp;
                        {news.publishedAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default News;
