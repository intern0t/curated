import React from "react";

const Bookmarks = ({ bookmarked }) => {
    return (
        <div className="bookmark-section">
            You have <span className="count">{bookmarked.length}</span>{" "}
            bookmarks. Press the <span className="icon-bookmark-outline-add" />{" "}
            button to add to your bookmarked list.
        </div>
    );
};

export default Bookmarks;
