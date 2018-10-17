import { FETCH_NEWS, SEARCH_NEWS, CHANGE_PAGE, TOGGLE_BOOKMARK } from "./types";

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
            end: searchPayload.page.end || 1
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

export const bookmarkToggle = news => ({
    type: TOGGLE_BOOKMARK,
    payload: {
        newspayload: news
    }
});
