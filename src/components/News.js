import React from "react";
import LazyLoad from "react-lazyload";

const News = ({ news, onBookmarkToggle, bookmarked }) => {
    const unsplashRandom = "https://source.unsplash.com/random/600x512";
    const placeholderImage =
        news.urlToImage &&
        news.urlToImage.length > 0 &&
        news.urlToImage.indexOf("www.washingtonpost.com") < 0
            ? news.urlToImage
            : unsplashRandom; //"https://res.cloudinary.com/scarecr0w/image/fetch/c_scale,e_grayscale,q_66,w_420/v1539461519/https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9";

    const bookmarked_ =
        bookmarked &&
        bookmarked.some(
            bookmark =>
                bookmark.description === news.description &&
                bookmark.content === news.content &&
                bookmark.publishedAt === news.publishedAt &&
                bookmark.source.id === news.source.id
        );

    return (
        <div className="news-entry">
            <LazyLoad height={200}>
                <div
                    className="news-image"
                    style={{
                        backgroundImage: `url(${placeholderImage})`
                    }}
                >
                    {placeholderImage === unsplashRandom ? (
                        <span>{"Random Image courtesy of Unsplash!"}</span>
                    ) : null}
                </div>
            </LazyLoad>
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
                            bookmarked_
                                ? "Remove from bookmarks!"
                                : "Add to bookmark!"
                        }
                        style={{
                            color: bookmarked_ ? "#2789e9" : "white"
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
