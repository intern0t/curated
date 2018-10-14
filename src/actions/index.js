import { FETCH_NEWS, SEARCH_NEWS } from "./types";

export const updateNews = articles => ({
    type: FETCH_NEWS,
    payload: {
        news: articles
    }
});

export const searchNews = searchResults => ({
    type: SEARCH_NEWS,
    payload: {
        news: searchResults
    }
});
