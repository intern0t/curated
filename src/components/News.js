import React from "react";
import iconBookmarkOutline from "../styles/zondicons/bookmark-outline-add.svg";
import iconStar from "../styles/zondicons/star-full.svg";
import iconCalendar from "../styles/zondicons/calendar.svg";

const News = ({ news }) => {
    const placeholderImage =
        "https://res.cloudinary.com/scarecr0w/image/fetch/c_scale,e_grayscale,q_45,w_600/https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b14a6d0af40f1f9297ad42e2bf4d384&auto=format&fit=crop&w=1875&q=80";
    return (
        <div className="news-entry">
            <div className="news-image">
                <img
                    src={
                        news.urlToImage && news.urlToImage.length > 0
                            ? news.urlToImage
                            : placeholderImage
                    }
                    alt={news.title}
                />
            </div>
            <div className="news-contents">
                <h1>
                    <a href={news.url}>{news.title}</a>
                </h1>
                <h3>{news.description}</h3>
                <p>{news.content}</p>
                <div>
                    <span className="source">{news.source.name}</span>
                </div>

                <div className="news-manage">
                    <div>
                        <img src={iconBookmarkOutline} alt="Add to bookmark!" />
                        <img src={iconStar} alt="Add to favorite!" />
                    </div>
                    <span className="date">
                        <img src={iconCalendar} alt="Published Date" />
                        &nbsp;
                        {news.publishedAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default News;
