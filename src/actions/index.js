import {
    FETCH_NEWS,
    SEARCH_NEWS,
    CHANGE_PAGE,
    TOGGLE_BOOKMARK,
    INITIALIZE_BOOKMARKS
} from "./types";

export const updateNews = newsPayload => ({
    type: FETCH_NEWS,
    payload: {
        news: newsPayload.articles,
        page: {
            current: 1,
            end: newsPayload.page.end
        }
    }
});

export const searchNews = searchPayload => ({
    type: SEARCH_NEWS,
    payload: {
        searchKey: searchPayload.searchKey,
        apiIndex: "NEWSAPI_SEARCH",
        news: searchPayload.articles,
        page: {
            current: searchPayload.page.current || 1,
            end: searchPayload.page.end
        }
    }
});

export const changePage = page => ({
    type: CHANGE_PAGE,
    payload: {
        page: {
            current: page
        }
    }
});

export const changePageMiddleware = page => (dispatch, getState) => {
    let { current } = getState().news.bookmarked;

    if (current !== page) {
        dispatch(changePage(page));
    } else {
        dispatch(changePage(current));
    }
};

export const bookmarkToggle = news => ({
    type: TOGGLE_BOOKMARK,
    payload: {
        newspayload: news
    }
});

const writeToLocalStorage = bookmarked => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
};

const fetchLocalStorage = bookmarked => ({
    type: INITIALIZE_BOOKMARKS,
    payload: {
        bookmarked
    }
});

export const bookmarkLocalStoreSetter = news => (dispatch, getState) => {
    dispatch(bookmarkToggle(news));
    writeToLocalStorage(getState().news.bookmarked);
};

export const fetchBookmarksFromLocalStorage = () => (dispatch, getState) => {
    const getBookmarks = localStorage.getItem("bookmarked");

    if (getBookmarks && getBookmarks !== null) {
        const parsedBookmarks = JSON.parse(getBookmarks);
        if (parsedBookmarks && parsedBookmarks !== null) {
            dispatch(fetchLocalStorage(parsedBookmarks));
        }
    }
};
